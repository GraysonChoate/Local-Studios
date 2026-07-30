import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "www.localstudios.co";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = `${protocol}://${host}`;
  const description =
    "A St. Petersburg Lagree studio where full-body movement, real strength, and genuine community meet.";

  return {
    metadataBase: new URL(origin),
    title: "Local Studios | Movement Meets Community",
    description,
    icons: {
      icon: "/local-logo-midnight.webp",
      shortcut: "/local-logo-midnight.webp",
    },
    openGraph: {
      title: "Local Studios | Movement Meets Community",
      description,
      images: [{ url: `${origin}/og.png`, width: 1680, height: 941 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Local Studios | Movement Meets Community",
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
