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
        <title>Your LinkedIn Essentials one-pager</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
        <div style="background-color: #ffffff; margin: 0 auto; padding: 20px 0 48px; margin-bottom: 64px; border-radius: 16px; max-width: 600px; box-shadow: 0 4px 12px rgba(21, 125, 200, 0.05);">
          <div style="padding: 32px 20px 0; text-align: center;">
            <div style="color: #157dc8; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: -0.06em;">Crafted</div>
          </div>
          
          <h1 style="color: #333; font-size: 28px; font-weight: 800; margin: 32px 20px 16px; text-align: center; letter-spacing: -0.05em;">
            Your LinkedIn Essentials one-pager
          </h1>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            ${name ? `Hi ${name},` : 'Hi there,'}
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            Thanks for joining our waitlist!
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            As promised, here's your copy of our LinkedIn Essentials one-pager - the same core teachings our clients are using to get results on LinkedIn.
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            Ready to put these principles into action?
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            Book a demo to meet our founder and find out how he used them to generate 10 million views in just 3 months, without a single ad.
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            If you're looking to grow B2B revenue or hire through LinkedIn, our mentoring program is probably a great fit.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://calendly.com/underdogfounders/30min" 
               style="background-color: #157dc8; border-radius: 8px; color: #fff; font-size: 16px; font-weight: 600; text-decoration: none; text-align: center; display: inline-block; padding: 12px 24px; margin: 0 auto; font-family: 'Inter', sans-serif;">
              Book a Demo
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px; line-height: 24px; margin: 32px 20px 0; font-weight: 400;">
            Have a cool week,<br />
            João and Pedro
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
    console.log("=== Starting email process ===");
    console.log("Email:", email);
    console.log("Name:", name || "Not provided");
    console.log("RESEND_API_KEY exists:", !!Deno.env.get("RESEND_API_KEY"));
    console.log("RESEND_AUDIENCE_ID exists:", !!Deno.env.get("RESEND_AUDIENCE_ID"));

    // Add to Resend audience if ID is provided
    const audienceId = Deno.env.get("RESEND_AUDIENCE_ID");
    console.log("Audience ID value:", audienceId);
    
    if (audienceId) {
      console.log("Attempting to add contact to Resend audience...");
      try {
        // Use direct HTTP API call with correct endpoint format
        const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            firstName: name || undefined,
            unsubscribed: false,
          }),
        });

        const audienceResponse = await response.json();
        
        if (response.ok) {
          console.log("✅ Contact added to audience successfully:", JSON.stringify(audienceResponse, null, 2));
        } else {
          console.error("❌ Audience addition failed:", JSON.stringify(audienceResponse, null, 2));
        }
      } catch (audienceError: any) {
        console.error("❌ Audience addition failed:");
        console.error("Error message:", audienceError?.message);
        console.error("Error status:", audienceError?.status);
        console.error("Error details:", JSON.stringify(audienceError, null, 2));
        
        // Check if it's a duplicate contact error
        if (audienceError?.message?.includes("already exists") || audienceError?.message?.includes("duplicate")) {
          console.log("ℹ️ Contact already exists in audience - this is expected for repeat submissions");
        }
      }
    } else {
      console.log("⚠️ No audience ID provided, skipping audience addition");
    }

    // Generate email HTML
    const emailHtml = generateEmailHTML(name);

    // Send email
    console.log("Sending welcome email...");
    const emailResponse = await resend.emails.send({
      from: "Crafted <welcome@noreply.gocrafted.com>",
      to: [email],
      subject: "Your LinkedIn Essentials one-pager",
      html: emailHtml,
      attachments: [
        {
          filename: "Crafted - Lead Magnet.pdf",
          path: "https://ignite-lead-drive.vercel.app/guides/Crafted%20-%20Lead%20Magnet.pdf",
        },
      ],
    });

    console.log("✅ Email sent successfully:", JSON.stringify(emailResponse, null, 2));
    console.log("=== Email process completed ===");
  } catch (error: any) {
    console.error("❌ Background email task failed:");
    console.error("Error message:", error?.message);
    console.error("Error status:", error?.status);
    console.error("Full error details:", JSON.stringify(error, null, 2));
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