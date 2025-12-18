export const API_DOCS = {
    endpoints: {
        // Authentication
        '/api/auth/login': {
            method: 'POST',
            description: 'User login',
            body: {
                email: 'string',
                password: 'string',
            },
            response: {
                success: 'boolean',
                user: 'User object',
                token: 'JWT token',
            },
        },

        // Clients
        '/api/clients': {
            GET: {
                description: 'Get all clients',
                query: {
                    status: 'ACTIVE|INACTIVE|SUSPENDED',
                    search: 'string',
                    page: 'number',
                    limit: 'number',
                },
                response: {
                    success: 'boolean',
                    data: 'Array of clients',
                    pagination: 'Pagination info',
                },
            },
            POST: {
                description: 'Create new client',
                body: 'Client data',
                response: {
                    success: 'boolean',
                    data: 'Created client',
                },
            },
        },

        // Invoices
        '/api/invoices': {
            GET: {
                description: 'Get all invoices',
                query: {
                    status: 'DRAFT|SENT|PAID|OVERDUE',
                    clientId: 'string',
                    startDate: 'ISO date',
                    endDate: 'ISO date',
                    page: 'number',
                    limit: 'number',
                },
                response: {
                    success: 'boolean',
                    data: 'Array of invoices',
                    pagination: 'Pagination info',
                },
            },
            POST: {
                description: 'Create new invoice',
                body: 'Invoice data',
                response: {
                    success: 'boolean',
                    data: 'Created invoice',
                },
            },
        },

        '/api/invoices/:id/send': {
            POST: {
                description: 'Send invoice to client',
                response: {
                    success: 'boolean',
                    data: 'Updated invoice',
                },
            },
        },

        '/api/invoices/:id/pay': {
            POST: {
                description: 'Mark invoice as paid',
                body: {
                    method: 'CREDIT_CARD|BANK_TRANSFER|CASH|PAYPAL',
                    reference: 'string',
                    notes: 'string',
                },
                response: {
                    success: 'boolean',
                    data: {
                        invoice: 'Updated invoice',
                        payment: 'Created payment',
                    },
                },
            },
        },

        // Dashboard
        '/api/dashboard/stats': {
            GET: {
                description: 'Get dashboard statistics',
                response: {
                    success: 'boolean',
                    data: {
                        totalClients: 'number',
                        activeClients: 'number',
                        totalInvoices: 'number',
                        paidInvoices: 'number',
                        pendingInvoices: 'number',
                        overdueInvoices: 'number',
                        totalRevenue: 'number',
                        totalProviders: 'number',
                        onlineProviders: 'number',
                        totalUsage: 'number',
                    },
                },
            },
        },

        // Webhook
        '/api/webhook/ussd': {
            POST: {
                description: 'Receive USSD request data',
                body: {
                    clientId: 'string',
                    providerId: 'string',
                    requests: 'number',
                    duration: 'number',
                    success: 'boolean',
                    cost: 'number',
                },
                response: {
                    success: 'boolean',
                },
            },
        },
    },

    models: {
        User: {
            id: 'string',
            email: 'string',
            name: 'string',
            role: 'ADMIN|MANAGER|VIEWER',
            avatar: 'string',
            isActive: 'boolean',
            lastLogin: 'Date',
            createdAt: 'Date',
            updatedAt: 'Date',
        },

        Client: {
            id: 'string',
            name: 'string',
            email: 'string',
            company: 'string',
            phone: 'string',
            status: 'ACTIVE|INACTIVE|SUSPENDED',
            usage: 'number',
            creditBalance: 'number',
            plan: 'basic|premium|enterprise',
            monthlyRate: 'number',
            lastBilled: 'Date',
            nextBilling: 'Date',
            createdAt: 'Date',
            updatedAt: 'Date',
        },

        Invoice: {
            id: 'string',
            invoiceNumber: 'string',
            clientId: 'string',
            date: 'Date',
            dueDate: 'Date',
            status: 'DRAFT|SENT|PAID|OVERDUE|CANCELLED',
            subtotal: 'number',
            tax: 'number',
            discount: 'number',
            total: 'number',
            items: 'Array of BillingItem',
            notes: 'string',
            paymentMethod: 'PaymentMethod',
            paidDate: 'Date',
            pdfUrl: 'string',
            sentAt: 'Date',
            createdAt: 'Date',
            updatedAt: 'Date',
        },

        BillingItem: {
            id: 'string',
            description: 'string',
            quantity: 'number',
            unitPrice: 'number',
            total: 'number',
        },
    },
}