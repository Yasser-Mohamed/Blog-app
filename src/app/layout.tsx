"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProviders } from "@/components/provider/ThemeProviders";
import Navbar from "@/components/navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yascoblog",
  description:
    "Yasco create this website use nextJS, Chakra-UI, Tailwindcss and React-Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col gap-4">
              <Navbar />
              {children}
            </div>
          </QueryClientProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
