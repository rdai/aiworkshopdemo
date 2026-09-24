import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Media Collective | Free media resources",
  description: "Free media resources for churches, nonprofits, and community organizations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
