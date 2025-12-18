'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useTheme } from 'next-themes';
import { Spinner } from '@heroui/spinner';

interface LayoutWrapperProps {
    children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-background transition-colors duration-300`}>
            <Sidebar />
            <div className="lg:pl-72">
                <Header />
                <main className="py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}