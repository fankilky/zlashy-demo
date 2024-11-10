'use client';
import "./globals.css";
import Header from "@/components/header";
import { Noto_Sans } from 'next/font/google';

const Noto_Sans_init = Noto_Sans({
  subsets: ['latin'],
  variable: "--font-noto-sans",
  weight: ["400" , "700", "900"],
});


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${Noto_Sans_init.variable} relative overflow-x-hidden noto-sans`} >
          <Header />
          {children}
        </body>
      </html>
  );
}
