import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-body",
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Jamil Akhtar",
  description: "Creative Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
