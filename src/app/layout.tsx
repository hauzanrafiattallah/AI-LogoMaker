import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI LogoMaker",
  description: "AI LogoMaker is a powerful tool for creating a logos with AI.",
  keywords: [
    "logo maker",
    "ai logo generator",
    "logo design",
    "brand identity",
    "graphic design",
    "logo creator",
    "free logo maker",
    "online logo maker",
    "logo design software",
    "create logo",
    "design logo",
    "logo generator",
    "logo maker online",
    "logo design online",
    "logo maker free",
    "logo creator online",
    "logo design free",
    "logo maker app",
    "logo maker software",
    "logo maker free online",
    "logo design app",
    "logo creator free",
    "logo design software free",
    "logo maker free download",
    "logo generator free",
    "logo maker download",
    "logo design maker",
    "logo maker free download",
    "logo creator free online",
    "logo maker and design",
    "logo maker and download",
    "logo maker and creator",
    "logo maker and generator",
    "logo maker and editor",
    "logo maker and design free",
    "logo maker and design online",
    "logo maker and design app",
    "logo maker and design software",
    "logo maker and design download",
    "logo maker and design free download",
    "logo maker and design free online",
    "logo maker and design free download",
    "logo maker and design free online",
  ],
  other: {
    "dicoding:email": "rafihauzan42@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${plusJakartaSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
