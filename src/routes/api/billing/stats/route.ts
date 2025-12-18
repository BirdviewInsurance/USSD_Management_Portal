import { NextRequest, NextResponse } from 'next/server';
import { BillingController } from '@/controllers/billingController';

const billingController = new BillingController();

export async function GET() {
    try {
        const stats = await billingController.getBillingStats();
        return NextResponse.json(stats);
    } catch (error) {
        console.error('Error fetching billing stats:', error);
        return NextResponse.json(
            { error: 'Failed to fetch billing stats' },
            { status: 500 }
        );
    }
}