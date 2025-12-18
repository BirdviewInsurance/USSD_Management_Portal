import { Provider } from '@/lib/types';

export class ProviderController {
    private providers: Provider[] = [
        {
            id: '1',
            name: 'Main Gateway',
            status: 'online',
            uptime: 99.9,
            requests: 450000,
            location: 'US East',
        },
        {
            id: '2',
            name: 'Backup Gateway',
            status: 'online',
            uptime: 99.8,
            requests: 210000,
            location: 'US West',
        },
        {
            id: '3',
            name: 'Load Balancer',
            status: 'maintenance',
            uptime: 99.5,
            requests: 890000,
            location: 'EU Central',
        },
        {
            id: '4',
            name: 'SMS Gateway',
            status: 'offline',
            uptime: 95.2,
            requests: 0,
            location: 'Asia Pacific',
        },
    ];

    async getProviders(): Promise<Provider[]> {
        return this.providers;
    }

    async getProviderById(id: string): Promise<Provider | null> {
        return this.providers.find(provider => provider.id === id) || null;
    }

    async updateProviderStatus(id: string, status: Provider['status']): Promise<Provider> {
        const provider = this.providers.find(p => p.id === id);
        if (!provider) {
            throw new Error('Provider not found');
        }

        provider.status = status;
        return provider;
    }

    async addProvider(provider: Omit<Provider, 'id'>): Promise<Provider> {
        const newProvider: Provider = {
            ...provider,
            id: String(this.providers.length + 1),
        };

        this.providers.push(newProvider);
        return newProvider;
    }

    async removeProvider(id: string): Promise<void> {
        const index = this.providers.findIndex(p => p.id === id);
        if (index !== -1) {
            this.providers.splice(index, 1);
        }
    }

    async updateProviderMetrics(id: string, metrics: Partial<Provider>): Promise<Provider> {
        const provider = this.providers.find(p => p.id === id);
        if (!provider) {
            throw new Error('Provider not found');
        }

        Object.assign(provider, metrics);
        return provider;
    }

    async getProviderStats() {
        const total = this.providers.length;
        const online = this.providers.filter(p => p.status === 'online').length;
        const offline = this.providers.filter(p => p.status === 'offline').length;
        const totalRequests = this.providers.reduce((sum, p) => sum + p.requests, 0);

        return {
            total,
            online,
            offline,
            totalRequests,
        };
    }
}