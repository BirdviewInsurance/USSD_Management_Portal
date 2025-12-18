import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { authenticate, authorize } from '@/lib/auth'
import { db } from '@/lib/db'
import { EmailService } from '@/lib/email'
import { PDFService } from '@/lib/pdf'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Auth routes
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const { user, token } = await AuthService.login(email, password)

        res.json({ success: true, user, token })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body
        const { user, token } = await AuthService.register({ email, password, name })

        res.status(201).json({ success: true, user, token })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

// Protected routes
app.use('/api/*', authenticate)

// Clients API
app.get('/api/clients', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const { status, search, page = 1, limit = 10 } = req.query

        const where: any = {}
        if (status) where.status = status
        if (search) {
            where.OR = [
                { name: { contains: search as string, mode: 'insensitive' } },
                { email: { contains: search as string, mode: 'insensitive' } },
                { company: { contains: search as string, mode: 'insensitive' } },
            ]
        }

        const clients = await db.client.findMany({
            where,
            skip: (Number(page) - 1) * Number(limit),
            take: Number(limit),
            orderBy: { createdAt: 'desc' },
        })

        const total = await prisma.client.count({ where })

        res.json({
            success: true,
            data: clients,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/api/clients/:id', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const client = await db.client.findById(req.params.id)

        if (!client) {
            return res.status(404).json({ error: 'Client not found' })
        }

        res.json({ success: true, data: client })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.post('/api/clients', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const client = await db.client.create(req.body)
        res.status(201).json({ success: true, data: client })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

app.put('/api/clients/:id', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const client = await db.client.update(req.params.id, req.body)
        res.json({ success: true, data: client })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

app.delete('/api/clients/:id', authorize('ADMIN'), async (req, res) => {
    try {
        await db.client.delete(req.params.id)
        res.json({ success: true })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

// Providers API
app.get('/api/providers', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const { status, type, search } = req.query

        const where: any = {}
        if (status) where.status = status
        if (type) where.type = type
        if (search) {
            where.OR = [
                { name: { contains: search as string, mode: 'insensitive' } },
                { location: { contains: search as string, mode: 'insensitive' } },
            ]
        }

        const providers = await db.provider.findMany({ where })
        res.json({ success: true, data: providers })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.post('/api/providers', authorize('ADMIN'), async (req, res) => {
    try {
        const provider = await db.provider.create(req.body)
        res.status(201).json({ success: true, data: provider })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

app.put('/api/providers/:id/status', authorize('ADMIN'), async (req, res) => {
    try {
        const { status, ...metrics } = req.body
        const provider = await db.provider.updateStatus(req.params.id, status, metrics)
        res.json({ success: true, data: provider })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

// Invoices API
app.get('/api/invoices', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const { status, clientId, startDate, endDate, page = 1, limit = 10 } = req.query

        const where: any = {}
        if (status) where.status = status
        if (clientId) where.clientId = clientId
        if (startDate || endDate) {
            where.date = {}
            if (startDate) where.date.gte = new Date(startDate as string)
            if (endDate) where.date.lte = new Date(endDate as string)
        }

        const invoices = await db.invoice.findMany({
            where,
            skip: (Number(page) - 1) * Number(limit),
            take: Number(limit),
        })

        const total = await prisma.invoice.count({ where })

        res.json({
            success: true,
            data: invoices,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/api/invoices/:id', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const invoice = await db.invoice.findById(req.params.id)

        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' })
        }

        res.json({ success: true, data: invoice })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.post('/api/invoices', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const invoice = await db.invoice.create(req.body)
        res.status(201).json({ success: true, data: invoice })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

app.post('/api/invoices/:id/send', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const invoice = await db.invoice.updateStatus(req.params.id, 'SENT')

        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' })
        }

        // Get client details
        const client = await db.client.findById(invoice.clientId)

        if (client) {
            // Generate PDF
            const pdfBuffer = await PDFService.generateInvoicePDF(invoice, client)

            // Send email
            await EmailService.sendInvoiceEmail(invoice, client, pdfBuffer)

            // Update invoice with PDF URL
            const pdfUrl = `/api/invoices/${invoice.id}/pdf`
            await db.invoice.update(invoice.id, { pdfUrl })
        }

        res.json({ success: true, data: invoice })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.post('/api/invoices/:id/pay', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const { method, reference, notes } = req.body

        const invoice = await db.invoice.findById(req.params.id)

        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' })
        }

        // Create payment
        const payment = await db.payment.create({
            invoiceId: invoice.id,
            clientId: invoice.clientId,
            amount: invoice.total,
            method,
            status: 'COMPLETED',
            reference,
            notes,
        })

        // Update invoice status
        await db.invoice.updateStatus(invoice.id, 'PAID', {
            paymentMethod: method,
            paidDate: new Date(),
        })

        // Get client details for email
        const client = await db.client.findById(invoice.clientId)

        if (client) {
            // Send payment confirmation email
            await EmailService.sendPaymentConfirmation(payment, invoice, client)
        }

        res.json({ success: true, data: { invoice, payment } })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/api/invoices/:id/pdf', async (req, res) => {
    try {
        const invoice = await db.invoice.findById(req.params.id)

        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' })
        }

        const client = await db.client.findById(invoice.clientId)

        if (!client) {
            return res.status(404).json({ error: 'Client not found' })
        }

        const pdfBuffer = await PDFService.generateInvoicePDF(invoice, client)

        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', `attachment; filename=invoice-${invoice.invoiceNumber}.pdf`)
        res.send(pdfBuffer)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

// Payments API
app.get('/api/payments', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const { clientId, status, startDate, endDate } = req.query

        const where: any = {}
        if (clientId) where.clientId = clientId
        if (status) where.status = status
        if (startDate || endDate) {
            where.createdAt = {}
            if (startDate) where.createdAt.gte = new Date(startDate as string)
            if (endDate) where.createdAt.lte = new Date(endDate as string)
        }

        const payments = await db.payment.findMany({ where })
        res.json({ success: true, data: payments })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

// Dashboard stats
app.get('/api/dashboard/stats', authorize('ADMIN', 'MANAGER', 'VIEWER'), async (req, res) => {
    try {
        const stats = await db.getDashboardStats()
        res.json({ success: true, data: stats })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

// Usage analytics
app.get('/api/analytics/usage', authorize('ADMIN', 'MANAGER'), async (req, res) => {
    try {
        const { period = 'month' } = req.query

        const usageStats = await db.usageLog.getStats(period as any)

        // Format for chart
        const chartData = usageStats.map(stat => ({
            date: new Date(stat.timestamp).toISOString().split('T')[0],
            requests: stat._sum.requests || 0,
            revenue: stat._sum.cost || 0,
        }))

        res.json({ success: true, data: chartData })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

// Webhook for USSD requests (simulated)
app.post('/api/webhook/ussd', async (req, res) => {
    try {
        const { clientId, providerId, requests, duration, success, cost } = req.body

        // Log usage
        await db.usageLog.create({
            clientId,
            providerId,
            requests,
            duration,
            success,
            cost,
            timestamp: new Date(),
        })

        // Update client usage
        if (clientId) {
            await db.client.updateUsage(clientId, requests)
        }

        // Update provider metrics
        if (providerId) {
            await prisma.provider.update({
                where: { id: providerId },
                data: {
                    requests: { increment: requests },
                    lastHeartbeat: new Date(),
                },
            })
        }

        res.json({ success: true })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
})

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong!' })
})

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`)
})