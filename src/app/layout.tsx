import type { Metadata } from "next";
import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
  title: "Todo app",
  description: "Fullstack take home test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
