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

async function sendWelcomeEmail(email: string, name?: string) {
  try {
    console.log("Starting email process for:", email);

    // Add to Resend audience if ID is provided
    const audienceId = Deno.env.get("RESEND_AUDIENCE_ID");
    if (audienceId) {
      try {
        await resend.contacts.create({
          email: email,
          firstName: name || undefined,
          audienceId: audienceId,
        });
        console.log("Contact added to audience successfully");
      } catch (audienceError) {
        console.error("Audience addition failed:", audienceError);
      }
    }

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Crafted <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Crafted - Your LinkedIn Guide is Here!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Welcome to Crafted${name ? `, ${name}` : ''}!</h1>
          
          <p>Thank you for joining our waitlist. We're excited to help you craft your magnetic LinkedIn leadership presence.</p>
          
          <p>Your guide "<strong>The 5 Principles for Magnetic LinkedIn Leadership</strong>" is attached to this email.</p>
          
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
      attachments: [
        {
          filename: "5-principles-magnetic-linkedin-leadership.pdf",
          path: "https://049dad50-564d-4a09-b33c-b8a4dc8c6474.lovableproject.com/guides/linkedin-guide.pdf",
        },
      ],
    });

    console.log("Email sent successfully:", emailResponse);
  } catch (error) {
    console.error("Background email task failed:", error);
  }
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

    // Start email process in background
    EdgeRuntime.waitUntil(sendWelcomeEmail(email, name));

    // Return immediate success response
    return new Response(
      JSON.stringify({ 
        ok: true, 
        message: "Successfully joined waitlist! Check your email for the guide." 
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
        message: "An error occurred while processing your request" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);