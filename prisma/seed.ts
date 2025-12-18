// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Seeding database...')

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)

    await prisma.user.upsert({
        where: { email: 'admin@ussdportal.com' },
        update: {},
        create: {
            email: 'admin@ussdportal.com',
            password: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN',
            isActive: true,
        },
    })

    // Create manager user
    const managerPassword = await bcrypt.hash('manager123', 10)

    await prisma.user.upsert({
        where: { email: 'manager@ussdportal.com' },
        update: {},
        create: {
            email: 'manager@ussdportal.com',
            password: managerPassword,
            name: 'Manager User',
            role: 'MANAGER',
            isActive: true,
        },
    })

    // Create sample clients
    const clients = [
        {
            name: 'Acme Corporation',
            email: 'billing@acme.com',
            company: 'Acme Corp',
            phone: '+1 (555) 123-4567',
            status: 'ACTIVE',
            usage: 45000,
            creditBalance: 1000,
            plan: 'premium',
            monthlyRate: 1500,
        },
        {
            name: 'Globex Inc',
            email: 'finance@globex.com',
            company: 'Globex Inc',
            phone: '+1 (555) 987-6543',
            status: 'ACTIVE',
            usage: 32000,
            creditBalance: 500,
            plan: 'enterprise',
            monthlyRate: 2500,
        },
        {
            name: 'Stark Industries',
            email: 'accounts@stark.com',
            company: 'Stark Industries',
            phone: '+1 (555) 456-7890',
            status: 'ACTIVE',
            usage: 28000,
            creditBalance: 750,
            plan: 'premium',
            monthlyRate: 1800,
        },
        {
            name: 'Wayne Enterprises',
            email: 'payables@wayne.com',
            company: 'Wayne Enterprises',
            phone: '+1 (555) 321-0987',
            status: 'INACTIVE',
            usage: 15000,
            creditBalance: 0,
            plan: 'basic',
            monthlyRate: 500,
        },
    ]

    for (const clientData of clients) {
        await prisma.client.upsert({
            where: { email: clientData.email },
            update: {},
            create: {
                ...clientData,
                lastBilled: new Date('2024-01-01'),
                nextBilling: new Date('2024-02-01'),
            },
        })
    }

    // Create sample providers
    const providers = [
        {
            name: 'Main Gateway',
            type: 'gateway',
            endpoint: 'https://gateway1.ussdportal.com',
            status: 'ONLINE',
            uptime: 99.9,
            requests: 450000,
            location: 'US East',
            cpuUsage: 45,
            memoryUsage: 60,
            isActive: true,
        },
        {
            name: 'Backup Gateway',
            type: 'gateway',
            endpoint: 'https://gateway2.ussdportal.com',
            status: 'ONLINE',
            uptime: 99.8,
            requests: 210000,
            location: 'US West',
            cpuUsage: 30,
            memoryUsage: 45,
            isActive: true,
        },
        {
            name: 'SMS Gateway',
            type: 'sms',
            endpoint: 'https://sms.ussdportal.com',
            status: 'MAINTENANCE',
            uptime: 95.2,
            requests: 0,
            location: 'Asia Pacific',
            cpuUsage: 0,
            memoryUsage: 0,
            isActive: true,
        },
    ]

    for (const providerData of providers) {
        await prisma.provider.upsert({
            where: { name: providerData.name },
            update: {},
            create: providerData,
        })
    }

    console.log('✅ Database seeded successfully')
}

main()
    .catch((error) => {
        console.error('❌ Error seeding database:', error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })