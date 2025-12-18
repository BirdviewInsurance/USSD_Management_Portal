import { Invoice, BillingItem, Payment, BillingFormData } from '@/lib/types';

export class BillingController {
    private invoices: Invoice[] = [];
    private payments: Payment[] = [];

    constructor() {
        this.initializeSampleData();
    }

    private initializeSampleData() {
        // Sample invoices
        this.invoices = [
            {
                id: '1',
                clientId: '1',
                clientName: 'Acme Corp',
                clientEmail: 'billing@acme.com',
                invoiceNumber: 'INV-2024-001',
                date: '2024-01-15',
                dueDate: '2024-02-15',
                status: 'paid',
                subtotal: 2200,
                tax: 220,
                discount: 50,
                total: 2370,
                items: [
                    { id: '1', description: 'USSD Service - Premium Plan', quantity: 1, unitPrice: 1500, total: 1500 },
                    { id: '2', description: 'API Integration', quantity: 10, unitPrice: 50, total: 500 },
                    { id: '3', description: 'Support & Maintenance', quantity: 1, unitPrice: 200, total: 200 },
                ],
                notes: 'Thank you for your business!',
                paymentMethod: 'credit_card',
                paidDate: '2024-01-20',
                createdAt: '2024-01-15T10:30:00Z',
            },
            {
                id: '2',
                clientId: '2',
                clientName: 'Globex Inc',
                clientEmail: 'finance@globex.com',
                invoiceNumber: 'INV-2024-002',
                date: '2024-01-16',
                dueDate: '2024-02-16',
                status: 'sent',
                subtotal: 1800,
                tax: 180,
                discount: 0,
                total: 1980,
                items: [
                    { id: '1', description: 'USSD Service - Basic Plan', quantity: 1, unitPrice: 1000, total: 1000 },
                    { id: '2', description: 'SMS Credits', quantity: 8000, unitPrice: 0.1, total: 800 },
                ],
                notes: 'Payment due within 30 days',
                createdAt: '2024-01-16T14:20:00Z',
            },
            {
                id: '3',
                clientId: '3',
                clientName: 'Stark Industries',
                clientEmail: 'accounts@stark.com',
                invoiceNumber: 'INV-2024-003',
                date: '2024-01-10',
                dueDate: '2024-02-10',
                status: 'overdue',
                subtotal: 3200,
                tax: 320,
                discount: 100,
                total: 3420,
                items: [
                    { id: '1', description: 'USSD Service - Enterprise Plan', quantity: 1, unitPrice: 2500, total: 2500 },
                    { id: '2', description: 'Custom Development', quantity: 20, unitPrice: 35, total: 700 },
                ],
                createdAt: '2024-01-10T09:15:00Z',
            },
        ];

        // Sample payments
        this.payments = [
            {
                id: '1',
                invoiceId: '1',
                invoiceNumber: 'INV-2024-001',
                clientName: 'Acme Corp',
                amount: 2370,
                date: '2024-01-20',
                method: 'credit_card',
                status: 'completed',
                reference: 'TRX-00123',
            },
            {
                id: '2',
                invoiceId: '2',
                invoiceNumber: 'INV-2024-002',
                clientName: 'Globex Inc',
                amount: 1980,
                date: '2024-01-25',
                method: 'bank_transfer',
                status: 'pending',
                reference: 'BTR-45678',
            },
        ];
    }

    // Invoice CRUD Operations
    async getInvoices(filters?: {
        status?: Invoice['status'];
        clientId?: string;
        startDate?: string;
        endDate?: string;
    }): Promise<Invoice[]> {
        let filtered = this.invoices;

        if (filters?.status) {
            filtered = filtered.filter(invoice => invoice.status === filters.status);
        }

        if (filters?.clientId) {
            filtered = filtered.filter(invoice => invoice.clientId === filters.clientId);
        }

        if (filters?.startDate) {
            filtered = filtered.filter(invoice => invoice.date >= filters.startDate!);
        }

        if (filters?.endDate) {
            filtered = filtered.filter(invoice => invoice.date <= filters.endDate!);
        }

        return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    async getInvoiceById(id: string): Promise<Invoice | null> {
        return this.invoices.find(invoice => invoice.id === id) || null;
    }

    async createInvoice(data: BillingFormData): Promise<Invoice> {
        // Calculate totals
        const subtotal = data.items.reduce((sum, item) => sum + item.total, 0);
        const total = subtotal + data.tax - data.discount;

        const newInvoice: Invoice = {
            id: Date.now().toString(),
            ...data,
            subtotal,
            total,
            status: 'draft',
            createdAt: new Date().toISOString(),
        };

        this.invoices.push(newInvoice);
        return newInvoice;
    }

    async updateInvoice(id: string, data: Partial<Invoice>): Promise<Invoice | null> {
        const index = this.invoices.findIndex(invoice => invoice.id === id);

        if (index === -1) return null;

        // Recalculate totals if items changed
        if (data.items) {
            data.subtotal = data.items.reduce((sum, item) => sum + item.total, 0);
            data.total = (data.subtotal || 0) + (data.tax || 0) - (data.discount || 0);
        }

        this.invoices[index] = { ...this.invoices[index], ...data };
        return this.invoices[index];
    }

    async deleteInvoice(id: string): Promise<boolean> {
        const initialLength = this.invoices.length;
        this.invoices = this.invoices.filter(invoice => invoice.id !== id);
        return this.invoices.length < initialLength;
    }

    async sendInvoice(id: string): Promise<Invoice | null> {
        const invoice = await this.getInvoiceById(id);
        if (!invoice) return null;

        invoice.status = 'sent';
        return invoice;
    }

    async markAsPaid(id: string, paymentData: {
        method: Payment['method'];
        reference: string;
        date: string;
    }): Promise<{ invoice: Invoice; payment: Payment } | null> {
        const invoice = await this.getInvoiceById(id);
        if (!invoice) return null;

        invoice.status = 'paid';
        invoice.paymentMethod = paymentData.method;
        invoice.paidDate = paymentData.date;

        const newPayment: Payment = {
            id: Date.now().toString(),
            invoiceId: id,
            invoiceNumber: invoice.invoiceNumber,
            clientName: invoice.clientName,
            amount: invoice.total,
            date: paymentData.date,
            method: paymentData.method,
            status: 'completed',
            reference: paymentData.reference,
        };

        this.payments.push(newPayment);
        return { invoice, payment: newPayment };
    }

    // Payment Operations
    async getPayments(): Promise<Payment[]> {
        return this.payments;
    }

    async getPaymentById(id: string): Promise<Payment | null> {
        return this.payments.find(payment => payment.id === id) || null;
    }

    async getBillingStats() {
        const totalRevenue = this.payments
            .filter(p => p.status === 'completed')
            .reduce((sum, p) => sum + p.amount, 0);

        const pendingInvoices = this.invoices.filter(i => i.status === 'sent' || i.status === 'overdue');
        const pendingAmount = pendingInvoices.reduce((sum, i) => sum + i.total, 0);

        const overdueInvoices = this.invoices.filter(i => i.status === 'overdue');
        const overdueAmount = overdueInvoices.reduce((sum, i) => sum + i.total, 0);

        return {
            totalInvoices: this.invoices.length,
            paidInvoices: this.invoices.filter(i => i.status === 'paid').length,
            pendingInvoices: pendingInvoices.length,
            overdueInvoices: overdueInvoices.length,
            totalRevenue,
            pendingAmount,
            overdueAmount,
        };
    }

    async generateInvoiceNumber(): Promise<string> {
        const year = new Date().getFullYear();
        const lastInvoice = this.invoices
            .filter(inv => inv.invoiceNumber.includes(`INV-${year}`))
            .sort((a, b) => {
                const numA = parseInt(a.invoiceNumber.split('-').pop() || '0');
                const numB = parseInt(b.invoiceNumber.split('-').pop() || '0');
                return numB - numA;
            })[0];

        let nextNumber = 1;
        if (lastInvoice) {
            const lastNumber = parseInt(lastInvoice.invoiceNumber.split('-').pop() || '0');
            nextNumber = lastNumber + 1;
        }

        return `INV-${year}-${nextNumber.toString().padStart(3, '0')}`;
    }
}