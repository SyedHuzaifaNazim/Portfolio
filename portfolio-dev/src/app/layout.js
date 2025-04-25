import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Preloader from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Huzaifa Nazim",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "Syed Huzaifa Nazim",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [
    {
      name: "Syed Huzaifa Nazim",
      url: "https://www.linkedin.com/in/syed-huzaifa-nazim-a861b727a",
    },
  ],
  creator: "Syed Huzaifa Nazim",
  publisher: "Syed Huzaifa Nazim",
  openGraph: {
    title: "Syed Huzaifa Nazim",
    description: "Web Developer Portfolio",
    url: "https://syedhuzaifanazim.vercel.app/",
    siteName: "Syed Huzaifa Nazim",
    images: [
      {
        url: "/images/WhatsApp Image 2024-03-02 at 1.43.27 AM.jpeg",
        width: 1200,
        height: 630,
        alt: "Syed Huzaifa Nazim - Web Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Huzaifa Nazim",
    description: "Web Developer Portfolio",
    images: ["/images/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: "no",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  appleWebApp: {
    capable: "yes",
    title: "Syed Huzaifa Nazim",
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
  applicationName: "Syed Huzaifa Nazim",
  referrer: "no-referrer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://syedhuzaifanazim.vercel.app/",
    languages: {
      "en-US": "https://syedhuzaifanazim.vercel.app/",
      "es-ES": "https://syedhuzaifanazim.vercel.app/es",
    },
  },
  description: "Syed Huzaifa Nazim - Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
