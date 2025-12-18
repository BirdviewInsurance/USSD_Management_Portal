import { NextRequest, NextResponse } from 'next/server';
import { BillingController } from '@/controllers/billingController';

const billingController = new BillingController();

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status') as any;
        const clientId = searchParams.get('clientId');
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');

        const invoices = await billingController.getInvoices({
            status,
            clientId: clientId || undefined,
            startDate: startDate || undefined,
            endDate: endDate || undefined,
        });

        return NextResponse.json(invoices);
    } catch (error) {
        console.error('Error fetching invoices:', error);
        return NextResponse.json(
            { error: 'Failed to fetch invoices' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const invoice = await billingController.createInvoice(data);

        return NextResponse.json(invoice, { status: 201 });
    } catch (error) {
        console.error('Error creating invoice:', error);
        return NextResponse.json(
            { error: 'Failed to create invoice' },
            { status: 500 }
        );
    }
}