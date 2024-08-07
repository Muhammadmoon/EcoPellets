import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import CartIcon from "@/components/CartIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecopellets",
  description: "Generated by Moon Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
       
        {children}

        <CartIcon/>
        <Contact />
      </body>
    </html>
  );
}
