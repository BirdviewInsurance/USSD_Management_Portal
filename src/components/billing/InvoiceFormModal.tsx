'use client';

import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@heroui/input';
import { Textarea } from '@heroui/textarea';
import { Select, SelectItem } from '@heroui/select';
import { Card } from '@heroui/card';
import { BillingItem } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface InvoiceFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    onCancel: () => void;
}

export function InvoiceForm({ initialData, onSubmit, onCancel }: InvoiceFormProps) {
    const [formData, setFormData] = useState({
        clientName: initialData?.clientName || '',
        clientEmail: initialData?.clientEmail || '',
        invoiceNumber: initialData?.invoiceNumber || `INV-${Date.now()}`,
        date: initialData?.date || new Date().toISOString().split('T')[0],
        dueDate: initialData?.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        items: initialData?.items || [{ id: '1', description: '', quantity: 1, unitPrice: 0, total: 0 }],
        notes: initialData?.notes || '',
        tax: initialData?.tax || 0,
        discount: initialData?.discount || 0,
    });

    const [calculations, setCalculations] = useState({
        subtotal: 0,
        total: 0,
    });

    // Calculate totals whenever items change
    const calculateTotals = (items: BillingItem[], tax: number, discount: number) => {
        const subtotal = items.reduce((sum, item) => sum + item.total, 0);
        const total = subtotal + tax - discount;
        return { subtotal, total };
    };

    const handleItemChange = (index: number, field: keyof BillingItem, value: any) => {
        const newItems = [...formData.items];
        const item = { ...newItems[index] };

        if (field === 'description') {
            item.description = value;
        } else if (field === 'quantity') {
            item.quantity = parseInt(value) || 0;
        } else if (field === 'unitPrice') {
            item.unitPrice = parseFloat(value) || 0;
        }

        item.total = item.quantity * item.unitPrice;
        newItems[index] = item;

        const totals = calculateTotals(newItems, formData.tax, formData.discount);
        setFormData(prev => ({ ...prev, items: newItems }));
        setCalculations(totals);
    };

    const addItem = () => {
        const newItems = [
            ...formData.items,
            { id: Date.now().toString(), description: '', quantity: 1, unitPrice: 0, total: 0 },
        ];
        const totals = calculateTotals(newItems, formData.tax, formData.discount);
        setFormData(prev => ({ ...prev, items: newItems }));
        setCalculations(totals);
    };

    const removeItem = (index: number) => {
        if (formData.items.length > 1) {
            const newItems = formData.items.filter((_, i) => i !== index);
            const totals = calculateTotals(newItems, formData.tax, formData.discount);
            setFormData(prev => ({ ...prev, items: newItems }));
            setCalculations(totals);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            subtotal: calculations.subtotal,
            total: calculations.total,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Client Information */}
            <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Client Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Client Name"
                        value={formData.clientName}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, clientName: value }))}
                        isRequired
                    />
                    <Input
                        label="Client Email"
                        type="email"
                        value={formData.clientEmail}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, clientEmail: value }))}
                        isRequired
                    />
                </div>
            </Card>

            {/* Invoice Details */}
            <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Invoice Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                        label="Invoice Number"
                        value={formData.invoiceNumber}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, invoiceNumber: value }))}
                        isRequired
                    />
                    <Input
                        label="Date"
                        type="date"
                        value={formData.date}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, date: value }))}
                        isRequired
                    />
                    <Input
                        label="Due Date"
                        type="date"
                        value={formData.dueDate}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, dueDate: value }))}
                        isRequired
                    />
                </div>
            </Card>

            {/* Items */}
            <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Items</h3>
                    <Button
                        type="button"
                        variant="bordered"
                        size="sm"
                        onPress={addItem}
                        startContent={<Plus className="h-4 w-4" />}
                    >
                        Add Item
                    </Button>
                </div>

                <div className="space-y-4">
                    {formData.items.map((item, index) => (
                        <div key={item.id} className="grid grid-cols-12 gap-4 items-end">
                            <div className="col-span-12 md:col-span-5">
                                <Input
                                    label="Description"
                                    value={item.description}
                                    onValueChange={(value) => handleItemChange(index, 'description', value)}
                                    isRequired
                                />
                            </div>

                            <div className="col-span-6 md:col-span-2">
                                <Input
                                    label="Qty"
                                    type="number"
                                    value={item.quantity.toString()}
                                    onValueChange={(value) => handleItemChange(index, 'quantity', value)}
                                    min="1"
                                    isRequired
                                />
                            </div>

                            <div className="col-span-6 md:col-span-3">
                                <Input
                                    label="Unit Price"
                                    type="number"
                                    value={item.unitPrice.toString()}
                                    onValueChange={(value) => handleItemChange(index, 'unitPrice', value)}
                                    step="0.01"
                                    isRequired
                                />
                            </div>

                            <div className="col-span-6 md:col-span-1 flex items-center h-full">
                                <div className="pt-2">
                                    <p className="text-sm font-medium">{formatCurrency(item.total)}</p>
                                </div>
                            </div>

                            <div className="col-span-6 md:col-span-1">
                                {formData.items.length > 1 && (
                                    <Button
                                        type="button"
                                        isIconOnly
                                        variant="light"
                                        color="danger"
                                        size="sm"
                                        onPress={() => removeItem(index)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Tax, Discount & Notes */}
            <Card className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                        label="Tax Amount"
                        type="number"
                        value={formData.tax.toString()}
                        onValueChange={(value) => {
                            const tax = parseFloat(value) || 0;
                            const totals = calculateTotals(formData.items, tax, formData.discount);
                            setFormData(prev => ({ ...prev, tax }));
                            setCalculations(totals);
                        }}
                        step="0.01"
                        startContent={<span className="text-default-500">$</span>}
                    />

                    <Input
                        label="Discount"
                        type="number"
                        value={formData.discount.toString()}
                        onValueChange={(value) => {
                            const discount = parseFloat(value) || 0;
                            const totals = calculateTotals(formData.items, formData.tax, discount);
                            setFormData(prev => ({ ...prev, discount }));
                            setCalculations(totals);
                        }}
                        step="0.01"
                        startContent={<span className="text-default-500">$</span>}
                    />
                </div>

                <div className="mt-4">
                    <Textarea
                        label="Notes"
                        value={formData.notes}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, notes: value }))}
                        placeholder="Additional notes or terms..."
                        minRows={3}
                    />
                </div>
            </Card>

            {/* Summary */}
            <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Summary</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-default-600">Subtotal:</span>
                        <span className="font-medium">{formatCurrency(calculations.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-default-600">Tax:</span>
                        <span className="font-medium">+{formatCurrency(formData.tax)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-default-600">Discount:</span>
                        <span className="font-medium text-danger">-{formatCurrency(formData.discount)}</span>
                    </div>
                    <div className="border-t border-divider pt-2 mt-2">
                        <div className="flex justify-between">
                            <span className="text-lg font-bold">Total:</span>
                            <span className="text-2xl font-bold text-primary">
                                {formatCurrency(calculations.total)}
                            </span>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Form Actions */}
            <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    variant="light"
                    onPress={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    color="primary"
                >
                    {initialData ? 'Update Invoice' : 'Create Invoice'}
                </Button>
            </div>
        </form>
    );
}