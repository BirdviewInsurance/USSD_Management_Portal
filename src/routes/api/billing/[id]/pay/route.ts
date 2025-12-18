import { NextRequest, NextResponse } from 'next/server';
import { BillingController } from '@/controllers/billingController';

const billingController = new BillingController();

export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const paymentData = await request.json();

        const result = await billingController.markAsPaid(id, paymentData);

        if (!result) {
            return NextResponse.json(
                { error: 'Invoice not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error marking invoice as paid:', error);
        return NextResponse.json(
            { error: 'Failed to mark invoice as paid' },
            { status: 500 }
        );
    }
}