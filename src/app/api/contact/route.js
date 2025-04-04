import nodemailer from 'nodemailer'
export async function POST(request) {
    const body = await request.json();

    const { company_name, name, phone, enquiry } = body;
    console.log(body);
    if (!company_name || !name || !phone || !enquiry) {
        return Response.json({ message: "All fields are required" });
    }

    try {
        // Configure Nodemailer transport
        let transporter = nodemailer.createTransport({
            host:"smtp.office365.com",
            port: 587,
           secure:false,
            auth: {
                user: "admin@majhinavimumbai.com",
                pass: "Admin@2025", 
            },
        });

        // Email content
        let mailOptions = {
            from: '"Your Website" <info@majhinavimumbai.com>',
            // to: "admin@majhinavimumbai.com",
            to: "shivrajchavan1902@gmail.com",
            subject: "New Contact Form Submission",
            text: `Company Name: ${company_name}
                Name: ${name}
                Phone: ${phone}
                Enquiry: ${enquiry}`,
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        return Response.json({ message: "Email sent successfully!" },{status:200});

    } catch (error) {
        console.log(error)
        return Response.json({ message: "Error sending email", error },{status:500});
    }


}
