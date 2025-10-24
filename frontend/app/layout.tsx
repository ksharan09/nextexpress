import type { Metadata } from "next";
// 1. Import 'Poppins' instead of 'Inter'
import { Poppins } from "next/font/google";
import "./globals.css";

// 2. Initialize 'Poppins'. We can also add weights.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // '400' is regular, '700' is bold
});

export const metadata: Metadata = {
  title: "Course Management System",
  description: "Landing page for CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the new 'poppins.className' here */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}