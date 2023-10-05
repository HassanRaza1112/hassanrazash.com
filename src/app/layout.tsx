import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassan Raza | Personal Portfolio",
  description: "Hassan Raza is a Houston, Texas based full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-[5000px] bg-gray-50 text-gray-950`}
      >
        <div
          className="
            bg-[#fbe2e3] absolute top-[-6rem] right-[6rem]
              h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
              sm:w-[68.75rem] z-10"
        ></div>
        <div
          className="
              bg-[#dbd7fb] absolute top-[-6rem] right-[11rem]
                h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
                sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
                xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
