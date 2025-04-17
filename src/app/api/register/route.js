import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();

//   const requiredFields = ["location", "gst", "companyName", "address", "mobile", "email"];
//   for (let field of requiredFields) {
//     if (!body[field]) {
//       return Response.json({ message: `Missing required field: ${field}` }, { status: 400 });
//     }
//   }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'majhinavimumbai@gmail.com',
        pass: 'wrqdfcgcnntttgxp',
      },
    });

    let content = `
New Registration Form Submission:

Company Info:
- Company Name: ${body.companyName}
- Address: ${body.address}
- Location: ${body.location}
- GST: ${body.gst}
- Pin Code: ${body.pinCode}
- Telephone: ${body.telephone}
- Fax: ${body.fax}
- Mobile: ${body.mobile}
- WhatsApp: ${body.whatsapp}
- Email: ${body.email}
- Website: ${body.website}

Contact Person Info:
- Name: ${body.contactPerson}
- Telephone: ${body.contactTel}
- Fax: ${body.contactFax}
- Mobile: ${body.contactMobile}
- WhatsApp: ${body.contactWhatsapp}
- Email: ${body.contactEmail}

Plan Info:
- Company Type: ${body.companyType?.join(", ") || "N/A"}
- Plan: ${body.plan}
- Duration: ${body.duration}

Business Info:
- Nature of Business: ${body.nature}
- Category: ${body.category}
- Sub Category: ${body.subCategory}
- Other: ${body.other || "N/A"}
`;

    const mailOptions = {
      from: 'majhinavimumbai@gmail.com',
      to: 'admin@majhinavimumbai.com',
      subject: 'New Registration Form Submission',
      text: content,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
