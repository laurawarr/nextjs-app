import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import { NavBar } from "@/components/layout/NavBar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Info",
  description: "Find more information about countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <NavBar />
            <Box mt="70px">
              {children}
            </Box>
          </Providers>
        </body>
      </html>
  );
}
