import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
            colorText: "#000000",
            colorPrimary: "#000000",
            colorBackground: "#ffffff",
            colorInputBackground: "#ECF2FF",
            colorInputText: "#000000",
          },
        }}
      >
        <body>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
