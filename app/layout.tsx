import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finlay Sturzaker | Independent AI Advisory",
  description:
    "Independent AI advisory for founders who want practical sequencing before they buy software or commit to implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
