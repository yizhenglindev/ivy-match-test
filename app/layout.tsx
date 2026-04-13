import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivy Match Test",
  description: "Find your best-fit Ivy League school by quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="app-shell mx-auto min-h-screen w-full max-w-4xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
