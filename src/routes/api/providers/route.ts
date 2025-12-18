import { NextRequest, NextResponse } from 'next/server';
import { ProviderController } from '@/controllers/providerController';

const providerController = new ProviderController();

export async function GET(request: NextRequest) {
    try {
        const providers = await providerController.getProviders();
        return NextResponse.json(providers);
    } catch (error) {
        console.error('Error fetching providers:', error);
        return NextResponse.json(
            { error: 'Failed to fetch providers' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const provider = await providerController.addProvider(body);
        return NextResponse.json(provider, { status: 201 });
    } catch (error) {
        console.error('Error creating provider:', error);
        return NextResponse.json(
            { error: 'Failed to create provider' },
            { status: 500 }
        );
    }
}

// Individual provider routes
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const body = await request.json();

        if (body.status) {
            const provider = await providerController.updateProviderStatus(id, body.status);
            return NextResponse.json(provider);
        }

        return NextResponse.json(
            { error: 'Invalid update data' },
            { status: 400 }
        );
    } catch (error) {
        console.error('Error updating provider:', error);
        return NextResponse.json(
            { error: 'Failed to update provider' },
            { status: 500 }
        );
    }
}