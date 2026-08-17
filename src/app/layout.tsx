import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eternalprincess.com"),
  title: "The Eternal Princess | Welcome to the Realm",
  description:
    "Enter the Eternal Princess - a world of beauty, transformation, imagination, fashion, sensuality, ideas and becoming.",
  openGraph: {
    title: "The Eternal Princess | Welcome to the Realm",
    description:
      "Enter the Eternal Princess - a world of beauty, transformation, imagination, fashion, sensuality, ideas and becoming.",
    url: "https://eternalprincess.com",
    siteName: "The Eternal Princess",
    images: [
      {
        url: "/images/HeroPrincess.png",
        width: 1200,
        height: 630,
        alt: "The Eternal Princess in a twilight realm.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Eternal Princess | Welcome to the Realm",
    description:
      "Enter the Eternal Princess - a world of beauty, transformation, imagination, fashion, sensuality, ideas and becoming.",
    images: ["/images/HeroPrincess.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
