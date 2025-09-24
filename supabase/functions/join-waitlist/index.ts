import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface JoinWaitlistRequest {
  name?: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: JoinWaitlistRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ ok: false, message: "Email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Adding contact to Resend audience:", email);

    // Add contact to Resend audience
    try {
      const audienceResponse = await resend.contacts.create({
        email: email,
        firstName: name || undefined,
        audienceId: "78c1a4a5-9b7a-4b9e-8c1c-2d3e4f5g6h7i", // Replace with your actual audience ID
      });
      
      console.log("Contact added to audience:", audienceResponse);
    } catch (audienceError) {
      console.error("Error adding to audience:", audienceError);
      // Continue with email sending even if audience addition fails
    }

    // Read PDF file
    const pdfResponse = await fetch("https://bcxuphfuohongtfczsbw.supabase.co/storage/v1/object/public/guides/linkedin-guide.pdf");
    
    if (!pdfResponse.ok) {
      console.error("Failed to fetch PDF:", pdfResponse.status);
      // Send email without attachment if PDF fetch fails
    }

    const pdfBuffer = pdfResponse.ok ? await pdfResponse.arrayBuffer() : null;

    // Send welcome email with PDF attachment
    const emailData: any = {
      from: "Crafted <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Crafted - Your LinkedIn Guide is Here!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Welcome to Crafted${name ? `, ${name}` : ''}!</h1>
          
          <p>Thank you for joining our waitlist. We're excited to help you craft your magnetic LinkedIn leadership presence.</p>
          
          <p>As promised, here's your guide: <strong>The 5 Principles for Magnetic LinkedIn Leadership</strong></p>
          
          <p>This comprehensive guide will help you:</p>
          <ul>
            <li>Build authentic leadership presence on LinkedIn</li>
            <li>Create content that resonates with your audience</li>
            <li>Establish yourself as a thought leader in your industry</li>
            <li>Drive meaningful engagement and connections</li>
          </ul>
          
          <p>Ready to take your LinkedIn presence to the next level? Book a strategy call with our team:</p>
          
          <div style="margin: 30px 0;">
            <a href="https://calendly.com/underdogfounders/30min" 
               style="background-color: #0066cc; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Book Your Strategy Call
            </a>
          </div>
          
          <p>We'll be in touch soon with more insights and updates about the Crafted platform.</p>
          
          <p>Best regards,<br>The Crafted Team</p>
        </div>
      `,
    };

    // Add PDF attachment if available
    if (pdfBuffer) {
      emailData.attachments = [
        {
          filename: "5-principles-magnetic-linkedin-leadership.pdf",
          content: new Uint8Array(pdfBuffer),
        },
      ];
    }

    const emailResponse = await resend.emails.send(emailData);

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        ok: true, 
        message: "Successfully joined waitlist and email sent!",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in join-waitlist function:", error);
    return new Response(
      JSON.stringify({ 
        ok: false, 
        message: error.message || "An error occurred while processing your request" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);