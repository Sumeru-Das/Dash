import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dash",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
          },
          variables: {
            colorText: "#043F2E",
            colorPrimary: "#043F2E",
            colorBackground: "#C8F169",
            colorInputBackground: "#C8F169",
            colorInputText: "#043F2E",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2 text-[#043F2E]`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
