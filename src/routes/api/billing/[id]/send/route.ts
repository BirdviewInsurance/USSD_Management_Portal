import { NextRequest, NextResponse } from 'next/server';
import { BillingController } from '@/controllers/billingController';

const billingController = new BillingController();

export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const invoice = await billingController.sendInvoice(id);

        if (!invoice) {
            return NextResponse.json(
                { error: 'Invoice not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(invoice);
    } catch (error) {
        console.error('Error sending invoice:', error);
        return NextResponse.json(
            { error: 'Failed to send invoice' },
            { status: 500 }
        );
    }
}