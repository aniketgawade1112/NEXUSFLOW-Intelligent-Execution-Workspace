import { serve } from "std/http";

serve(async (req) => {
  const body = await req.json();

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "NexusFlow <onboarding@resend.dev>",
      to: ["you@example.com"],
      subject: `Important Task: ${body.title}`,
      html: `<h2>${body.title}</h2>
             <p>Priority: ${body.priority}</p>
             <p>Category: ${body.category}</p>`,
    }),
  });

  return new Response(await res.text(), {
    headers: { "Content-Type": "application/json" },
  });
});
