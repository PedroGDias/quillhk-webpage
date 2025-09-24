import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { render } from "npm:@react-email/render@0.0.12";
import GuideEmail from "../../src/emails/GuideEmail.tsx";

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

    // Render the React email component
    const emailHtml = await render(GuideEmail({ name }));

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