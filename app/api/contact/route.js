import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yashestatedelhi@gmail.com",
      subject: "New Enquiry",
      html: `
        <p>Name: ${formData.get("name")}</p>
        <p>Email: ${formData.get("email")}</p>
        <p>Message: ${formData.get("message")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: true }), { status: 500 });
  }
}
