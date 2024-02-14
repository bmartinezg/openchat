import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "OpenChat: Accede a chats de WhatsApp sin guardar contactos",
  description:
    "OpenChat te permite acceder a tus chats de WhatsApp sin necesidad de guardar los contactos previamente. Una herramienta útil para una experiencia más eficiente.",
  authors: {
    name: "Bruno Martínez González",
  },
  keywords: [
    "OpenChat",
    "WhatsApp",
    "chat sin guardar contactos",
    "utilidades de redes sociales",
    "redes sociales",
    "utilidades",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
