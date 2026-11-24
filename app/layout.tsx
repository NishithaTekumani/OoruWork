import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OoruWork | Local work by skill",
  description: "A worker shouldn't need a resume to find work. Find nearby opportunities or hire practical skills with OoruWork.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
