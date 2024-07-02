import Navbar from "@/components/Navbar";
import { dbConnect } from "@/db_services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Find your Eevents",
  description: "Generated by Hasan U Khan",
};

export default async function RootLayout({ children }) {

  await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
