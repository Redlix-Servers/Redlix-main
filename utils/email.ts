import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

interface SendAutoReplyParams {
    to: string;
    name: string;
}

export async function sendAutoReply({ to, name }: SendAutoReplyParams) {
    const mailOptions = {
        from: `"Redlix Studio" <${process.env.SMTP_EMAIL}>`,
        to,
        subject: "Thank you for reaching out to Redlix Studio",
        html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #ddd; background-color: #ffffff; color: #333;">
                <div style="margin-bottom: 40px; text-align: left;">
                    <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1776288139/Screenshot_2026-04-16_at_02.51.43-removebg-preview_ytpg09.png" alt="Redlix Studio Logo" style="height: 50px; width: auto;" />
                </div>
                
                <h2 style="color: #E61E32; font-size: 18px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px; border-left: 4px solid #E61E32; padding-left: 16px;">
                    Thanks for reaching out
                </h2>
                
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                    Hello <strong>${name}</strong>,
                </p>
                
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                    Thank you for contacting <strong>Redlix Studio</strong>. We have received your details and our team is looking at your request right now.
                </p>
                
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                    We build high-quality software and IT systems for businesses. Someone from our team will contact you very soon to talk about your project.
                </p>
                
                <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee;">
                    <p style="margin: 0; font-weight: 700; color: #E61E32; text-transform: uppercase; font-size: 11px; letter-spacing: 0.2em;">Best Regards,</p>
                    <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: 900; letter-spacing: -0.03em; text-transform: uppercase; color: #1a1a1a;">The Redlix Team</p>
                </div>
                
                <div style="margin-top: 50px; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.8;">
                    <p style="margin: 0;">© 2026 Redlix Studio | Software & IT Solutions</p>
                    <p style="margin: 0;">This is an automated message. Please do not reply.</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Auto-reply sent to ${to}`);
    } catch (error) {
        console.error("Error sending auto-reply email:", error);
        // We don't throw here because we don't want to fail the whole request if email fails
    }
}
