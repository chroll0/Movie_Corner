import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovieCorner",
  description: "Everything about movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="icon.png" />
      <body>{children}</body>
    </html>
  );
}
