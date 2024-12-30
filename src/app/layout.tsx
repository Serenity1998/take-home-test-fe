import type { Metadata } from "next";
import "@/assets/styles/globals.scss";
import Provider from "@/store/Provider";

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
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
