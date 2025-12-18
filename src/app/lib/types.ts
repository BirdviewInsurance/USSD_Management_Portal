// src/lib/types.ts (updated version)
export interface Client {
    id: string;
    name: string;
    email: string;
    company: string;
    phone?: string;
    usage: number;
    status: 'active' | 'inactive' | 'suspended';
    lastBilled: Date;
    nextBilling: Date;
    ussdRequests: number;
    creditBalance: number;
    createdAt: Date;
    plan: 'basic' | 'premium' | 'enterprise';
}

export interface Provider {
    id: string;
    name: string;
    status: 'online' | 'offline' | 'maintenance';
    uptime: number;
    requests: number;
    location: string;
    cpuUsage?: number;
    memoryUsage?: number;
    lastHeartbeat?: Date;
}

export interface BillingRecord {
    id: string;
    clientId: string;
    clientName: string;
    amount: number;
    date: Date;
    status: 'paid' | 'pending' | 'overdue';
    invoiceNumber: string;
    dueDate: Date;
    description?: string;
    items: BillingItem[];
}

export interface BillingItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

export interface Invoice {
    id: string;
    clientId: string;
    clientName: string;
    clientEmail: string;
    invoiceNumber: string;
    date: string;
    dueDate: string;
    status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
    items: BillingItem[];
    notes?: string;
    paymentMethod?: string;
    paidDate?: string;
    createdAt: string;
}

export interface BillingFormData {
    clientId: string;
    clientName: string;
    clientEmail: string;
    invoiceNumber: string;
    date: string;
    dueDate: string;
    items: BillingItem[];
    notes: string;
    tax: number;
    discount: number;
}

export interface Payment {
    id: string;
    invoiceId: string;
    invoiceNumber: string;
    clientName: string;
    amount: number;
    date: string;
    method: 'credit_card' | 'bank_transfer' | 'cash' | 'paypal';
    status: 'completed' | 'pending' | 'failed';
    reference: string;
}

export interface UsageStats {
    totalRequests: number;
    activeClients: number;
    revenue: number;
    pendingInvoices: number;
    averageResponseTime: number;
    peakUsage: number;
}

export interface ChartData {
    date: string;
    requests: number;
    revenue: number;
    errors?: number;
}

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    timestamp: Date;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface FilterOptions {
    status?: string;
    dateFrom?: Date;
    dateTo?: Date;
    search?: string;
}