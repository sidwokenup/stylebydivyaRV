import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
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
        url: "/og-image.jpg",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StyleByDivya",
    url: "https://stylebydivya.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://stylebydivya.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3WWZP795L0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3WWZP795L0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
