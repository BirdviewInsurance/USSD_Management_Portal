import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(amount);
}

export function formatNumber(num: number): string {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
}

export function formatDate(date: Date | string): string {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(d);
}

export function formatDateTime(date: Date | string): string {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(d);
}

// Hero UI status colors mapping
export function getStatusColor(status: string): 'success' | 'danger' | 'warning' | 'primary' | 'default' {
    const colors = {
        active: 'success',
        online: 'success',
        paid: 'success',
        inactive: 'default',
        offline: 'danger',
        overdue: 'danger',
        pending: 'primary',
        sent: 'primary',
        maintenance: 'warning',
        draft: 'default',
        suspended: 'danger',
    };
    return colors[status as keyof typeof colors] || 'default';
}

export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

export function generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}