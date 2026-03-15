import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temporary Utopia | AI Efficiency Audit",
  description:
    "Temporary Utopia helps business owners cut repetitive work, reduce admin drag, and adopt AI systems with practical clarity.",
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
