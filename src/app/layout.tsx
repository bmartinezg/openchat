import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "OpenWaChat: Accede a chats de WhatsApp sin guardar contactos",
  description:
    "OpenChat te permite acceder a tus chats de WhatsApp sin necesidad de guardar los contactos previamente. Una herramienta útil para una experiencia más eficiente.",
  keywords: [
    "OpenChat",
    "WhatsApp",
    "chat sin guardar contactos",
    "utilidades de redes sociales",
    "redes sociales",
    "utilidades",
  ],
  robots: "index, follow",
  manifest: "/manifest.json",
  authors: {
    name: "Bruno Martínez",
    url: "https://www.linkedin.com/in/brunomartinezgonza/",
  },
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-152x152.png" },
    { rel: "icon", url: "icons/icon-152x152.png" },
  ],
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
