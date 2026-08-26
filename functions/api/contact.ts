interface Env { CONTACT_FORM_ENDPOINT?: string }
interface ContactContext { request: Request; env: Env }
interface ContactPayload { name: string; email: string; subject: string; message: string }

const jsonResponse = (body: object, status = 200, extraHeaders?: HeadersInit) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...extraHeaders },
});

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function onRequest(context: ContactContext): Promise<Response> {
  if (context.request.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed." }, 405, { Allow: "POST" });
  }

  const endpoint = context.env.CONTACT_FORM_ENDPOINT?.trim();
  if (!endpoint) return jsonResponse({ ok: false, error: "Contact service is unavailable." }, 503);

  let input: unknown;
  try {
    input = await context.request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  if (!input || typeof input !== "object") {
    return jsonResponse({ ok: false, error: "Invalid contact details." }, 400);
  }

  const record = input as Record<string, unknown>;
  const payload: ContactPayload = {
    name: typeof record.name === "string" ? record.name.trim() : "",
    email: typeof record.email === "string" ? record.email.trim() : "",
    subject: typeof record.subject === "string" ? record.subject.trim() : "",
    message: typeof record.message === "string" ? record.message.trim() : "",
  };

  if (!payload.name || !payload.email || !payload.message || !isValidEmail(payload.email)) {
    return jsonResponse({ ok: false, error: "Please provide a valid name, email, and message." }, 400);
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!upstream.ok) return jsonResponse({ ok: false, error: "Unable to send message." }, 502);
    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ ok: false, error: "Unable to send message." }, 502);
  }
}
