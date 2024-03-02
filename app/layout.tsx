import { AOSInit } from "./aos";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export const metadata: Metadata = {
  title: "XStorage",
  description: "XStorage Data Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <Navbar />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
