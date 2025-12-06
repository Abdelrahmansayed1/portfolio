import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelrahman Sayed | Software Engineer",
  description:
    "Full-stack software engineer specializing in React, TypeScript, Next.js, NestJS, and cloud technologies. Building scalable healthcare and rental platforms.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "NestJS",
    "Node.js",
  ],
  authors: [{ name: "Abdelrahman Sayed" }],
  openGraph: {
    title: "Abdelrahman Sayed | Software Engineer",
    description:
      "Full-stack software engineer building scalable web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
