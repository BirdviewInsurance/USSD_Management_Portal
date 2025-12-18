import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { prisma } from './db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const JWT_EXPIRES_IN = '7d'

export interface AuthUser {
    id: string
    email: string
    name: string
    role: string
}

export class AuthService {
    // Hash password
    static async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    // Verify password
    static async verifyPassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }

    // Generate JWT token
    static generateToken(user: AuthUser): string {
        return jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        )
    }

    // Verify JWT token
    static verifyToken(token: string): AuthUser | null {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as AuthUser
            return decoded
        } catch (error) {
            return null
        }
    }

    // Register new user
    static async register(data: {
        email: string
        password: string
        name: string
        role?: string
    }): Promise<{ user: AuthUser; token: string }> {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        })

        if (existingUser) {
            throw new Error('User already exists')
        }

        const hashedPassword = await this.hashPassword(data.password)

        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                name: data.name,
                role: data.role || 'VIEWER',
            },
        })

        const authUser: AuthUser = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }

        const token = this.generateToken(authUser)

        return { user: authUser, token }
    }

    // Login user
    static async login(
        email: string,
        password: string
    ): Promise<{ user: AuthUser; token: string }> {
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            throw new Error('Invalid credentials')
        }

        if (!user.isActive) {
            throw new Error('Account is disabled')
        }

        const isValidPassword = await this.verifyPassword(password, user.password)

        if (!isValidPassword) {
            throw new Error('Invalid credentials')
        }

        // Update last login
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
        })

        const authUser: AuthUser = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }

        const token = this.generateToken(authUser)

        return { user: authUser, token }
    }

    // Get current user
    static async getCurrentUser(token: string): Promise<AuthUser | null> {
        const decoded = this.verifyToken(token)
        if (!decoded) return null

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
        })

        if (!user || !user.isActive) return null

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }
    }

    // Change password
    static async changePassword(
        userId: string,
        currentPassword: string,
        newPassword: string
    ): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        if (!user) {
            throw new Error('User not found')
        }

        const isValid = await this.verifyPassword(currentPassword, user.password)

        if (!isValid) {
            throw new Error('Current password is incorrect')
        }

        const hashedPassword = await this.hashPassword(newPassword)

        await prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        })

        return true
    }
}

// Middleware for protecting routes
import { Request, Response, NextFunction } from 'express'

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '')

        if (!token) {
            return res.status(401).json({ error: 'No token provided' })
        }

        const user = await AuthService.getCurrentUser(token)

        if (!user) {
            return res.status(401).json({ error: 'Invalid token' })
        }

        // Attach user to request
        ; (req as any).user = user
        next()
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' })
    }
}

// Middleware for role-based authorization
export const authorize = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user

        if (!user) {
            return res.status(401).json({ error: 'Not authenticated' })
        }

        if (!roles.includes(user.role)) {
            return res.status(403).json({ error: 'Not authorized' })
        }

        next()
    }
}