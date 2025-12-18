import PDFDocument from 'pdfkit'
import { formatCurrency, formatDate } from '@/lib/utils'

export class PDFService {
    static async generateInvoicePDF(invoice: any, client: any): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({ margin: 50 })
                const buffers: Buffer[] = []

                doc.on('data', buffers.push.bind(buffers))
                doc.on('end', () => {
                    const pdfData = Buffer.concat(buffers)
                    resolve(pdfData)
                })

                // Header
                doc
                    .fillColor('#4f46e5')
                    .fontSize(24)
                    .text('USSD PORTAL', { align: 'center' })
                    .moveDown(0.5)
                    .fontSize(12)
                    .fillColor('#6b7280')
                    .text('Professional USSD Service Provider', { align: 'center' })
                    .moveDown(2)

                // Invoice header
                doc
                    .fillColor('#000')
                    .fontSize(20)
                    .text('INVOICE')
                    .fontSize(10)
                    .fillColor('#6b7280')
                    .text(`Invoice #: ${invoice.invoiceNumber}`)
                    .text(`Date: ${formatDate(invoice.date)}`)
                    .text(`Due Date: ${formatDate(invoice.dueDate)}`)
                    .text(`Status: ${invoice.status.toUpperCase()}`)
                    .moveDown(2)

                // From/To sections
                const fromX = 50
                const toX = 300

                doc
                    .fontSize(12)
                    .fillColor('#374151')
                    .text('Bill From:', fromX, doc.y, { continued: false })
                    .fontSize(10)
                    .fillColor('#6b7280')
                    .text('USSD Portal Inc.', fromX, doc.y + 20)
                    .text('123 Tech Street')
                    .text('San Francisco, CA 94107')
                    .text('billing@ussdportal.com')

                doc
                    .fontSize(12)
                    .fillColor('#374151')
                    .text('Bill To:', toX, 150, { continued: false })
                    .fontSize(10)
                    .fillColor('#6b7280')
                    .text(client.name, toX, doc.y + 20)
                    .text(client.company || '')
                    .text(client.email)
                    .text(client.phone || '')
                    .moveDown(3)

                // Line items table
                const tableTop = doc.y
                const itemCodeX = 50
                const descriptionX = 100
                const quantityX = 350
                const priceX = 400
                const amountX = 470

                // Table header
                doc
                    .fontSize(10)
                    .fillColor('#374151')
                    .text('Description', descriptionX, tableTop)
                    .text('Qty', quantityX, tableTop)
                    .text('Unit Price', priceX, tableTop)
                    .text('Amount', amountX, tableTop)

                doc
                    .moveTo(50, tableTop + 15)
                    .lineTo(550, tableTop + 15)
                    .strokeColor('#d1d5db')
                    .stroke()

                let currentY = tableTop + 25

                // Table rows
                const items = Array.isArray(invoice.items) ? invoice.items : []
                items.forEach((item: any, index: number) => {
                    doc
                        .fontSize(10)
                        .fillColor('#6b7280')
                        .text(item.description || `Item ${index + 1}`, descriptionX, currentY)
                        .text(item.quantity?.toString() || '1', quantityX, currentY)
                        .text(formatCurrency(item.unitPrice || 0), priceX, currentY)
                        .text(formatCurrency(item.total || 0), amountX, currentY)
                    currentY += 20
                })

                // Summary
                currentY = Math.max(currentY, 350)

                doc
                    .moveTo(350, currentY)
                    .lineTo(550, currentY)
                    .strokeColor('#d1d5db')
                    .stroke()

                currentY += 10

                doc
                    .fontSize(10)
                    .fillColor('#6b7280')
                    .text('Subtotal:', 400, currentY)
                    .text(formatCurrency(invoice.subtotal || 0), amountX, currentY, { align: 'right' })

                currentY += 15

                if (invoice.tax > 0) {
                    doc
                        .text(`Tax (${((invoice.tax / invoice.subtotal) * 100).toFixed(1)}%):`, 400, currentY)
                        .text(formatCurrency(invoice.tax || 0), amountX, currentY, { align: 'right' })
                    currentY += 15
                }

                if (invoice.discount > 0) {
                    doc
                        .text('Discount:', 400, currentY)
                        .text(`-${formatCurrency(invoice.discount || 0)}`, amountX, currentY, { align: 'right' })
                    currentY += 15
                }

                doc
                    .moveTo(350, currentY)
                    .lineTo(550, currentY)
                    .strokeColor('#4f46e5')
                    .strokeWidth(2)
                    .stroke()

                currentY += 20

                doc
                    .fontSize(14)
                    .fillColor('#000')
                    .text('Total:', 400, currentY)
                    .text(formatCurrency(invoice.total || 0), amountX, currentY, { align: 'right' })

                // Notes
                if (invoice.notes) {
                    currentY += 40
                    doc
                        .fontSize(10)
                        .fillColor('#6b7280')
                        .text('Notes:', 50, currentY)
                        .text(invoice.notes, 50, currentY + 15, { width: 500 })
                }

                // Footer
                doc
                    .fontSize(8)
                    .fillColor('#9ca3af')
                    .text(
                        'Thank you for choosing USSD Portal. Please make payment by the due date to avoid service interruption.',
                        50,
                        700,
                        { align: 'center', width: 500 }
                    )

                doc.end()
            } catch (error) {
                reject(error)
            }
        })
    }
}