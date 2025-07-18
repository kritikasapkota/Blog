import { Geist, Geist_Mono } from "next/font/google";
<<<<<<< HEAD
import "./globals.css";
=======
// import "./globals.css";
>>>>>>> e9bdf03c88d8adaa55ff3d8aa80dc76b92642099

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
<<<<<<< HEAD
  title: "My Blogs",
  description: "This are my blogs",
=======
  title: "Kathmandu Food Delivery",
  description: "Order food online from top restaurants in Kathmandu",
>>>>>>> e9bdf03c88d8adaa55ff3d8aa80dc76b92642099
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
