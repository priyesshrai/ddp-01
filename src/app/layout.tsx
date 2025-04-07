import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prashant Prajapati",
  description: "Prashant Prajapati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
