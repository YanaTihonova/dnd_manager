import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roll For Initiative",
  description: "Education application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="amber" grayColor="sand">
          {children}
        </Theme>
      </body>
    </html>
  );
}
