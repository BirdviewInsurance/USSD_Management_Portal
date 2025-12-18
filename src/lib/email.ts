import nodemailer from 'nodemailer'

const smtpConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
}

const transporter = nodemailer.createTransport(smtpConfig)

export interface EmailOptions {
    to: string | string[]
    subject: string
    html: string
    text?: string
    attachments?: any[]
}

export class EmailService {
    static async sendEmail(options: EmailOptions): Promise<boolean> {
        try {
            const mailOptions = {
                from: `"USSD Portal" <${process.env.SMTP_FROM || 'noreply@ussdportal.com'}>`,
                to: Array.isArray(options.to) ? options.to.join(',') : options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
                attachments: options.attachments,
            }

            const info = await transporter.sendMail(mailOptions)
            console.log('Email sent:', info.messageId)
            return true
        } catch (error) {
            console.error('Error sending email:', error)
            return false
        }
    }

    static async sendInvoiceEmail(
        invoice: any,
        client: any,
        pdfBuffer?: Buffer
    ): Promise<boolean> {
        const subject = `Invoice #${invoice.invoiceNumber} from USSD Portal`

        const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4f46e5; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
          .invoice-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .button { background: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
          .total { font-size: 24px; font-weight: bold; color: #4f46e5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Invoice #${invoice.invoiceNumber}</h1>
          </div>
          <div class="content">
            <p>Dear ${client.name},</p>
            <p>Please find attached your invoice for USSD services.</p>
            
            <div class="invoice-details">
              <h3>Invoice Details</h3>
              <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
              <p><strong>Date:</strong> ${new Date(invoice.date).toLocaleDateString()}</p>
              <p><strong>Due Date:</strong> ${new Date(invoice.dueDate).toLocaleDateString()}</p>
              <p><strong>Status:</strong> ${invoice.status}</p>
              <p><strong>Total Amount:</strong> <span class="total">$${invoice.total.toFixed(2)}</span></p>
            </div>
            
            <p>You can view and pay your invoice online:</p>
            <p>
              <a href="${process.env.NEXTAUTH_URL}/billing/invoices/${invoice.id}" class="button">
                View Invoice Online
              </a>
            </p>
            
            <p>If you have any questions, please contact our support team.</p>
            
            <p>Best regards,<br>USSD Portal Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} USSD Portal. All rights reserved.</p>
            <p>This is an automated email, please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `

        const attachments = []
        if (pdfBuffer) {
            attachments.push({
                filename: `invoice-${invoice.invoiceNumber}.pdf`,
                content: pdfBuffer,
                contentType: 'application/pdf',
            })
        }

        return await this.sendEmail({
            to: client.email,
            subject,
            html,
            attachments,
        })
    }

    static async sendPaymentConfirmation(
        payment: any,
        invoice: any,
        client: any
    ): Promise<boolean> {
        const subject = `Payment Confirmation for Invoice #${invoice.invoiceNumber}`

        const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #10b981; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
          .payment-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .button { background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
          .total { font-size: 24px; font-weight: bold; color: #10b981; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Payment Confirmed</h1>
          </div>
          <div class="content">
            <p>Dear ${client.name},</p>
            <p>Thank you for your payment. Your invoice has been marked as paid.</p>
            
            <div class="payment-details">
              <h3>Payment Details</h3>
              <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
              <p><strong>Payment Reference:</strong> ${payment.reference}</p>
              <p><strong>Payment Method:</strong> ${payment.method}</p>
              <p><strong>Amount Paid:</strong> <span class="total">$${payment.amount.toFixed(2)}</span></p>
              <p><strong>Payment Date:</strong> ${new Date(payment.processedAt || payment.createdAt).toLocaleDateString()}</p>
            </div>
            
            <p>You can view your receipt online:</p>
            <p>
              <a href="${process.env.NEXTAUTH_URL}/billing/payments/${payment.id}" class="button">
                View Receipt
              </a>
            </p>
            
            <p>If you have any questions, please contact our support team.</p>
            
            <p>Best regards,<br>USSD Portal Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} USSD Portal. All rights reserved.</p>
            <p>This is an automated email, please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `

        return await this.sendEmail({
            to: client.email,
            subject,
            html,
        })
    }
}