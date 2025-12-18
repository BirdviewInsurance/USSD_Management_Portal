'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    CreditCard,
    Settings,
    LogOut,
    BarChart3,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Zap,
    Activity,
    Plus,
} from 'lucide-react';
import { FileText } from 'lucide-react';
import {
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@heroui/navbar';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@heroui/avatar';
import { Badge } from '@heroui/badge';
import { Divider } from '@heroui/divider';
import { cn } from '@/lib/utils';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { navigation } from '@/lib/navigations';

const navItems = [
    {
        href: navigation.dashboard,
        icon: LayoutDashboard,
        label: 'Dashboard',
        badge: '',
        sections: [
            { label: 'Stats', href: navigation.sections.dashboard.stats },
            { label: 'Overview', href: navigation.sections.dashboard.overview },
            { label: 'Recent', href: navigation.sections.dashboard.recent },
            { label: 'Actions', href: navigation.sections.dashboard.actions },
        ]
    },
    {
        href: navigation.providers,
        icon: Users,
        label: 'Providers',
        badge: '',
        sections: [
            { label: 'Overview', href: navigation.sections.providers.overview },
            { label: 'List', href: navigation.sections.providers.list },
            { label: 'Add', href: navigation.sections.providers.add },
        ]
    },
    {
        href: navigation.billing,
        icon: CreditCard,
        label: 'Billing',
        badge: '',
        sections: [
            { label: 'Stats', href: navigation.sections.billing.stats },
            { label: 'Invoices', href: navigation.sections.billing.invoices },
            { label: 'Payments', href: navigation.sections.billing.payments },
            { label: 'Create', href: navigation.sections.billing.create },
        ]
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            {/* Mobile Navbar */}
            <Navbar
                maxWidth="full"
                className="lg:hidden glass-panel border-b border-divider"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                height="4rem"
            >
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="lg:hidden"
                    />
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary">
                            <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-bold gradient-text">USSD Portal</span>
                    </div>
                </NavbarContent>

                <NavbarContent justify="end">
                    <ThemeSwitch />
                </NavbarContent>

                <NavbarMenu className="pt-8 px-4 bg-gradient-to-b from-background to-card">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <NavbarMenuItem key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                                        isActive
                                            ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-l-4 border-primary'
                                            : 'hover:bg-default-100/50'
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className={cn(
                                        'p-2 rounded-lg transition-all',
                                        isActive
                                            ? 'bg-gradient-to-br from-primary to-secondary text-white'
                                            : 'bg-default-100 text-default-600'
                                    )}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className={cn(
                                        'font-medium',
                                        isActive ? 'text-primary' : 'text-foreground'
                                    )}>
                                        {item.label}
                                    </span>
                                    {item.badge && (
                                        <Badge
                                            size="sm"
                                            color={isActive ? "primary" : "default"}
                                            className="ml-auto"
                                        >
                                            {item.badge}
                                        </Badge>
                                    )}
                                </Link>

                                {/* Quick section links for mobile */}
                                {isActive && !isCollapsed && (
                                    <div className="ml-12 mt-2 space-y-1">
                                        {item.sections?.map((section) => (
                                            <Link
                                                key={section.href}
                                                href={`${item.href}${section.href}`}
                                                className="block text-sm text-default-500 hover:text-primary px-2 py-1 rounded transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                → {section.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </NavbarMenuItem>
                        );
                    })}
                </NavbarMenu>
            </Navbar>

            {/* Desktop Sidebar */}
            <div className={cn(
                'hidden lg:flex flex-col fixed inset-y-0 z-50 transition-all duration-300',
                isCollapsed ? 'w-20' : 'w-72'
            )}>
                <div className="flex flex-col flex-grow glass-panel border-r border-divider pt-8 pb-4 overflow-y-auto">
                    {/* Header */}
                    <div className={cn(
                        'flex items-center px-6 mb-10 transition-all',
                        isCollapsed && 'justify-center px-4'
                    )}>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
                            <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        {!isCollapsed && (
                            <div className="ml-3 flex-1">
                                <span className="text-2xl font-bold gradient-text animate-float">
                                    USSD Portal
                                </span>
                                <p className="text-xs text-default-500 mt-1">Advanced Management System</p>
                            </div>
                        )}
                        <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            className={cn(
                                'ml-auto transition-all',
                                isCollapsed && 'ml-0'
                            )}
                            onPress={() => setIsCollapsed(!isCollapsed)}
                        >
                            {isCollapsed ? (
                                <ChevronRight className="h-4 w-4" />
                            ) : (
                                <ChevronLeft className="h-4 w-4" />
                            )}
                        </Button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <div key={item.href} className="group">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            'flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300',
                                            isActive
                                                ? 'bg-gradient-to-r from-primary/20 to-secondary/20 shadow-glow'
                                                : 'hover:bg-default-100/50'
                                        )}
                                    >
                                        <div className={cn(
                                            'p-2 rounded-lg transition-all',
                                            isActive
                                                ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-glow'
                                                : 'bg-default-100 text-default-600 group-hover:bg-primary/10 group-hover:text-primary'
                                        )}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        {!isCollapsed && (
                                            <>
                                                <span className={cn(
                                                    'ml-3 transition-all',
                                                    isActive ? 'text-primary font-semibold' : 'text-foreground'
                                                )}>
                                                    {item.label}
                                                </span>
                                                {item.badge && (
                                                    <Badge
                                                        size="sm"
                                                        color={isActive ? "primary" : "default"}
                                                        className="ml-auto"
                                                    >
                                                        {item.badge}
                                                    </Badge>
                                                )}
                                            </>
                                        )}
                                    </Link>

                                    {/* Quick section links */}
                                    {isActive && !isCollapsed && (
                                        <div className="ml-12 mt-2 mb-4 space-y-1 animate-fade-in">
                                            {item.sections?.map((section) => (
                                                <Link
                                                    key={section.href}
                                                    href={`${item.href}${section.href}`}
                                                    className="block text-sm text-default-500 hover:text-primary px-3 py-2 rounded-lg hover:bg-default-100/50 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-1 w-1 rounded-full bg-primary" />
                                                        {section.label}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Quick Create Buttons */}
                        {!isCollapsed && (
                            <div className="pt-4 mt-4 border-t border-divider">
                                <p className="text-xs font-medium text-default-500 px-4 mb-3">QUICK CREATE</p>
                                <div className="space-y-2">
                                    <Button
                                        fullWidth
                                        variant="bordered"
                                        size="sm"
                                        href={navigation.providers}
                                        section={navigation.sections.providers.add}
                                        startContent={<Plus className="h-4 w-4" />}
                                        className="justify-start border-primary/20 hover:border-primary/40"
                                    >
                                        New Provider
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="bordered"
                                        size="sm"
                                        href={navigation.billing}
                                        section={navigation.sections.billing.create}
                                        startContent={<FileText className="h-4 w-4" />}
                                        className="justify-start border-secondary/20 hover:border-secondary/40"
                                    >
                                        New Invoice
                                    </Button>
                                </div>
                            </div>
                        )}
                    </nav>

                    <Divider className="my-6" />

                    {/* Footer */}
                    <div className="px-4 space-y-3">
                        {!isCollapsed && (
                            <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                                        <Zap className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Pro Plan</p>
                                        <p className="text-xs text-default-500">Upgrade for more features</p>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="flat"
                                        href={navigation.settings}
                                    >
                                        Upgrade
                                    </Button>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <ThemeSwitch />
                            {!isCollapsed && <span className="text-sm text-default-500">Theme</span>}
                        </div>

                        <Button
                            fullWidth
                            variant="flat"
                            href={navigation.settings}
                            className="justify-start text-foreground"
                            startContent={<Settings className="h-5 w-5" />}
                            isIconOnly={isCollapsed}
                        >
                            {!isCollapsed && "Settings"}
                        </Button>

                        <Button
                            fullWidth
                            variant="flat"
                            color="danger"
                            className="justify-start"
                            startContent={<LogOut className="h-5 w-5" />}
                            isIconOnly={isCollapsed}
                        >
                            {!isCollapsed && "Logout"}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

