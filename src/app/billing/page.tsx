'use client';

import { useState } from 'react';
import {
    Plus,
    Download,
    Eye,
    Edit,
    Trash2,
    Mail,
    DollarSign,
    Search,
    FileText,
    CreditCard,
    Calendar,
    Filter,
    TrendingUp,
    CheckCircle,
    Clock,
    AlertCircle,
    ChevronRight,
    ArrowUpRight,
} from 'lucide-react';

import { Card, CardHeader, CardBody } from '@heroui/card';
import { Button } from '@/components/ui/Button';
import { Input } from '@heroui/input';
import { Select, SelectItem } from '@heroui/select';
import { Chip } from '@heroui/chip';
import { Avatar } from '@heroui/avatar';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/table';
import { Tooltip } from '@heroui/tooltip';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal';

import { formatCurrency, formatDate } from '@/lib/utils';
import { navigation } from '@/lib/navigations';

/* -------------------------------------------------------------------------- */
/*                                  MOCK DATA                                 */
/* -------------------------------------------------------------------------- */

const mockInvoices = [
    {
        id: '1',
        invoiceNumber: 'INV-2024-045',
        clientName: 'Acme Corporation',
        clientEmail: 'billing@acme.com',
        date: '2024-01-15',
        dueDate: '2024-02-15',
        amount: 2450,
        status: 'paid',
        clientAvatar: 'AC',
    },
    {
        id: '2',
        invoiceNumber: 'INV-2024-046',
        clientName: 'Globex Inc',
        clientEmail: 'finance@globex.com',
        date: '2024-01-16',
        dueDate: '2024-02-16',
        amount: 1800,
        status: 'sent',
        clientAvatar: 'GI',
    },
    {
        id: '3',
        invoiceNumber: 'INV-2024-047',
        clientName: 'Stark Industries',
        clientEmail: 'accounts@stark.com',
        date: '2024-01-17',
        dueDate: '2024-02-17',
        amount: 3200,
        status: 'overdue',
        clientAvatar: 'SI',
    },
    {
        id: '4',
        invoiceNumber: 'INV-2024-048',
        clientName: 'Wayne Enterprises',
        clientEmail: 'payables@wayne.com',
        date: '2024-01-18',
        dueDate: '2024-02-18',
        amount: 1500,
        status: 'draft',
        clientAvatar: 'WE',
    },
];

/* -------------------------------------------------------------------------- */
/*                               STATUS HELPERS                               */
/* -------------------------------------------------------------------------- */

const getStatusColor = (status?: string) => {
    switch (status) {
        case 'paid':
            return 'success';
        case 'sent':
            return 'primary';
        case 'overdue':
            return 'danger';
        case 'draft':
            return 'warning';
        default:
            return 'default';
    }
};

const getStatusIcon = (status?: string) => {
    switch (status) {
        case 'paid':
            return <CheckCircle className="h-4 w-4" />;
        case 'sent':
            return <Mail className="h-4 w-4" />;
        case 'overdue':
            return <AlertCircle className="h-4 w-4" />;
        case 'draft':
            return <Clock className="h-4 w-4" />;
        default:
            return null;
    }
};

/* -------------------------------------------------------------------------- */
/*                               BILLING PAGE                                 */
/* -------------------------------------------------------------------------- */

export default function BillingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });

    const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
    const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    /* -------------------------------- FILTERS ------------------------------- */

    const filteredInvoices = mockInvoices.filter((invoice) => {
        const matchesSearch =
            invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === 'all' || invoice.status === statusFilter;

        const invoiceDate = new Date(invoice.date).getTime();
        const startDate = dateRange.start ? new Date(dateRange.start).getTime() : null;
        const endDate = dateRange.end ? new Date(dateRange.end).getTime() : null;

        const matchesDate =
            (!startDate || invoiceDate >= startDate) &&
            (!endDate || invoiceDate <= endDate);

        return matchesSearch && matchesStatus && matchesDate;
    });

    /* ----------------------------------------------------------------------- */

    return (
        <div className="space-y-6">
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Billing & Invoices</h1>
                    <p className="text-default-500">
                        Manage client invoices and payments
                    </p>
                </div>

                <Button
                    color="primary"
                    startContent={<Plus className="h-4 w-4" />}
                    onPress={() => setIsInvoiceModalOpen(true)}
                >
                    New Invoice
                </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card><CardBody><DollarSign /> Revenue</CardBody></Card>
                <Card><CardBody><FileText /> Paid</CardBody></Card>
                <Card><CardBody><CreditCard /> Pending</CardBody></Card>
                <Card><CardBody><Calendar /> Overdue</CardBody></Card>
            </div>

            {/* FILTERS */}
            <Card>
                <CardBody className="flex flex-wrap gap-4">
                    <Input
                        placeholder="Search invoice or client"
                        startContent={<Search className="h-4 w-4" />}
                        value={searchTerm}
                        onValueChange={setSearchTerm}
                        className="max-w-sm"
                    />

                    <Select
                        className="w-40"
                        selectedKeys={[statusFilter]}
                        onSelectionChange={(keys) =>
                            setStatusFilter(Array.from(keys)[0] as string)
                        }
                    >
                        <SelectItem key="all">All</SelectItem>
                        <SelectItem key="paid">Paid</SelectItem>
                        <SelectItem key="sent">Sent</SelectItem>
                        <SelectItem key="overdue">Overdue</SelectItem>
                        <SelectItem key="draft">Draft</SelectItem>
                    </Select>

                    <Input
                        type="date"
                        value={dateRange.start}
                        onValueChange={(v) =>
                            setDateRange((p) => ({ ...p, start: v }))
                        }
                    />
                    <Input
                        type="date"
                        value={dateRange.end}
                        onValueChange={(v) =>
                            setDateRange((p) => ({ ...p, end: v }))
                        }
                    />

                    <Button
                        variant="bordered"
                        startContent={<Filter className="h-4 w-4" />}
                        onPress={() => {
                            setSearchTerm('');
                            setStatusFilter('all');
                            setDateRange({ start: '', end: '' });
                        }}
                    >
                        Clear
                    </Button>
                </CardBody>
            </Card>

            {/* TABLE */}
            <Card>
                <Table aria-label="Invoices">
                    <TableHeader>
                        <TableColumn>CLIENT</TableColumn>
                        <TableColumn>INVOICE</TableColumn>
                        <TableColumn>DATE</TableColumn>
                        <TableColumn>AMOUNT</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                        <TableColumn>ACTIONS</TableColumn>
                    </TableHeader>

                    <TableBody emptyContent="No invoices found">
                        {filteredInvoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar name={invoice.clientAvatar} />
                                        <div>
                                            <p className="font-medium">
                                                {invoice.clientName}
                                            </p>
                                            <p className="text-xs text-default-500">
                                                {invoice.clientEmail}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>{invoice.invoiceNumber}</TableCell>
                                <TableCell>{formatDate(invoice.date)}</TableCell>
                                <TableCell>
                                    {formatCurrency(invoice.amount)}
                                </TableCell>

                                <TableCell>
                                    <Chip
                                        color={getStatusColor(invoice.status)}
                                        startContent={getStatusIcon(invoice.status)}
                                        size="sm"
                                    >
                                        {invoice.status.toUpperCase()}
                                    </Chip>
                                </TableCell>

                                <TableCell>
                                    <div className="flex gap-2">
                                        <Tooltip content="View">
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="light"
                                                onPress={() => {
                                                    setSelectedInvoice(invoice);
                                                    setIsInvoiceModalOpen(true);
                                                }}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Tooltip>

                                        <Tooltip content="Edit">
                                            <Button isIconOnly size="sm" variant="light">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Tooltip>

                                        <Tooltip content="Delete">
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="light"
                                                color="danger"
                                                onPress={() => {
                                                    setSelectedInvoice(invoice);
                                                    setIsDeleteModalOpen(true);
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* INVOICE MODAL */}
            <Modal
                isOpen={isInvoiceModalOpen}
                onOpenChange={setIsInvoiceModalOpen}
                size="3xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                Invoice {selectedInvoice?.invoiceNumber}
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-xl font-bold">
                                    {formatCurrency(selectedInvoice?.amount || 0)}
                                </p>
                                <p>{selectedInvoice?.clientName}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    startContent={<Download className="h-4 w-4" />}
                                >
                                    Download PDF
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* DELETE MODAL */}
            <Modal
                isOpen={isDeleteModalOpen}
                onOpenChange={setIsDeleteModalOpen}
                size="sm"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Delete Invoice</ModalHeader>
                            <ModalBody>
                                Delete {selectedInvoice?.invoiceNumber}?
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    color="danger"
                                    onPress={() => {
                                        onClose();
                                        setSelectedInvoice(null);
                                    }}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
