import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Header from "./header";
import Footer from "./footer";
import ContactInfo from "./components/contact";
import SplashScreen from "./splash";
import Body from "./body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SplashScreen>
          <Header />
          <Body>{children}</Body>
          <Footer />
          <div className="sticky w-full bottom-0 right-0 left-0 md:hidden">
            <ContactInfo />
          </div>
        </SplashScreen>
      </body>
    </html>
  );
}
