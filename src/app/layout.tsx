import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Componentes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
