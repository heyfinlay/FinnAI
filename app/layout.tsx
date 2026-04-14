import type { Metadata } from "next";
import { LeadFlowProvider } from "@/components/lead-flow/LeadFlowProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinnAI | Independent AI Strategy & Advisory",
  description:
    "Independent AI diagnostics and founder-led advisory for service businesses that want workflow clarity before buying more software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LeadFlowProvider>{children}</LeadFlowProvider>
      </body>
    </html>
  );
}
