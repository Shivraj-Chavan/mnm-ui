import nodemailer from 'nodemailer';

export async function POST(request) {
    const body = await request.json();
    const { company_name, name, phone, enquiry } = body;

    if (!company_name || !name || !phone || !enquiry) {
        return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        // Configure Nodemailer transport for Gmail
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'majhinavimumbai@gmail.com',
                pass: 'bifdpqqopbcgtnow',},
        });

        // Email content
        let mailOptions = {
            from: 'majhinavimumbai@gmail.com',
            to: 'admin@majhinavimumbai.com',
            subject: 'New Contact Form Submission',
            text: `Company Name: ${company_name}
Name: ${name}
Phone: ${phone}
Enquiry: ${enquiry}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error(error);
        return Response.json({ message: "Error sending email", error }, { status: 500 });
    }
}
