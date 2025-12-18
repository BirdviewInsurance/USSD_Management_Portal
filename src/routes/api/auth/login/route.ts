import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        const { user, token } = await AuthService.login(email, password)

        const response = NextResponse.json({ success: true, user, token })

        // Set cookie
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        })

        return response
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}