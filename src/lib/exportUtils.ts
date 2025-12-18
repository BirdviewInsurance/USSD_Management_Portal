import { Invoice, Payment } from './types';

export function generateInvoicePDF(invoice: Invoice): string {
    // This would integrate with a PDF generation library
    // For now, return a mock URL
    return `data:application/pdf;base64,mock-pdf-data-${invoice.id}`;
}

export function exportInvoicesToCSV(invoices: Invoice[]): string {
    const headers = ['Invoice #', 'Client', 'Date', 'Due Date', 'Status', 'Subtotal', 'Tax', 'Discount', 'Total'];
    const rows = invoices.map(invoice => [
        invoice.invoiceNumber,
        invoice.clientName,
        invoice.date,
        invoice.dueDate,
        invoice.status,
        invoice.subtotal.toFixed(2),
        invoice.tax.toFixed(2),
        invoice.discount.toFixed(2),
        invoice.total.toFixed(2),
    ]);

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
}

export function exportPaymentsToCSV(payments: Payment[]): string {
    const headers = ['Payment ID', 'Invoice #', 'Client', 'Amount', 'Date', 'Method', 'Status', 'Reference'];
    const rows = payments.map(payment => [
        payment.id,
        payment.invoiceNumber,
        payment.clientName,
        payment.amount.toFixed(2),
        payment.date,
        payment.method,
        payment.status,
        payment.reference,
    ]);

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
}