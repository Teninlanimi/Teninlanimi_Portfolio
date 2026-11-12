import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], weight: ["500", "700"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Teninlanimi Faith Olajide | ML Engineer",
  description:
    "Machine learning engineer building ranking, NLP and forecasting models in Python, with a focus on honest evaluation.",
  openGraph: {
    title: "Teninlanimi Faith Olajide | ML Engineer",
    description: "Ranking, NLP and forecasting models that hold up on real data.",
    images: ["/avatar.webp"],
  },
  icons: { icon: "/avatar.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
