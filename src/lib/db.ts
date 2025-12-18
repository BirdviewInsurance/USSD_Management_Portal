import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Helper functions for common operations
export const db = {
    // Client operations
    client: {
        findMany: async (options?: any) => {
            return await prisma.client.findMany({
                include: {
                    _count: {
                        select: {
                            invoices: true,
                            payments: true,
                            usageLogs: true,
                        },
                    },
                    ...options?.include,
                },
                where: options?.where,
                orderBy: options?.orderBy,
                skip: options?.skip,
                take: options?.take,
            })
        },

        findById: async (id: string) => {
            return await prisma.client.findUnique({
                where: { id },
                include: {
                    invoices: {
                        orderBy: { createdAt: 'desc' },
                        take: 10,
                    },
                    payments: {
                        orderBy: { createdAt: 'desc' },
                        take: 10,
                    },
                },
            })
        },

        create: async (data: any) => {
            return await prisma.client.create({
                data: {
                    ...data,
                    nextBilling: data.nextBilling || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                },
            })
        },

        update: async (id: string, data: any) => {
            return await prisma.client.update({
                where: { id },
                data,
            })
        },

        delete: async (id: string) => {
            return await prisma.client.delete({
                where: { id },
            })
        },

        updateUsage: async (id: string, requests: number) => {
            return await prisma.client.update({
                where: { id },
                data: {
                    usage: {
                        increment: requests,
                    },
                },
            })
        },
    },

    // Provider operations
    provider: {
        findMany: async (options?: any) => {
            return await prisma.provider.findMany({
                include: {
                    _count: {
                        select: {
                            usageLogs: true,
                        },
                    },
                    ...options?.include,
                },
                where: options?.where,
                orderBy: options?.orderBy,
            })
        },

        findById: async (id: string) => {
            return await prisma.provider.findUnique({
                where: { id },
            })
        },

        create: async (data: any) => {
            return await prisma.provider.create({
                data,
            })
        },

        update: async (id: string, data: any) => {
            return await prisma.provider.update({
                where: { id },
                data,
            })
        },

        updateStatus: async (id: string, status: string, metrics?: any) => {
            return await prisma.provider.update({
                where: { id },
                data: {
                    status,
                    lastHeartbeat: new Date(),
                    ...metrics,
                },
            })
        },

        delete: async (id: string) => {
            return await prisma.provider.delete({
                where: { id },
            })
        },
    },

    // Invoice operations
    invoice: {
        findMany: async (options?: any) => {
            return await prisma.invoice.findMany({
                include: {
                    client: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                    payments: {
                        select: {
                            id: true,
                            amount: true,
                            status: true,
                            createdAt: true,
                        },
                    },
                    ...options?.include,
                },
                where: options?.where,
                orderBy: options?.orderBy || { createdAt: 'desc' },
                skip: options?.skip,
                take: options?.take,
            })
        },

        findById: async (id: string) => {
            return await prisma.invoice.findUnique({
                where: { id },
                include: {
                    client: true,
                    payments: true,
                },
            })
        },

        findByNumber: async (invoiceNumber: string) => {
            return await prisma.invoice.findUnique({
                where: { invoiceNumber },
                include: {
                    client: true,
                },
            })
        },

        create: async (data: any) => {
            // Generate invoice number
            const year = new Date().getFullYear()
            const lastInvoice = await prisma.invoice.findFirst({
                where: {
                    invoiceNumber: {
                        startsWith: `INV-${year}`,
                    },
                },
                orderBy: { invoiceNumber: 'desc' },
            })

            let nextNumber = 1
            if (lastInvoice) {
                const match = lastInvoice.invoiceNumber.match(/\d+$/)
                if (match) {
                    nextNumber = parseInt(match[0]) + 1
                }
            }

            const invoiceNumber = `INV-${year}-${nextNumber.toString().padStart(3, '0')}`

            return await prisma.invoice.create({
                data: {
                    ...data,
                    invoiceNumber,
                    items: Array.isArray(data.items) ? data.items : [],
                },
            })
        },

        update: async (id: string, data: any) => {
            return await prisma.invoice.update({
                where: { id },
                data,
            })
        },

        updateStatus: async (id: string, status: string, data?: any) => {
            const updateData: any = { status }

            if (status === 'SENT') {
                updateData.sentAt = new Date()
            } else if (status === 'PAID') {
                updateData.paidDate = new Date()
            }

            return await prisma.invoice.update({
                where: { id },
                data: { ...updateData, ...data },
            })
        },

        delete: async (id: string) => {
            return await prisma.invoice.delete({
                where: { id },
            })
        },
    },

    // Payment operations
    payment: {
        findMany: async (options?: any) => {
            return await prisma.payment.findMany({
                include: {
                    client: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                    invoice: {
                        select: {
                            id: true,
                            invoiceNumber: true,
                            total: true,
                        },
                    },
                    ...options?.include,
                },
                where: options?.where,
                orderBy: options?.orderBy || { createdAt: 'desc' },
                skip: options?.skip,
                take: options?.take,
            })
        },

        create: async (data: any) => {
            // Generate reference
            const timestamp = Date.now().toString().slice(-6)
            const random = Math.random().toString(36).substring(2, 6).toUpperCase()
            const reference = `PAY-${timestamp}-${random}`

            return await prisma.payment.create({
                data: {
                    ...data,
                    reference,
                    processedAt: data.status === 'COMPLETED' ? new Date() : null,
                },
            })
        },

        updateStatus: async (id: string, status: string, data?: any) => {
            const updateData: any = { status }

            if (status === 'COMPLETED') {
                updateData.processedAt = new Date()
            }

            return await prisma.payment.update({
                where: { id },
                data: { ...updateData, ...data },
            })
        },
    },

    // Usage log operations
    usageLog: {
        create: async (data: any) => {
            return await prisma.usageLog.create({
                data,
            })
        },

        getStats: async (period: 'day' | 'week' | 'month' | 'year') => {
            const now = new Date()
            let startDate = new Date()

            switch (period) {
                case 'day':
                    startDate.setDate(now.getDate() - 1)
                    break
                case 'week':
                    startDate.setDate(now.getDate() - 7)
                    break
                case 'month':
                    startDate.setMonth(now.getMonth() - 1)
                    break
                case 'year':
                    startDate.setFullYear(now.getFullYear() - 1)
                    break
            }

            const logs = await prisma.usageLog.groupBy({
                by: ['timestamp'],
                where: {
                    timestamp: {
                        gte: startDate,
                    },
                    success: true,
                },
                _sum: {
                    requests: true,
                    cost: true,
                },
                orderBy: {
                    timestamp: 'asc',
                },
            })

            return logs
        },
    },

    // Dashboard statistics
    getDashboardStats: async () => {
        const [
            totalClients,
            activeClients,
            totalInvoices,
            paidInvoices,
            pendingInvoices,
            overdueInvoices,
            totalRevenue,
            totalProviders,
            onlineProviders,
            totalUsage,
        ] = await Promise.all([
            prisma.client.count(),
            prisma.client.count({ where: { status: 'ACTIVE' } }),
            prisma.invoice.count(),
            prisma.invoice.count({ where: { status: 'PAID' } }),
            prisma.invoice.count({ where: { status: 'SENT' } }),
            prisma.invoice.count({ where: { status: 'OVERDUE' } }),
            prisma.payment.aggregate({
                where: { status: 'COMPLETED' },
                _sum: { amount: true },
            }),
            prisma.provider.count(),
            prisma.provider.count({ where: { status: 'ONLINE' } }),
            prisma.client.aggregate({
                _sum: { usage: true },
            }),
        ])

        return {
            totalClients,
            activeClients,
            totalInvoices,
            paidInvoices,
            pendingInvoices,
            overdueInvoices,
            totalRevenue: totalRevenue._sum.amount || 0,
            totalProviders,
            onlineProviders,
            totalUsage: totalUsage._sum.usage || 0,
        }
    },
}