import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll";
import Footer from "@/components/common/Footer";
import Providers from "./Providers";

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

// const fontHeading = Roboto_Condensed({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "800"],
//   variable: "--font-heading",
// });

// const fontHeading = Oswald({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-heading",
// });

const fontBody = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

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
        <Providers>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
