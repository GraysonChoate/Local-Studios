import type { Metadata } from "next";
import { Manrope, Fraunces, Caveat } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const siteUrl = "https://www.localstudios.co";
const description =
  "A St. Petersburg Lagree studio where full-body movement, real strength, and genuine community meet.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Local Studios | Movement Meets Community",
  description,
  icons: {
    icon: "/local-logo-midnight.webp",
    shortcut: "/local-logo-midnight.webp",
  },
  openGraph: {
    title: "Local Studios | Movement Meets Community",
    description,
    images: [{ url: "/og.jpg", width: 1600, height: 900 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Studios | Movement Meets Community",
    description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
