import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function generateEmailHTML(name?: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your LinkedIn guide is here! 🚀</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
        <div style="background-color: #ffffff; margin: 0 auto; padding: 20px 0 48px; margin-bottom: 64px; border-radius: 16px; max-width: 600px;">
          <div style="padding: 32px 20px 0; text-align: center;">
            <div style="color: #1d4ed8; font-size: 24px; font-weight: 700; margin: 0;">Crafted</div>
          </div>
          
          <h1 style="color: #333; font-size: 24px; font-weight: 700; margin: 32px 20px 16px; text-align: center;">
            Your LinkedIn guide is here! 🚀
          </h1>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px;">
            ${name ? `Hi ${name},` : 'Hi there,'}
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px;">
            Thanks for joining our waitlist! As promised, here's your copy of 
            "The 5 Principles for Magnetic LinkedIn Leadership" - the same framework 
            our clients use to transform their LinkedIn presence.
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px;">
            This guide reveals how industry leaders create compelling content that 
            attracts both clients and top talent, without spending hours writing posts.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://ignite-lead-drive.vercel.app/guides/crafted-5-principles.pdf" 
               style="background-color: #1d4ed8; border-radius: 8px; color: #fff; font-size: 16px; font-weight: 600; text-decoration: none; text-align: center; display: inline-block; padding: 12px 24px; margin: 0 auto;">
              Download Your Guide
            </a>
          </div>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px;">
            Ready to put these principles into action? Book a free strategy call 
            to see how Crafted can help you implement these strategies with our 
            AI-powered content system and 1:1 mentoring.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://calendly.com/underdogfounders/30min" 
               style="background-color: transparent; border: 2px solid #1d4ed8; border-radius: 8px; color: #1d4ed8; font-size: 16px; font-weight: 600; text-decoration: none; text-align: center; display: inline-block; padding: 10px 22px; margin: 0 auto;">
              Book a Free Strategy Call
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px; line-height: 24px; margin: 32px 20px 0;">
            Best regards,<br />
            The Crafted Team
          </p>
        </div>
      </body>
    </html>
  `;
}

interface JoinWaitlistRequest {
  name?: string;
  email: string;
}

async function sendWelcomeEmail(email: string, name?: string) {
  try {
    console.log("Starting email process for:", email);
    console.log("RESEND_API_KEY exists:", !!Deno.env.get("RESEND_API_KEY"));
    console.log("RESEND_AUDIENCE_ID exists:", !!Deno.env.get("RESEND_AUDIENCE_ID"));

    // Add to Resend audience if ID is provided
    const audienceId = Deno.env.get("RESEND_AUDIENCE_ID");
    console.log("Audience ID:", audienceId);
    if (audienceId) {
      try {
        const audienceResponse = await resend.contacts.create({
          email: email,
          firstName: name || undefined,
          audienceId: audienceId,
        });
        console.log("Contact added to audience successfully:", audienceResponse);
      } catch (audienceError) {
        console.error("Audience addition failed:", audienceError);
        console.error("Audience error details:", JSON.stringify(audienceError, null, 2));
      }
    } else {
      console.log("No audience ID provided, skipping audience addition");
    }

    // Generate email HTML
    const emailHtml = generateEmailHTML(name);

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Crafted <welcome@noreply.gocrafted.com>",
      to: [email],
      subject: "Welcome to Crafted - Your LinkedIn Guide is Here!",
      html: emailHtml,
      attachments: [
        {
          filename: "5-principles-magnetic-linkedin-leadership.pdf",
          path: "https://ignite-lead-drive.vercel.app/guides/crafted-5-principles.pdf",
        },
      ],
    });

    console.log("Email sent successfully:", emailResponse);
  } catch (error) {
    console.error("Background email task failed:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
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