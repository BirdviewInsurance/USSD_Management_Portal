import { Client, Provider, BillingRecord } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export class ApiClient {
    private async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    }

    // Client endpoints
    async getClients(): Promise<Client[]> {
        return this.fetch<Client[]>('/clients');
    }

    async getClient(id: string): Promise<Client> {
        return this.fetch<Client>(`/clients/${id}`);
    }

    async createClient(client: Omit<Client, 'id'>): Promise<Client> {
        return this.fetch<Client>('/clients', {
            method: 'POST',
            body: JSON.stringify(client),
        });
    }

    async updateClient(id: string, client: Partial<Client>): Promise<Client> {
        return this.fetch<Client>(`/clients/${id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
        });
    }

    // Provider endpoints
    async getProviders(): Promise<Provider[]> {
        return this.fetch<Provider[]>('/providers');
    }

    async updateProviderStatus(id: string, status: Provider['status']): Promise<Provider> {
        return this.fetch<Provider>(`/providers/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({ status }),
        });
    }

    // Billing endpoints
    async getInvoices(): Promise<BillingRecord[]> {
        return this.fetch<BillingRecord[]>('/billing');
    }

    async createInvoice(invoice: Omit<BillingRecord, 'id'>): Promise<BillingRecord> {
        return this.fetch<BillingRecord>('/billing', {
            method: 'POST',
            body: JSON.stringify(invoice),
        });
    }

    async getUsageStats(): Promise<{
        totalRequests: number;
        activeClients: number;
        revenue: number;
        pendingInvoices: number;
    }> {
        return this.fetch('/stats/usage');
    }
}

export const api = new ApiClient()