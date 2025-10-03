import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const autoReplyMessage = `
Dear ${name},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Here's a copy of your message:
"${message}"

Best regards,
Full Stack Developer

---
This is an automated response. Please do not reply to this email.
    `

    // In a real application, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate the email sending
    console.log("Sending auto-reply to:", email)
    console.log("Auto-reply message:", autoReplyMessage)

    // You can also log the original message for your records
    console.log("Original message from:", name, email)
    console.log("Message:", message)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message sent successfully and auto-reply sent to user",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
