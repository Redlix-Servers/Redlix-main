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

interface SendOfferLetterParams {
    to: string;
    name: string;
    role: string;
    offerLetterLink: string;
}

export async function sendOfferLetter({ to, name, role, offerLetterLink }: SendOfferLetterParams) {
    const mailOptions = {
        from: `"Redlix HR" <${process.env.SMTP_EMAIL}>`,
        to,
        subject: `Job Offer: ${role} | Redlix Studio`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.5;">
                <div style="margin-bottom: 30px;">
                    <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1776288139/Screenshot_2026-04-16_at_02.51.43-removebg-preview_ytpg09.png" alt="Redlix Studio" style="height: 40px;" />
                </div>
                
                <p>Hello ${name},</p>
                
                <p>We are happy to offer you the position of <strong>${role}</strong> at Redlix Studio. We enjoyed meeting you and think you would be a great fit for our team.</p>
                
                <p>You can view and accept your offer letter by clicking the link below:</p>
                
                <p style="margin: 30px 0;">
                    <a href="${offerLetterLink}" style="background-color: #E61E32; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                        View offer letter
                    </a>
                </p>
                
                <p>If you have any questions, please feel free to reach out. We look forward to hearing from you.</p>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="margin: 0; font-weight: bold;">The Redlix Team</p>
                    <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Redlix Studio | Software & IT Solutions</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Offer letter sent to ${to}`);
        return { success: true };
    } catch (error) {
        console.error("Error sending offer letter email:", error);
        return { success: false, error };
    }
}

interface SendSupportConfirmationParams {
    to: string;
    name: string;
    ticketId: number;
    subject: string;
}

export async function sendSupportConfirmation({ to, name, ticketId, subject }: SendSupportConfirmationParams) {
    const mailOptions = {
        from: `"Redlix Support" <${process.env.SMTP_EMAIL}>`,
        to,
        subject: `Support Ticket Received - #${ticketId}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.5;">
                <div style="margin-bottom: 30px;">
                    <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1776288139/Screenshot_2026-04-16_at_02.51.43-removebg-preview_ytpg09.png" alt="Redlix Studio" style="height: 40px;" />
                </div>
                
                <p>Hello ${name},</p>
                
                <p>We have received your support request regarding <strong>"${subject}"</strong>. Our team has assigned ticket ID <strong>#${ticketId}</strong> to your case.</p>
                
                <p>We are currently looking into your issue and will get back to you as soon as possible.</p>
                
                <p>If you have any more details to share, please reply to this email.</p>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="margin: 0; font-weight: bold;">Redlix Support Team</p>
                    <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">This is an automated confirmation. We will reach out to you shortly.</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Support confirmation sent to ${to}`);
        return { success: true };
    } catch (error) {
        console.error("Error sending support confirmation email:", error);
        return { success: false, error };
    }
}

interface SendMeetingConfirmationParams {
    to: string;
    clientName: string;
    companyName: string;
    appName?: string;
    phone?: string;
    template: string;
    meetingTime: string;
    developerName?: string;
    meetingLink?: string;
}

export async function sendMeetingConfirmation({ to, clientName, companyName, appName, phone, template, meetingTime, developerName, meetingLink }: SendMeetingConfirmationParams) {

    const templateDetails: Record<string, string> = {
        "Discovery Call": "This is an introductory call to discuss your project requirements, goals, and how Redlix Studio can help you achieve them.",
        "Project Onboarding": "Welcome to Redlix! This meeting will cover the initial steps of our collaboration, project timelines, and communication channels.",
        "Weekly Sync": "Our regular check-in to review progress, address roadblocks, and ensure the project is moving according to plan.",
        "Final Delivery": "The concluding session to walk through the final product, handle handovers, and discuss support/maintenance.",
        "Developer Meet": `This technical session will be led by our developer, ${developerName || "one of our lead engineers"}, to discuss technical specifications, architecture, and code-level details.`
    };

    const details = templateDetails[template] || "A meeting has been scheduled to discuss your project with Redlix Studio.";
    const finalMeetingLink = meetingLink || "";

    const mailOptions = {
        from: `"Redlix Client Support" <${process.env.SMTP_EMAIL}>`,
        to,
        subject: `Meeting Scheduled: ${template} | Redlix Studio & ${companyName}`,
        html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e0e0e0; background-color: #ffffff; color: #1a1a1a;">
                <!-- Header -->
                <div style="background-color: #ffffff; padding: 20px 40px; text-align: left; border-bottom: 1px solid #eee;">
                    <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1776288139/Screenshot_2026-04-16_at_02.51.43-removebg-preview_ytpg09.png" alt="Redlix Studio" style="height: 35px;" />
                </div>
                
                <div style="padding: 40px;">
                    <h1 style="color: #0a0a0a; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px 0;">
                        Meeting Scheduled
                    </h1>
                    <div style="width: 40px; height: 2px; background-color: #E61E32; margin-bottom: 30px;"></div>
                    
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                        Hello <strong>${clientName}</strong>,
                    </p>
                    
                    <p style="font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 35px;">
                        We have successfully registered your project and scheduled a <strong>${template}</strong>. Below are the complete details for your upcoming session and project record.
                    </p>

                    <!-- Client & Project Details -->
                    <h3 style="font-size: 12px; font-weight: 700; color: #E61E32; margin-bottom: 15px;">Project information</h3>
                    <div style="background-color: #f8f8f8; padding: 25px; margin-bottom: 30px; border: 1px solid #eee;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-size: 13px; color: #888; width: 140px;">Company</td>
                                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #1a1a1a;">${companyName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-size: 13px; color: #888;">App/Website</td>
                                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #1a1a1a;">${appName || "Web Project"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-size: 13px; color: #888;">Contact</td>
                                <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">${clientName} (${phone || 'N/A'})</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-size: 13px; color: #888;">Email</td>
                                <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">${to}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Meeting Details -->
                    <h3 style="font-size: 12px; font-weight: 700; color: #E61E32; margin-bottom: 15px;">Meeting schedule</h3>
                    <div style="background-color: #0a0a0a; padding: 30px; color: #ffffff; margin-bottom: 40px;">
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #E61E32; font-weight: 700;">Type</p>
                        <p style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">${template}</p>
                        
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #E61E32; font-weight: 700;">Date & time</p>
                        <p style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">${new Date(meetingTime).toLocaleString()}</p>
                        
                        ${developerName ? `
                            <p style="margin: 0 0 8px 0; font-size: 12px; color: #E61E32; font-weight: 700;">Lead developer</p>
                            <p style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">${developerName}</p>
                        ` : ''}

                        <p style="margin: 0 0 25px 0; font-size: 14px; color: #aaa; line-height: 1.5; border-top: 1px solid #333; padding-top: 20px;">
                            ${details}
                        </p>
                        
                        ${finalMeetingLink ? `
                            <a href="${finalMeetingLink}" style="display: inline-block; background-color: #E61E32; color: white; padding: 14px 28px; text-decoration: none; border-radius: 2px; font-weight: 700; font-size: 13px; letter-spacing: 0.05em;">
                                Join conference room
                            </a>
                        ` : `
                            <p style="font-size: 12px; color: #E61E32; font-style: italic;">The conference link will be shared shortly before the session.</p>
                        `}
                    </div>
                    
                    <p style="font-size: 13px; line-height: 1.6; color: #888; text-align: center; font-style: italic;">
                        Please ensure you have a stable internet connection and access to a microphone for this session.
                    </p>
                </div>

                <!-- Footer -->
                <div style="background-color: #fafafa; padding: 40px; border-top: 1px solid #eee;">
                    <p style="margin: 0; font-weight: 700; color: #E61E32; font-size: 11px; letter-spacing: 0.1em; margin-bottom: 8px;">Support lead</p>
                    <p style="margin: 0; font-size: 18px; font-weight: 700; color: #0a0a0a;">Shiva Krishna Manthena</p>
                    <p style="margin: 2px 0 25px 0; font-size: 12px; color: #666;">Redlix Studio | Support team</p>
                    
                    <div style="font-size: 11px; color: #999; line-height: 1.8;">
                        <p style="margin: 0;">© 2026 Redlix Studio</p>
                        <p style="margin: 0;">Software & IT infrastructure solutions</p>
                        <p style="margin: 5px 0 0 0; color: #E61E32; font-weight: 600;">www.redlix.co.in</p>
                    </div>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Meeting confirmation sent to ${to}`);
        return { success: true };
    } catch (error) {
        console.error("Error sending meeting confirmation email:", error);
        return { success: false, error };
    }
}
