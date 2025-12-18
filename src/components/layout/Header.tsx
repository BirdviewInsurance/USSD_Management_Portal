// src/components/layout/Header.tsx - Update dropdown items
'use client';

import { Bell, Search, User, Settings, HelpCircle, Mail, CreditCard, Users } from 'lucide-react';
import { Input } from '@heroui/input';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@heroui/avatar';
import { Badge } from '@heroui/badge';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from '@heroui/dropdown';
import { Tooltip } from '@heroui/tooltip';
import { Divider } from '@heroui/divider';
import { Chip } from '@heroui/chip';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { navigation } from '@/lib/navigations';
import { LogOut } from 'lucide-react';

export function Header() {
    const notifications = [
        { id: 1, title: 'New invoice', description: 'Invoice #INV-2024-045 created', time: '2 min ago', unread: true },
        { id: 2, title: 'Payment received', description: '$2,450 from Acme Corp', time: '1 hour ago', unread: true },
        { id: 3, title: 'System alert', description: 'Gateway #3 requires attention', time: '3 hours ago', unread: false },
    ];

    return (
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-divider glass-panel px-6 lg:pl-80">
            <div className="flex flex-1 items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Input
                        placeholder="Search clients, invoices, providers..."
                        startContent={<Search className="h-4 w-4 text-default-400" />}
                        className="w-full"
                        size="sm"
                        variant="bordered"
                        classNames={{
                            inputWrapper: "bg-default-100/50 border-default-200 hover:bg-default-100",
                        }}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Quick Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Tooltip content="Quick Actions" placement="bottom">
                        <Button
                            isIconOnly
                            variant="flat"
                            size="sm"
                            href={navigation.dashboard}
                            section={navigation.sections.dashboard.actions}
                            className="bg-gradient-to-br from-primary/10 to-secondary/10"
                        >
                            <Settings className="h-4 w-4" />
                        </Button>
                    </Tooltip>

                    <Tooltip content="Support" placement="bottom">
                        <Button
                            isIconOnly
                            variant="flat"
                            size="sm"
                            href={navigation.settings}
                            className="bg-gradient-to-br from-success/10 to-primary/10"
                        >
                            <HelpCircle className="h-4 w-4" />
                        </Button>
                    </Tooltip>
                </div>

                <ThemeSwitch />

                {/* Notifications */}
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            variant="flat"
                            className="relative bg-gradient-to-br from-warning/10 to-danger/10"
                        >
                            <Bell className="h-5 w-5" />
                            <Badge
                                content="3"
                                color="danger"
                                shape="circle"
                                size="sm"
                                className="absolute -top-1 -right-1"
                            />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Notifications"
                        className="w-80"
                        itemClasses={{
                            base: "px-4 py-3",
                        }}
                    >
                        <DropdownItem
                            key="header"
                            isReadOnly
                            className="cursor-default"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Notifications</h3>
                                <Chip size="sm" color="primary" variant="flat">
                                    3 new
                                </Chip>
                            </div>
                        </DropdownItem>

                        <Divider />

                        {notifications.map((notification) => (
                            <DropdownItem
                                key={notification.id}
                                startContent={
                                    <div className={`p-2 rounded-full ${notification.unread
                                        ? 'bg-gradient-to-br from-primary/20 to-secondary/20'
                                        : 'bg-default-100'
                                        }`}>
                                        <Bell className="h-4 w-4" />
                                    </div>
                                }
                                endContent={
                                    <span className="text-xs text-default-500">{notification.time}</span>
                                }
                                className={notification.unread ? "bg-primary/5" : ""}
                                href={navigation.notifications}
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{notification.title}</span>
                                    <span className="text-sm text-default-500">{notification.description}</span>
                                </div>
                            </DropdownItem>
                        ))}

                        <Divider />

                        <DropdownItem key="view-all" href={navigation.notifications}>
                            <div className="text-center text-primary font-medium">
                                View all notifications
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <div className="h-8 w-px bg-gradient-to-b from-transparent via-default-300 to-transparent" />

                {/* User Menu */}
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button
                            variant="light"
                            className="h-auto p-2 data-[hover=true]:bg-default-100/50 transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <Avatar
                                    className="h-9 w-9 border-2 border-primary/20 bg-gradient-to-br from-primary to-secondary"
                                    icon={<User className="h-5 w-5 text-white" />}
                                />
                                <div className="hidden md:block text-left">
                                    <p className="text-sm font-semibold">Admin User</p>
                                    <p className="text-xs text-default-500">Administrator</p>
                                </div>
                            </div>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Profile Actions"
                        className="w-64"
                        itemClasses={{
                            base: "px-4 py-3",
                        }}
                    >
                        <DropdownItem
                            key="profile"
                            isReadOnly
                            className="cursor-default h-16"
                        >
                            <div className="flex items-center gap-3">
                                <Avatar
                                    className="h-10 w-10 bg-gradient-to-br from-primary to-secondary"
                                    icon={<User className="h-5 w-5 text-white" />}
                                />
                                <div>
                                    <p className="font-semibold">Admin User</p>
                                    <p className="text-sm text-default-500">admin@ussdportal.com</p>
                                </div>
                            </div>
                        </DropdownItem>

                        <Divider />

                        <DropdownItem
                            key="dashboard"
                            href={navigation.dashboard}
                            startContent={<User className="h-4 w-4" />}
                        >
                            My Profile
                        </DropdownItem>
                        <DropdownItem
                            key="settings"
                            href={navigation.settings}
                            startContent={<Settings className="h-4 w-4" />}
                        >
                            Settings
                        </DropdownItem>
                        <DropdownItem
                            key="providers"
                            href={navigation.providers}
                            startContent={<Users className="h-4 w-4" />}
                        >
                            Providers
                        </DropdownItem>
                        <DropdownItem
                            key="billing"
                            href={navigation.billing}
                            startContent={<CreditCard className="h-4 w-4" />}
                        >
                            Billing
                        </DropdownItem>

                        <Divider />

                        <DropdownItem
                            key="logout"
                            color="danger"
                            startContent={<LogOut className="h-4 w-4" />}
                            href="/logout"
                        >
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    );
}

