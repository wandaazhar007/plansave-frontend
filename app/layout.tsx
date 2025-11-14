import type { Metadata } from "next";
import "./globals.css"; // later you can change to SCSS
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "PlanSave",
  description: "Manage dialysis and personal finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}