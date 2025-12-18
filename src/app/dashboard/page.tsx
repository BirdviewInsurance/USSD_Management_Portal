'use client';

import {
    Activity,
    Users,
    CreditCard,
    BarChart,
    TrendingUp,
    TrendingDown,
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Shield,
    Globe,
    Cpu,
    Plus,
    FileText,
    ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Button } from '@/components/ui/Button';
import { Progress } from '@heroui/progress';
import { Chip } from '@heroui/chip';
import { Avatar } from '@heroui/avatar';
import { Badge } from '@heroui/badge';
import { Tooltip } from '@heroui/tooltip';
import { Tabs, Tab } from '@heroui/tabs';
import { Select, SelectItem } from '@heroui/select';
import { UsageChart } from '@/components/charts/UsageChart';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { navigation } from '@/lib/navigations';

export default function DashboardPage() {
    const stats = [
        {
            title: 'Total USSD Requests',
            value: '1.2M',
            icon: Activity,
            change: '+12.5%',
            isPositive: true,
            color: 'primary',
            progress: 75,
            description: 'From last month'
        },
        {
            title: 'Active Clients',
            value: '42',
            icon: Users,
            change: '+5.2%',
            isPositive: true,
            color: 'secondary',
            progress: 65,
            description: '10 new this month'
        },
        {
            title: 'Revenue',
            value: '$24,580',
            icon: CreditCard,
            change: '+8.7%',
            isPositive: true,
            color: 'success',
            progress: 82,
            description: 'Monthly recurring'
        },
        {
            title: 'System Uptime',
            value: '99.9%',
            icon: Cpu,
            change: '+0.2%',
            isPositive: true,
            color: 'warning',
            progress: 99,
            description: 'Last 30 days'
        },
    ];

    const recentClients = [
        { id: '1', name: 'Acme Corp', usage: 45000, status: 'active', avatarColor: 'primary' },
        { id: '2', name: 'Globex Inc', usage: 32000, status: 'active', avatarColor: 'secondary' },
        { id: '3', name: 'Stark Industries', usage: 28000, status: 'warning', avatarColor: 'warning' },
        { id: '4', name: 'Wayne Enterprises', usage: 15000, status: 'danger', avatarColor: 'danger' },
    ];

    const quickActions = [
        {
            icon: Plus,
            label: 'Add Client',
            description: 'Create new account',
            color: 'primary',
            href: navigation.providers,
            section: navigation.sections.providers.add
        },
        {
            icon: FileText,
            label: 'Generate Report',
            description: 'Export usage data',
            color: 'success',
            href: navigation.dashboard,
            section: navigation.sections.dashboard.overview
        },
        {
            icon: Zap,
            label: 'Top Up Credits',
            description: 'Add service credits',
            color: 'secondary',
            href: navigation.billing,
            section: navigation.sections.billing.create
        },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold gradient-text animate-shimmer">
                        Dashboard
                    </h1>
                    <p className="text-default-500 mt-2">
                        Welcome back! Here's what's happening with your USSD services today.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Select
                        className="w-40"
                        size="sm"
                        variant="bordered"
                        defaultSelectedKeys={['today']}
                    >
                        <SelectItem key="today">Today</SelectItem>
                        <SelectItem key="week">This Week</SelectItem>
                        <SelectItem key="month">This Month</SelectItem>
                    </Select>
                    <Button
                        color="primary"
                        variant="shadow"
                        href={navigation.dashboard}
                        section={navigation.sections.dashboard.overview}
                        startContent={<ArrowUpRight className="h-4 w-4" />}
                    >
                        Generate Report
                    </Button>
                </div>
            </div>

            {/* Stats Grid - id for navigation */}
            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card
                            key={index}
                            className="glass-panel border-none animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardBody className="p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="text-sm font-medium text-default-600">{stat.title}</p>
                                            <Badge
                                                size="sm"
                                                color={stat.isPositive ? "success" : "danger"}
                                                variant="flat"
                                            >
                                                {stat.isPositive ? (
                                                    <ArrowUpRight className="h-3 w-3" />
                                                ) : (
                                                    <ArrowDownRight className="h-3 w-3" />
                                                )}
                                                {stat.change}
                                            </Badge>
                                        </div>
                                        <p className="text-3xl font-bold">{stat.value}</p>
                                        <p className="text-xs text-default-500 mt-1">{stat.description}</p>

                                        <div className="mt-4">
                                            <Progress
                                                value={stat.progress}
                                                className="max-w-full"
                                                color={stat.color as any}
                                                size="sm"
                                                classNames={{
                                                    indicator: `bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600`,
                                                }}
                                            />
                                            <div className="flex justify-between text-xs text-default-500 mt-1">
                                                <span>0%</span>
                                                <span>100%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`p-3 rounded-xl bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-600/10`}>
                                        <Icon className={`h-6 w-6 text-${stat.color}-500`} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>

            {/* Chart Section */}
            <div id="overview" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 glass-panel border-none">
                    <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-foreground">Usage Overview</h2>
                            <p className="text-sm text-default-500">Real-time USSD requests and revenue</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Chip size="sm" color="primary" variant="dot">
                                Requests
                            </Chip>
                            <Chip size="sm" color="success" variant="dot">
                                Revenue
                            </Chip>
                            <Select
                                className="w-32"
                                size="sm"
                                variant="bordered"
                            >
                                <SelectItem key="7days">Last 7 days</SelectItem>
                                <SelectItem key="30days">Last 30 days</SelectItem>
                                <SelectItem key="quarter">Last quarter</SelectItem>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <UsageChart />
                    </CardBody>
                    <CardFooter className="border-t border-divider pt-4">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-sm text-default-500">Data updates every 15 minutes</span>
                            <Button
                                variant="light"
                                size="sm"
                                href={navigation.billing}
                                startContent={<BarChart className="h-4 w-4" />}
                            >
                                View Detailed Analytics
                            </Button>
                        </div>
                    </CardFooter>
                </Card>

                {/* Recent Clients */}
                <Card id="recent" className="glass-panel border-none">
                    <CardHeader className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-foreground">Recent Providers</h2>
                        <Button
                            variant="light"
                            size="sm"
                            href={navigation.providers}
                            className="text-primary"
                        >
                            View All <ChevronRight className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        {recentClients.map((client) => (
                            <Button
                                key={client.id}
                                variant="light"
                                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-default-100/50 transition-all group"
                                href={navigation.providers}
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        className={`h-10 w-10 border-2 border-${client.avatarColor}-500/20 bg-gradient-to-br from-${client.avatarColor}-500 to-${client.avatarColor}-600`}
                                        name={client.name.charAt(0)}
                                    />
                                    <div className="text-left">
                                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                            {client.name}
                                        </p>
                                        <p className="text-sm text-default-500">
                                            {formatNumber(client.usage)} requests
                                        </p>
                                    </div>
                                </div>
                                <Chip
                                    size="sm"
                                    color={client.status as any}
                                    variant="flat"
                                    startContent={
                                        <div className={`h-2 w-2 rounded-full bg-${client.status}-500`} />
                                    }
                                >
                                    {client.status}
                                </Chip>
                            </Button>
                        ))}
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            fullWidth
                            variant="bordered"
                            href={navigation.providers}
                            section={navigation.sections.providers.add}
                            className="border-dashed border-primary/30 hover:border-primary/50"
                            startContent={<Plus className="h-4 w-4" />}
                        >
                            Add New Provider
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card id="actions" className="glass-panel border-none">
                <CardHeader>
                    <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
                </CardHeader>
                <CardBody className="space-y-3">
                    {quickActions.map((action, index) => {
                        const Icon = action.icon;
                        return (
                            <Button
                                key={index}
                                fullWidth
                                variant="flat"
                                href={action.href}
                                section={action.section}
                                className="justify-start h-14 bg-gradient-to-r from-default-100 to-default-50 hover:from-default-200 hover:to-default-100"
                                startContent={
                                    <div className={`p-2 rounded-lg bg-gradient-to-br from-${action.color}-500/10 to-${action.color}-600/10`}>
                                        <Icon className={`h-5 w-5 text-${action.color}-500`} />
                                    </div>
                                }
                            >
                                <div className="text-left">
                                    <p className="font-medium">{action.label}</p>
                                    <p className="text-xs text-default-500">{action.description}</p>
                                </div>
                                <ChevronRight className="h-4 w-4 ml-auto text-default-400" />
                            </Button>
                        );
                    })}
                </CardBody>
            </Card>
        </div>
    );
}