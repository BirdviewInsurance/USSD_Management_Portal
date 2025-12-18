import { useRouter, usePathname } from 'next/navigation';

export const navigation = {
    // Main pages
    dashboard: '/dashboard',
    providers: '/providers',
    billing: '/billing',

    // Sub-sections (for smooth scrolling within pages)
    sections: {
        dashboard: {
            stats: '#stats',
            overview: '#overview',
            recent: '#recent',
            actions: '#actions',
        },
        providers: {
            overview: '#overview',
            list: '#list',
            add: '#add',
        },
        billing: {
            stats: '#stats',
            invoices: '#invoices',
            payments: '#payments',
            create: '#create',
        },
    },

    // Client management (if we add later)
    clients: '/clients',
    clientDetail: (id: string) => `/clients/${id}`,

    // Invoice management
    invoiceDetail: (id: string) => `/billing/invoices/${id}`,
    createInvoice: '/billing/create',

    // Provider management
    providerDetail: (id: string) => `/providers/${id}`,
    createProvider: '/providers/create',

    // Settings
    settings: '/settings',
    profile: '/profile',
    notifications: '/notifications',
};

// Hook for navigation with smooth scroll
export function useNavigation() {
    const router = useRouter();
    const pathname = usePathname();

    const navigate = (path: string, section?: string) => {
        if (pathname === path && section) {
            // Smooth scroll to section on same page
            const element = document.querySelector(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to page and then scroll
            router.push(section ? `${path}${section}` : path);
        }
    };

    return { navigate };
}