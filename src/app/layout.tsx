import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio Ricardo Tavares",
  description: "Portfólio do Ricardo Tavares",
};

export const viewport = {
  initialScale: 1.0,
  width: "device-width"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-primary-color text-font-color text-center">
        {children}
        <Footer />
      </body>
    </html>
  );
}
