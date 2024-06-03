"use client";
import { useEffect, useRef } from "react";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

//Components
import Header from "@/components/Header";
import Flashlight from "@/components/Flashlight";
import BurgetMenu from "@/components/BurgerMenu";

//scripts
import flashlightEffect from "@/scripts/flashlightEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flashlightRef = useRef(null);
  useEffect(() => {
    // const flashlightNode: unknown = flashlightRef.current;
    // flashlightEffect(flashlightNode as HTMLDivElement);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Flashlight node={flashlightRef} /> */}
        <BurgetMenu />
      </body>
    </html>
  );
}
