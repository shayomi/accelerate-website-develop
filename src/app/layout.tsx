import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import { geograph } from "./fonts";
import "./globals.scss";
import Nav from "@/components/custom/navbar/Nav";
import Footer from "@/components/custom/footer/Footer";
import QueryProvider from "@/providers/queryProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://acceler8.africa/"),
  title: {
    default: "Accelerate Africa",
    template: "%s | Accelerate Africa",
  },
  description:
    "We accelerate Africa’s bold and visionary founders in the earliest stages of building global businesses that solve Africa’s biggest challenges.",
  keywords: [
    "Accelerate Africa",
    "Accelerate",
    "Africa",
    "Startups",
    "VC",
    "Venture Capital",
    "Investment",
    "Investors",
    "Founders",
    "Entrepreneurs",
    "Fundraising",
    "Innovation",
    "Africa's Challenges",
    "YC of Africa",
  ],
  authors: [{ name: "Ismail Olasunkanmi" }],
  openGraph: {
    title: "Accelerate Africa",
    description:
      "We accelerate Africa’s bold and visionary founders in the earliest stages of building global businesses that solve Africa’s biggest challenges.",
    type: "website",
    // @ts-ignore
    local: "en_US",
    siteName: "Accelerate Africa",
  },
  twitter: {
    title: "Accelerate Africa",
    description:
      "We accelerate Africa’s bold and visionary founders in the earliest stages of building global businesses that solve Africa’s biggest challenges.",
    site: "Accelerate Africa",
    // @ts-ignore
    cardType: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geograph.className}>
        <QueryProvider>
          <Nav />

          <main>{children}</main>

          <Footer />
        </QueryProvider>

        <Toaster richColors closeButton theme="light" />
      </body>
    </html>
  );
}
