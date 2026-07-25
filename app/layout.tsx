import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ordnance Survey Cloud",
    template: "%s | Ordnance Survey Cloud",
  },
  description:
    "High-precision vector and raster tiles for logistics infrastructure. 99.9% uptime SLA.",
  openGraph: {
    title: "Ordnance Survey Cloud",
    description:
      "High-precision vector and raster tiles for logistics infrastructure. 99.9% uptime SLA.",
    url: "https://ordnancesurvey.cloud",
    siteName: "Ordnance Survey Cloud",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
