import RooterLayout from "@/components/layout/RooterLayout";
import "./globals.css";

import { Poppins } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "600", "800"],
});

export const metadata = {
  title: "DLAN STUDIO",
  description: "Created by DLAN STUDIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>
        <NavigationBar />
        <RooterLayout>{children}</RooterLayout>
      </body>
    </html>
  );
}
