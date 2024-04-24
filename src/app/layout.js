/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line camelcase
import { Work_Sans } from "next/font/google";
import Session from "@/components/dynamic/Session";
import { Toaster } from "react-hot-toast";
import Page from "@/components/dynamic/Page";

// eslint-disable-next-line camelcase
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work_sans",
});

export const metadata = {
  title: "DesignVerse UCR",
  description:
    "DesignVerse is the first ever 24-hour beginner-friendly Design-a-Thon hosted by the University of California, Riverside.",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <Page className={`${workSans.variable}`}>
        <Session session={session}>
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </Session>
      </Page>
    </html>
  );
}
