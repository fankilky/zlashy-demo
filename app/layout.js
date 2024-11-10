'use client';
import "./globals.css";
import Header from "@/components/header";
import { Poppins } from 'next/font/google';

const Poppins_init = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["400" , "700", "900"],
});


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${Poppins_init.variable} relative overflow-x-hidden poppins`} >
          <Header />
          {children}
        </body>
      </html>
  );
}
