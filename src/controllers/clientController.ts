import { Client, UsageStats } from '@/lib/types';

export class ClientController {
    private clients: Client[] = [
        {
            id: '1',
            name: 'Acme Corp',
            email: 'billing@acme.com',
            company: 'Acme Corporation',
            usage: 45000,
            status: 'active',
            lastBilled: new Date('2024-01-01'),
            nextBilling: new Date('2024-02-01'),
            ussdRequests: 45000
        },
        // Add more sample clients
    ];

    async getClients(): Promise<Client[]> {
        return this.clients;
    }

    async getClientById(id: string): Promise<Client | null> {
        return this.clients.find(client => client.id === id) || null;
    }

    async updateClientUsage(id: string, usage: number): Promise<void> {
        const client = this.clients.find(c => c.id === id);
        if (client) {
            client.usage = usage;
            client.ussdRequests = usage;
        }
    }
}