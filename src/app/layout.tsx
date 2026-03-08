import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StyleByDivya – Elegant & Modern Women's Fashion",
    template: "%s | StyleByDivya",
  },
  description: "StyleByDivya offers premium women's fashion with modern elegance. Discover stylish outfits, designer collections, and timeless fashion crafted for confident women.",
  keywords: ["women fashion", "designer dresses", "indian fashion brand", "elegant dresses", "stylebydivya clothing"],
  metadataBase: new URL("https://stylebydivya.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StyleByDivya – Elegant & Modern Women's Fashion",
    description: "StyleByDivya offers premium women's fashion with modern elegance. Discover stylish outfits, designer collections, and timeless fashion crafted for confident women.",
    url: "https://stylebydivya.in",
    siteName: "StyleByDivya",
    images: [
      {
        url: "/assets/Logo/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "StyleByDivya Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StyleByDivya – Elegant & Modern Women's Fashion",
    description: "StyleByDivya offers premium women's fashion with modern elegance.",
    images: ["/og-image.jpg"], // Assuming default og-image for twitter too
  },
  icons: {
    icon: "/assets/Logo/faviconlogo.png",
    apple: "/apple-touch-icon.png", // Assuming existence or standard path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StyleByDivya",
    url: "https://stylebydivya.in",
    logo: "https://stylebydivya.in/logo.png",
    sameAs: [],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
