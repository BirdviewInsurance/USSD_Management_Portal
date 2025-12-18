// src/app/providers/page.tsx - Updated with navigation
'use client';

import {
    useState,
    useEffect
} from 'react';
import {
    Wifi,
    WifiOff,
    Settings,
    AlertCircle,
    Plus,
    Server,
    Activity,
    Cpu,
    HardDrive,
    Network,
    Zap,
    Shield,
    Globe,
    Eye,
    Edit,
    Trash2,
    ChevronRight,
    Search,
    Filter
} from 'lucide-react';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Button } from '@/components/ui/Button';
import { Chip } from '@heroui/chip';
import { Progress } from '@heroui/progress';
import { Badge } from '@heroui/badge';
import { Tooltip } from '@heroui/tooltip';
import { Tabs, Tab } from '@heroui/tabs';
import { Avatar } from '@heroui/avatar';
import { Input } from '@heroui/input';
import { Select, SelectItem } from '@heroui/select';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/table';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/navigations';

// Need to import Textarea
import { Textarea } from '@heroui/react';

// Mock data
const providers = [
    {
        id: '1',
        name: 'Main Gateway',
        status: 'online',
        uptime: 99.9,
        requests: 450000,
        location: 'US East',
        cpuUsage: 45,
        memoryUsage: 60,
        latency: 24,
        icon: Server,
        color: 'primary'
    },
    {
        id: '2',
        name: 'Backup Gateway',
        status: 'online',
        uptime: 99.8,
        requests: 210000,
        location: 'US West',
        cpuUsage: 30,
        memoryUsage: 45,
        latency: 32,
        icon: Network,
        color: 'success'
    },
    {
        id: '3',
        name: 'Load Balancer',
        status: 'warning',
        uptime: 99.5,
        requests: 890000,
        location: 'EU Central',
        cpuUsage: 65,
        memoryUsage: 75,
        latency: 45,
        icon: Cpu,
        color: 'warning'
    },
    {
        id: '4',
        name: 'SMS Gateway',
        status: 'danger',
        uptime: 95.2,
        requests: 0,
        location: 'Asia Pacific',
        cpuUsage: 0,
        memoryUsage: 0,
        latency: 0,
        icon: Globe,
        color: 'danger'
    },
];

export default function ProvidersPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<any>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const stats = {
        total: 4,
        online: 2,
        offline: 1,
        warning: 1,
        totalRequests: 1550000,
        averageUptime: 98.6,
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'online': return <Wifi className="h-4 w-4 text-success" />;
            case 'offline': return <WifiOff className="h-4 w-4 text-danger" />;
            case 'warning': return <AlertCircle className="h-4 w-4 text-warning" />;
            default: return <Settings className="h-4 w-4" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'success';
            case 'offline': return 'danger';
            case 'warning': return 'warning';
            default: return 'default';
        }
    };

    const handleViewProvider = (provider: any) => {
        setSelectedProvider(provider);
        setIsViewModalOpen(true);
    };

    const filteredProviders = providers.filter(provider => {
        const matchesSearch = searchTerm === '' ||
            provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || provider.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const columns = [
        { key: 'provider', label: 'PROVIDER' },
        { key: 'status', label: 'STATUS' },
        { key: 'performance', label: 'PERFORMANCE' },
        { key: 'requests', label: 'REQUESTS' },
        { key: 'actions', label: 'ACTIONS' },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold gradient-text animate-shimmer">
                        Service Providers
                    </h1>
                    <p className="text-default-500 mt-2">
                        Monitor and manage your USSD gateways and service providers
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="bordered"
                        startContent={<Settings className="h-4 w-4" />}
                        href={navigation.settings}
                        className="border-primary/30 hover:border-primary/50"
                    >
                        Configure
                    </Button>
                    <Button
                        color="primary"
                        variant="shadow"
                        startContent={<Plus className="h-4 w-4" />}
                        className="shadow-glow hover:shadow-glow-lg"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        Add Provider
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div id="overview" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass-panel border-none animate-slide-up">
                    <CardBody className="p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-default-600">Total Providers</p>
                                <p className="text-3xl font-bold mt-2">{stats.total}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="h-2 w-2 rounded-full bg-success" />
                                    <span className="text-sm text-default-500">{stats.online} online</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                                <Server className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="glass-panel border-none animate-slide-up" style={{ animationDelay: '100ms' }}>
                    <CardBody className="p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-default-600">Online Status</p>
                                <p className="text-3xl font-bold mt-2 text-success">{stats.online}/{stats.total}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                                    <span className="text-sm text-success">All systems operational</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-gradient-to-br from-success/10 to-primary/10">
                                <Activity className="h-6 w-6 text-success" />
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="glass-panel border-none animate-slide-up" style={{ animationDelay: '200ms' }}>
                    <CardBody className="p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-default-600">Total Requests</p>
                                <p className="text-3xl font-bold mt-2">{(stats.totalRequests / 1000000).toFixed(1)}M</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Zap className="h-4 w-4 text-warning" />
                                    <span className="text-sm text-warning">+2.4K today</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-gradient-to-br from-warning/10 to-danger/10">
                                <Zap className="h-6 w-6 text-warning" />
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="glass-panel border-none animate-slide-up" style={{ animationDelay: '300ms' }}>
                    <CardBody className="p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-default-600">Avg. Uptime</p>
                                <p className="text-3xl font-bold mt-2">{stats.averageUptime}%</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Shield className="h-4 w-4 text-success" />
                                    <span className="text-sm text-success">Excellent reliability</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-gradient-to-br from-success/10 to-secondary/10">
                                <Shield className="h-6 w-6 text-success" />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Filters */}
            <Card className="glass-panel border-none">
                <CardBody className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <Input
                                placeholder="Search providers by name or location..."
                                startContent={<Search className="h-4 w-4 text-default-400" />}
                                value={searchTerm}
                                onValueChange={setSearchTerm}
                                className="max-w-lg"
                                variant="bordered"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Select
                                className="w-40"
                                size="sm"
                                variant="bordered"
                                selectedKeys={[statusFilter]}
                                onSelectionChange={(keys) => setStatusFilter(Array.from(keys)[0] as string)}
                            >
                                <SelectItem key="all">All Status</SelectItem>
                                <SelectItem key="online" startContent={<Wifi className="h-4 w-4 text-success" />}>
                                    Online
                                </SelectItem>
                                <SelectItem key="warning" startContent={<AlertCircle className="h-4 w-4 text-warning" />}>
                                    Warning
                                </SelectItem>
                                <SelectItem key="offline" startContent={<WifiOff className="h-4 w-4 text-danger" />}>
                                    Offline
                                </SelectItem>
                            </Select>

                            <Button
                                variant="bordered"
                                startContent={<Filter className="h-4 w-4" />}
                                onPress={() => {
                                    setSearchTerm('');
                                    setStatusFilter('all');
                                }}
                                className="border-primary/30 hover:border-primary/50"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Providers Table */}
            <Card id="list" className="glass-panel border-none p-0 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-divider">
                    <h2 className="text-xl font-semibold text-foreground">All Providers</h2>
                    <Button
                        variant="light"
                        size="sm"
                        href={navigation.providers}
                        section={navigation.sections.providers.add}
                        startContent={<Plus className="h-4 w-4" />}
                        className="text-primary"
                    >
                        Add New Provider
                    </Button>
                </div>

                <Table
                    aria-label="Providers table"
                    selectionMode="multiple"
                    classNames={{
                        base: "max-h-[520px] overflow-auto",
                        table: "min-h-[400px]",
                        wrapper: "rounded-xl",
                        th: "bg-gradient-to-r from-default-100 to-default-50 border-b border-divider",
                        td: "border-b border-divider/50",
                    }}
                >
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn
                                key={column.key}
                                className="text-sm font-semibold text-foreground px-6 py-4"
                            >
                                {column.label}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={filteredProviders}>
                        {(provider) => {
                            const Icon = provider.icon;
                            return (
                                <TableRow key={provider.id} className="group hover:bg-default-100/30 transition-colors">
                                    <TableCell className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br from-${provider.color}-500/10 to-${provider.color}-600/10`}>
                                                <Icon className={`h-5 w-5 text-${provider.color}-500`} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {provider.name}
                                                </p>
                                                <p className="text-sm text-default-500">{provider.location}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-6 py-4">
                                        <Chip
                                            size="sm"
                                            color={getStatusColor(provider.status)}
                                            variant="flat"
                                            startContent={getStatusIcon(provider.status)}
                                        >
                                            {provider.status.charAt(0).toUpperCase() + provider.status.slice(1)}
                                        </Chip>
                                    </TableCell>
                                    <TableCell className="px-6 py-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-default-600">Uptime:</span>
                                                <span className="font-semibold">{provider.uptime}%</span>
                                            </div>
                                            <Progress
                                                value={provider.uptime}
                                                size="sm"
                                                color={getStatusColor(provider.status)}
                                                className="max-w-32"
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-6 py-4">
                                        <div className="font-bold text-lg">
                                            {provider.requests.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-default-500">
                                            {provider.cpuUsage}% CPU • {provider.memoryUsage}% RAM
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Tooltip content="View Details">
                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    variant="light"
                                                    onPress={() => handleViewProvider(provider)}
                                                    className="text-primary hover:bg-primary/10"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </Tooltip>

                                            <Tooltip content="Edit">
                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    variant="light"
                                                    className="text-secondary hover:bg-secondary/10"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Tooltip>

                                            <Tooltip content="Restart">
                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    variant="light"
                                                    className="text-success hover:bg-success/10"
                                                >
                                                    <Zap className="h-4 w-4" />
                                                </Button>
                                            </Tooltip>

                                            <Tooltip content="Remove">
                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    variant="light"
                                                    className="text-danger hover:bg-danger/10"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        }}
                    </TableBody>
                </Table>

                <div className="flex items-center justify-between border-t border-divider p-4">
                    <div className="text-sm text-default-500">
                        Showing {filteredProviders.length} of {providers.length} providers
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="light"
                            size="sm"
                            isDisabled
                        >
                            Previous
                        </Button>
                        <Button
                            color="primary"
                            variant="flat"
                            size="sm"
                        >
                            1
                        </Button>
                        <Button
                            variant="light"
                            size="sm"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </Card>

            {/* Add Provider Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onOpenChange={setIsAddModalOpen}
                size="2xl"
                backdrop="none" // Disable full-screen backdrop
                classNames={{
                    base: "fixed top-0 right-0 h-full w-2/5 bg-gradient-to-b from-card to-popover shadow-xl z-50 transition-transform transform",
                    enter: "translate-x-full",
                    enterActive: "translate-x-0 transition-transform duration-300 ease-out",
                    exit: "translate-x-0",
                    exitActive: "translate-x-full transition-transform duration-300 ease-in",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 border-b border-divider">
                                <h2 className="text-2xl font-bold gradient-text">
                                    Add New Provider
                                </h2>
                                <p className="text-sm text-default-500">
                                    Configure a new USSD gateway or service provider
                                </p>
                            </ModalHeader>

                            <ModalBody className="pt-6">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="Provider Name e.g., Main Gateway"
                                            variant="bordered"
                                            isRequired
                                            className="rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                        />
                                        <Input
                                            placeholder="Location e.g., US East"
                                            variant="bordered"
                                            isRequired
                                            className="rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <Input
                                            placeholder="API Endpoint"
                                            variant="bordered"
                                            isRequired
                                            className="rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                        />
                                        <Input
                                            placeholder="Port e.g. 8080"
                                            type="number"
                                            variant="bordered"
                                            className="rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                        />
                                        <Select
                                            placeholder="Select type"
                                            variant="bordered"
                                            className="w-full rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 text-foreground"
                                            contentClassName="bg-card rounded-lg shadow-lg border border-default-200 z-50"
                                        >
                                            <SelectItem value="gateway">Gateway</SelectItem>
                                            <SelectItem value="sms">SMS Provider</SelectItem>
                                            <SelectItem value="api">API Service</SelectItem>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="Enter API key"
                                            type="password"
                                            variant="bordered"
                                            className="rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                        />
                                        <Input
                                            placeholder="Enter secret key"
                                            type="password"
                                            variant="bordered"
                                            className="rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                        />
                                    </div>

                                    <Textarea
                                        placeholder="Add any additional details about this provider..."
                                        variant="bordered"
                                        minRows={3}
                                        className="w-full min-h-[120px] rounded-lg shadow-sm border border-default-200 focus:border-primary focus:ring focus:ring-primary/20 placeholder:text-default-400"
                                    />
                                </div>
                            </ModalBody>

                            <ModalFooter className="border-t border-divider">
                                <div className="flex items-center justify-between w-full">
                                    <Button variant="light" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <div className="flex gap-2">
                                        <Button variant="bordered" startContent={<Plus className="h-4 w-4" />}>
                                            Add & Configure
                                        </Button>
                                        <Button color="primary" variant="shadow">
                                            Add Provider
                                        </Button>
                                    </div>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* View Provider Modal */}
            <Modal
                isOpen={isViewModalOpen}
                onOpenChange={setIsViewModalOpen}
                size="3xl"
                backdrop="none" // Disable full-screen backdrop
                classNames={{
                    base: "fixed top-0 right-0 h-full w-3/5 bg-gradient-to-b from-card to-popover shadow-xl z-50 transition-transform transform",
                    enter: "translate-x-full",
                    enterActive: "translate-x-0 transition-transform duration-300 ease-out",
                    exit: "translate-x-0",
                    exitActive: "translate-x-full transition-transform duration-300 ease-in",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 border-b border-divider">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {selectedProvider && (
                                            <>
                                                <div className={`p-3 rounded-xl bg-gradient-to-br from-${selectedProvider.color}-500/10 to-${selectedProvider.color}-600/10`}>
                                                    <selectedProvider.icon className={`h-6 w-6 text-${selectedProvider.color}-500`} />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold">{selectedProvider.name}</h2>
                                                    <p className="text-sm text-default-500">{selectedProvider.location}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {selectedProvider && (
                                        <Chip
                                            size="lg"
                                            color={getStatusColor(selectedProvider.status)}
                                            variant="flat"
                                            startContent={getStatusIcon(selectedProvider.status)}
                                        >
                                            {selectedProvider.status.toUpperCase()}
                                        </Chip>
                                    )}
                                </div>
                            </ModalHeader>

                            <ModalBody className="pt-6">
                                {selectedProvider && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <Card className="glass-panel">
                                                <CardBody className="p-4">
                                                    <div className="text-center">
                                                        <p className="text-sm text-default-600">Uptime</p>
                                                        <p className="text-3xl font-bold mt-2">{selectedProvider.uptime}%</p>
                                                        <Progress
                                                            value={selectedProvider.uptime}
                                                            size="sm"
                                                            className="mt-2"
                                                            color={getStatusColor(selectedProvider.status)}
                                                        />
                                                    </div>
                                                </CardBody>
                                            </Card>

                                            <Card className="glass-panel">
                                                <CardBody className="p-4">
                                                    <div className="text-center">
                                                        <p className="text-sm text-default-600">CPU Usage</p>
                                                        <p className="text-3xl font-bold mt-2">{selectedProvider.cpuUsage}%</p>
                                                        <Progress
                                                            value={selectedProvider.cpuUsage}
                                                            size="sm"
                                                            className="mt-2"
                                                            color={selectedProvider.cpuUsage > 80 ? "danger" : selectedProvider.cpuUsage > 60 ? "warning" : "success"}
                                                        />
                                                    </div>
                                                </CardBody>
                                            </Card>

                                            <Card className="glass-panel">
                                                <CardBody className="p-4">
                                                    <div className="text-center">
                                                        <p className="text-sm text-default-600">Memory Usage</p>
                                                        <p className="text-3xl font-bold mt-2">{selectedProvider.memoryUsage}%</p>
                                                        <Progress
                                                            value={selectedProvider.memoryUsage}
                                                            size="sm"
                                                            className="mt-2"
                                                            color={selectedProvider.memoryUsage > 80 ? "danger" : selectedProvider.memoryUsage > 60 ? "warning" : "success"}
                                                        />
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold">Statistics</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-default-100 to-transparent">
                                                    <p className="text-sm text-default-600">Total Requests</p>
                                                    <p className="text-xl font-bold mt-1">{selectedProvider.requests.toLocaleString()}</p>
                                                </div>
                                                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-default-100 to-transparent">
                                                    <p className="text-sm text-default-600">Latency</p>
                                                    <p className="text-xl font-bold mt-1">{selectedProvider.latency}ms</p>
                                                </div>
                                                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-default-100 to-transparent">
                                                    <p className="text-sm text-default-600">Errors</p>
                                                    <p className="text-xl font-bold mt-1">0.02%</p>
                                                </div>
                                                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-default-100 to-transparent">
                                                    <p className="text-sm text-default-600">Active Sessions</p>
                                                    <p className="text-xl font-bold mt-1">1,234</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </ModalBody>

                            <ModalFooter className="border-t border-divider">
                                <div className="flex items-center justify-between w-full">
                                    <Button variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <div className="flex gap-2">
                                        <Button color="danger" variant="light">
                                            Remove
                                        </Button>
                                        <Button color="primary" variant="shadow">
                                            Edit Configuration
                                        </Button>
                                    </div>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Add Section Button */}
            <div id="add" className="flex justify-center">
                <Card className="glass-panel border-dashed border-2 border-primary/30 max-w-md w-full">
                    <CardBody className="p-8 text-center">
                        <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 inline-flex mb-4">
                            <Plus className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Add New Provider</h3>
                        <p className="text-default-500 mb-6">
                            Configure a new USSD gateway or service provider to expand your network
                        </p>
                        <Button
                            color="primary"
                            variant="shadow"
                            size="lg"
                            startContent={<Plus className="h-5 w-5" />}
                            onClick={() => setIsAddModalOpen(true)}
                        >
                            Add New Provider
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

