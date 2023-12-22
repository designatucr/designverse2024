/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line camelcase
import { Work_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

// eslint-disable-next-line camelcase
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work_sans",
});

export default function RootLayout({ children, session }) {
  const color = RegExp(/\/form\//).test(usePathname())
    ? "bg-design-white"
    : "bg-design-green-100";
  return (
    <html lang="en" className="h-full">
      <body
        className={`${workSans.variable} flex flex-col lg:flex-row ${color} h-full w-full`}
      >
        <SessionProvider
          session={session}
          refetchInterval={5 * 60}
          className="h-full"
        >
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
