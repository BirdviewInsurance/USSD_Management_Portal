import { WebSocketServer } from 'ws'
import { Server } from 'http'

interface WebSocketMessage {
    type: string
    data: any
    timestamp: number
}

export class WebSocketService {
    private wss: WebSocketServer
    private clients = new Map<string, any>()

    constructor(server: Server) {
        this.wss = new WebSocketServer({ server })

        this.wss.on('connection', (ws, req) => {
            const clientId = Math.random().toString(36).substring(7)
            this.clients.set(clientId, ws)

            console.log(`New WebSocket connection: ${clientId}`)

            // Send welcome message
            this.sendToClient(clientId, {
                type: 'welcome',
                data: { clientId },
                timestamp: Date.now(),
            })

            ws.on('message', (message) => {
                try {
                    const parsed = JSON.parse(message.toString())
                    this.handleMessage(clientId, parsed)
                } catch (error) {
                    console.error('Error parsing message:', error)
                }
            })

            ws.on('close', () => {
                this.clients.delete(clientId)
                console.log(`WebSocket disconnected: ${clientId}`)
            })
        })
    }

    private handleMessage(clientId: string, message: WebSocketMessage) {
        console.log(`Message from ${clientId}:`, message)

        switch (message.type) {
            case 'subscribe':
                this.handleSubscribe(clientId, message.data)
                break
            case 'unsubscribe':
                this.handleUnsubscribe(clientId, message.data)
                break
            case 'ping':
                this.sendToClient(clientId, {
                    type: 'pong',
                    data: {},
                    timestamp: Date.now(),
                })
                break
        }
    }

    private handleSubscribe(clientId: string, data: any) {
        const { channel } = data

        // Store subscription
        const ws = this.clients.get(clientId)
        if (ws) {
            (ws as any).subscriptions = (ws as any).subscriptions || new Set()
                ; (ws as any).subscriptions.add(channel)

            this.sendToClient(clientId, {
                type: 'subscribed',
                data: { channel },
                timestamp: Date.now(),
            })
        }
    }

    private handleUnsubscribe(clientId: string, data: any) {
        const { channel } = data

        const ws = this.clients.get(clientId)
        if (ws && (ws as any).subscriptions) {
            ; (ws as any).subscriptions.delete(channel)

            this.sendToClient(clientId, {
                type: 'unsubscribed',
                data: { channel },
                timestamp: Date.now(),
            })
        }
    }

    private sendToClient(clientId: string, message: WebSocketMessage) {
        const ws = this.clients.get(clientId)
        if (ws && ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify(message))
        }
    }

    broadcast(message: WebSocketMessage) {
        this.wss.clients.forEach((client) => {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify(message))
            }
        })
    }

    broadcastToChannel(channel: string, message: Omit<WebSocketMessage, 'type'>) {
        this.wss.clients.forEach((client) => {
            if (
                client.readyState === client.OPEN &&
                (client as any).subscriptions &&
                (client as any).subscriptions.has(channel)
            ) {
                client.send(JSON.stringify({
                    type: `channel:${channel}`,
                    ...message,
                }))
            }
        })
    }

    // Real-time events
    notifyInvoiceCreated(invoice: any) {
        this.broadcastToChannel('invoices', {
            type: 'invoice:created',
            data: invoice,
            timestamp: Date.now(),
        })
    }

    notifyInvoiceUpdated(invoice: any) {
        this.broadcastToChannel('invoices', {
            type: 'invoice:updated',
            data: invoice,
            timestamp: Date.now(),
        })
    }

    notifyPaymentReceived(payment: any) {
        this.broadcastToChannel('payments', {
            type: 'payment:received',
            data: payment,
            timestamp: Date.now(),
        })
    }

    notifyProviderStatusChanged(provider: any) {
        this.broadcastToChannel('providers', {
            type: 'provider:status-changed',
            data: provider,
            timestamp: Date.now(),
        })
    }

    notifyUsageUpdate(clientId: string, usage: number) {
        this.broadcastToChannel(`client:${clientId}`, {
            type: 'usage:updated',
            data: { clientId, usage },
            timestamp: Date.now(),
        })
    }
}