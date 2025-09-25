import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function generateTeamMemberEmailHTML(name: string, companyName: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Crafted</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
        <div style="background-color: #ffffff; margin: 0 auto; padding: 20px 0 48px; margin-bottom: 64px; border-radius: 16px; max-width: 600px; box-shadow: 0 4px 12px rgba(21, 125, 200, 0.05);">
          <div style="padding: 32px 20px 0; text-align: center;">
            <div style="color: #157dc8; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: -0.06em;">Crafted</div>
          </div>
          
          <h1 style="color: #333; font-size: 28px; font-weight: 800; margin: 32px 20px 16px; text-align: center; letter-spacing: -0.05em;">
            Welcome to Crafted
          </h1>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            Hi ${name},
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 16px 20px; font-weight: 400;">
            Great news! Your company <strong>${companyName}</strong> has set you up with access to our AI-powered LinkedIn content creation agent.
          </p>
          
          <div style="background-color: #f8fafc; border-left: 4px solid #157dc8; margin: 24px 20px; padding: 20px; border-radius: 0 8px 8px 0;">
            <h2 style="color: #333; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">How to Get Started:</h2>
            <h3 style="color: #157dc8; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">Text Our WhatsApp Agent</h3>
            <p style="color: #555; font-size: 16px; line-height: 26px; margin: 0 0 16px 0;">
              WhatsApp Number: <a href="https://wa.me/351960482999" style="color: #157dc8; text-decoration: none; font-weight: 600;">+351960482999</a>
            </p>
          </div>
          
          <div style="margin: 24px 20px;">
            <h3 style="color: #333; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">How it works:</h3>
            <ol style="color: #555; font-size: 16px; line-height: 26px; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Send a voice message or text describing your LinkedIn post idea</li>
              <li style="margin-bottom: 8px;">Our AI agent will create professional, engaging content for you</li>
              <li style="margin-bottom: 8px;">Review, edit if needed, and post to LinkedIn</li>
            </ol>
          </div>
          
          <div style="background-color: #fff7ed; border: 1px solid #fed7aa; margin: 24px 20px; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">💡 Tips for Best Results:</h3>
            <ul style="color: #555; font-size: 14px; line-height: 24px; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 6px;">Be specific about your post topic or message</li>
              <li style="margin-bottom: 6px;">Mention your target audience if relevant</li>
              <li style="margin-bottom: 6px;">Include any key points you want to highlight</li>
              <li style="margin-bottom: 6px;">Feel free to ask for different tones (professional, casual, thought-provoking, etc.)</li>
            </ul>
            <p style="color: #555; font-size: 14px; line-height: 24px; margin: 12px 0 0 0; font-style: italic;">
              Example: "Hi! I want to write a post about the importance of team collaboration in remote work. Make it engaging and include a question to encourage comments."
            </p>
          </div>
          
          <p style="color: #555; font-size: 16px; line-height: 26px; margin: 24px 20px; font-weight: 400;">
            If you have any questions or need help getting started, don't hesitate to reach out!
          </p>
          
          <p style="color: #666; font-size: 14px; line-height: 24px; margin: 32px 20px 0; font-weight: 400;">
            Have a great day,<br />
            The Crafted Team
          </p>
        </div>
      </body>
    </html>
  `;
}

async function sendTeamMemberWelcomeEmail(email: string, name: string, companyName: string) {
  try {
    console.log("=== Starting team member welcome email process ===");
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Company:", companyName);

    // Generate email HTML
    const emailHtml = generateTeamMemberEmailHTML(name, companyName);

    // Send email
    console.log("Sending team member welcome email...");
    const emailResponse = await resend.emails.send({
      from: "Crafted <welcome@noreply.gocrafted.com>",
      to: [email],
      subject: "Welcome to Crafted",
      html: emailHtml,
    });

    console.log("✅ Team member welcome email sent successfully:", JSON.stringify(emailResponse, null, 2));
    console.log("=== Email process completed ===");
  } catch (error: any) {
    console.error("❌ Team member welcome email failed:");
    console.error("Error message:", error?.message);
    console.error("Error status:", error?.status);
    console.error("Full error details:", JSON.stringify(error, null, 2));
    throw error;
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    console.log("=== Team Member Welcome Email Function Called ===");
    console.log("Request method:", req.method);
    console.log("Request headers:", Object.fromEntries(req.headers.entries()));

    const { email, name, companyName } = await req.json();
    
    console.log("Received data:", { email, name, companyName });

    if (!email || !name || !companyName) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields: email, name, and companyName are required" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    await sendTeamMemberWelcomeEmail(email, name, companyName);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Team member welcome email sent successfully" 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error: any) {
    console.error("❌ Function error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send team member welcome email",
        details: error?.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
};

serve(handler);
