'use client';

import { useState } from 'react';
import { X, CreditCard, Bank, DollarSign, Wallet } from 'lucide-react';
import { Invoice } from '@/lib/types';
import { Button } from '@/components/ui/Button';

interface PaymentModalProps {
    invoice: Invoice;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (paymentData: {
        method: 'credit_card' | 'bank_transfer' | 'cash' | 'paypal';
        reference: string;
        date: string;
    }) => void;
}

export function PaymentModal({ invoice, isOpen, onClose, onSubmit }: PaymentModalProps) {
    const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'bank_transfer' | 'cash' | 'paypal'>('credit_card');
    const [reference, setReference] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    if (!isOpen) return null;

    const paymentMethods = [
        { id: 'credit_card', label: 'Credit Card', icon: CreditCard },
        { id: 'bank_transfer', label: 'Bank Transfer', icon: Bank },
        { id: 'cash', label: 'Cash', icon: DollarSign },
        { id: 'paypal', label: 'PayPal', icon: Wallet },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            method: paymentMethod,
            reference,
            date,
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />

                <div className="relative z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Record Payment</h2>
                            <p className="text-sm text-gray-500">Invoice #{invoice.invoiceNumber}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="space-y-6">
                            {/* Invoice Details */}
                            <div className="bg-blue-50 p-4 rounded-xl">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Client:</span>
                                    <span className="font-medium">{invoice.clientName}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Amount Due:</span>
                                    <span className="text-xl font-bold text-primary">
                                        ${invoice.total.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Payment Method
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {paymentMethods.map((method) => {
                                        const Icon = method.icon;
                                        return (
                                            <button
                                                key={method.id}
                                                type="button"
                                                onClick={() => setPaymentMethod(method.id as any)}
                                                className={`p-4 border rounded-xl transition-all ${paymentMethod === method.id
                                                        ? 'border-primary bg-primary/5'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className={`p-2 rounded-lg ${paymentMethod === method.id
                                                            ? 'bg-primary text-white'
                                                            : 'bg-gray-100 text-gray-600'
                                                        }`}>
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                    <span className="font-medium">{method.label}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Reference Number
                                    </label>
                                    <input
                                        type="text"
                                        value={reference}
                                        onChange={(e) => setReference(e.target.value)}
                                        placeholder="TRX-12345 or Check #"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Payment Date
                                    </label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-3 mt-8">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="primary"
                            >
                                Record Payment
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}