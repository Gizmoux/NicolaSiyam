import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NS Studio Web",
  description: "Conception de site webs en freelance",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full overflow-x-hidden`}>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
