import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Gym",
  description: "Rudra Gym offers modern equipment, a yoga and aerobics studio, spacious locker rooms, and a wellness area. With certified trainers and group classes, we provide a supportive and energetic environment to help you achieve your fitness goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" /> */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" />
        {children}
      </body>
    </html>
  );
}
