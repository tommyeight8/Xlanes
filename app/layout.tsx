import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron } from "next/font/google";
import Navbar from "@/components/Navbar";
import FullNavbar from "@/components/FullNavbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500"], // or 700 for thicker
  variable: "--font-neon-outline",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XLanes LA | Bowling, Arcade, Karaoke & More in Downtown Los Angeles",
  description:
    "Experience bowling, karaoke, arcade games, billiards, and a full bar at XLanes LA – the ultimate entertainment destination in Little Tokyo Galleria, Downtown LA.",
  keywords: [
    "XLanes LA",
    "Los Angeles bowling",
    "Downtown LA arcade",
    "karaoke rooms LA",
    "Little Tokyo bowling",
    "XLanes karaoke",
    "billiards Downtown LA",
    "LA entertainment venue",
    "party venue LA",
    "XLanes Los Angeles",
  ],
  authors: [{ name: "XLanes LA" }],
  openGraph: {
    title: "XLanes LA | Bowling, Arcade, Karaoke & More",
    description:
      "Host your next night out at XLanes LA with bowling, arcade games, karaoke rooms, billiards, and food & drinks in Downtown Los Angeles.",
    url: "https://xlanesla.com",
    siteName: "XLanes LA",
    type: "website",
    images: [
      {
        url: "https://xlanesla.com/images/home-slider1.jpg", // example – replace with actual image
        width: 1200,
        height: 630,
        alt: "XLanes LA Bowling and Arcade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XLanes LA | Bowling, Arcade & Karaoke in DTLA",
    description:
      "Enjoy bowling, billiards, arcade games, karaoke, and a full bar at XLanes LA in Downtown Los Angeles.",
    images: ["https://xlanesla.com/images/home-slider1.jpg"], // example
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Playwrite DK Loopet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+DK+Loopet:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-black scroll-smooth`}
      >
        {/* <Navbar /> */}
        <FullNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
