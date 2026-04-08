import { NextRequest, NextResponse } from "next/server";

const CRM_COOKIE = "finnai_crm_auth";
const CRM_PASSWORD = process.env.CRM_ACCESS_PASSWORD;

function unauthorizedResponse() {
  return new NextResponse(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CRM Access</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #0b1020;
        color: #f5f7fb;
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      }
      .card {
        width: min(92vw, 420px);
        padding: 28px;
        border: 1px solid rgba(255,255,255,.12);
        border-radius: 20px;
        background: rgba(15, 23, 42, .92);
        box-shadow: 0 20px 60px rgba(0,0,0,.35);
      }
      h1 { margin: 0 0 8px; font-size: 1.5rem; }
      p { margin: 0 0 18px; color: #b9c2d0; line-height: 1.5; }
      input {
        width: 100%; box-sizing: border-box; padding: 14px 16px; border-radius: 12px;
        border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); color: white;
        margin-bottom: 12px;
      }
      button {
        width: 100%; padding: 14px 16px; border: 0; border-radius: 12px;
        background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; font-weight: 600; cursor: pointer;
      }
      .error { color: #fca5a5; margin-bottom: 12px; min-height: 1.25rem; }
      .hint { margin-top: 12px; font-size: .9rem; color: #94a3b8; }
    </style>
  </head>
  <body>
    <form class="card" method="POST" action="/crm-login">
      <h1>CRM access</h1>
      <p>This area is private. Enter the access password to continue.</p>
      <div class="error"></div>
      <input type="password" name="password" placeholder="Password" autocomplete="current-password" required />
      <button type="submit">Enter CRM</button>
      <div class="hint">Protected by simple middleware auth.</div>
    </form>
  </body>
</html>`,
    {
      status: 401,
      headers: { "content-type": "text/html; charset=utf-8" },
    }
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/crm-login") {
    if (request.method !== "POST") {
      return unauthorizedResponse();
    }

    const formDataPromise = request.formData();
    return formDataPromise.then((formData) => {
      const password = String(formData.get("password") ?? "");

      if (!CRM_PASSWORD || password !== CRM_PASSWORD) {
        return unauthorizedResponse();
      }

      const response = NextResponse.redirect(new URL("/crm", request.url));
      response.cookies.set(CRM_COOKIE, CRM_PASSWORD, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 12,
      });
      return response;
    });
  }

  if (pathname.startsWith("/crm")) {
    if (!CRM_PASSWORD) {
      return new NextResponse("CRM_ACCESS_PASSWORD is not configured.", { status: 500 });
    }

    const cookie = request.cookies.get(CRM_COOKIE)?.value;
    if (cookie !== CRM_PASSWORD) {
      return unauthorizedResponse();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/crm", "/crm/:path*", "/crm-login"],
};
