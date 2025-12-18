'use client';

import { useState } from 'react';
import { X, Download, Printer, Mail, Copy, Check } from 'lucide-react';
import { Invoice } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface InvoiceViewModalProps {
    invoice: Invoice;
    isOpen: boolean;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
    onSend: () => void;
    onMarkAsPaid: () => void;
}

export function InvoiceViewModal({
    invoice,
    isOpen,
    onClose,
    onEdit,
    onDelete,
    onSend,
    onMarkAsPaid,
}: InvoiceViewModalProps) {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const copyToClipboard = () => {
        const text = `
Invoice Number: ${invoice.invoiceNumber}
Client: ${invoice.clientName}
Date: ${formatDate(invoice.date)}
Due Date: ${formatDate(invoice.dueDate)}
Status: ${invoice.status.toUpperCase()}
Total: ${formatCurrency(invoice.total)}
    `.trim();

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="relative z-50 w-full max-w-4xl bg-white rounded-2xl shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Invoice #{invoice.invoiceNumber}</h2>
                            <p className="text-sm text-gray-500">Issued on {formatDate(invoice.date)}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                                    invoice.status === 'sent' ? 'bg-blue-100 text-blue-800' :
                                        invoice.status === 'overdue' ? 'bg-red-100 text-red-800' :
                                            invoice.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                'bg-amber-100 text-amber-800'
                                }`}>
                                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </span>

                            <button
                                onClick={copyToClipboard}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                                title="Copy details"
                            >
                                {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                            </button>

                            <button
                                onClick={onClose}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Invoice Header */}
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">BILL FROM</h3>
                                <p className="font-bold text-lg">USSD Services Inc.</p>
                                <p className="text-gray-600">123 Tech Street</p>
                                <p className="text-gray-600">San Francisco, CA 94107</p>
                                <p className="text-gray-600">billing@ussdservices.com</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">BILL TO</h3>
                                <p className="font-bold text-lg">{invoice.clientName}</p>
                                <p className="text-gray-600">{invoice.clientEmail}</p>
                            </div>
                        </div>

                        {/* Invoice Details */}
                        <div className="grid grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-xl">
                            <div>
                                <p className="text-sm text-gray-500">Invoice Number</p>
                                <p className="font-medium">{invoice.invoiceNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-medium">{formatDate(invoice.date)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Due Date</p>
                                <p className="font-medium">{formatDate(invoice.dueDate)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Payment Status</p>
                                <p className={`font-medium ${invoice.status === 'paid' ? 'text-green-600' :
                                        invoice.status === 'overdue' ? 'text-red-600' :
                                            'text-amber-600'
                                    }`}>
                                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                </p>
                            </div>
                        </div>

                        {/* Items Table */}
                        <div className="mb-8">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Quantity</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Unit Price</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {invoice.items.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="py-3 px-4">{item.description}</td>
                                            <td className="py-3 px-4">{item.quantity}</td>
                                            <td className="py-3 px-4">{formatCurrency(item.unitPrice)}</td>
                                            <td className="py-3 px-4 font-medium">{formatCurrency(item.total)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Totals */}
                        <div className="ml-auto w-64 space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">{formatCurrency(invoice.subtotal)}</span>
                            </div>

                            {invoice.discount > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Discount</span>
                                    <span className="font-medium text-red-600">-{formatCurrency(invoice.discount)}</span>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium">+{formatCurrency(invoice.tax)}</span>
                            </div>

                            <div className="border-t border-gray-300 pt-2 mt-2">
                                <div className="flex justify-between">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-2xl font-bold text-primary">
                                        {formatCurrency(invoice.total)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        {invoice.notes && (
                            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                                <h4 className="font-medium text-blue-900 mb-2">Notes</h4>
                                <p className="text-blue-800">{invoice.notes}</p>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t border-gray-200 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-3">
                                <Button
                                    variant="outline"
                                    onClick={() => window.print()}
                                    icon={<Printer className="h-4 w-4" />}
                                >
                                    Print
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => { /* Download PDF */ }}
                                    icon={<Download className="h-4 w-4" />}
                                >
                                    Download PDF
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={onSend}
                                    disabled={invoice.status === 'sent'}
                                    icon={<Mail className="h-4 w-4" />}
                                >
                                    Send Email
                                </Button>
                            </div>

                            <div className="flex space-x-3">
                                {invoice.status === 'draft' && (
                                    <Button
                                        variant="danger"
                                        onClick={onDelete}
                                    >
                                        Delete
                                    </Button>
                                )}

                                {invoice.status === 'sent' && (
                                    <Button
                                        variant="primary"
                                        onClick={onMarkAsPaid}
                                    >
                                        Mark as Paid
                                    </Button>
                                )}

                                <Button
                                    variant="secondary"
                                    onClick={onEdit}
                                >
                                    Edit Invoice
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}