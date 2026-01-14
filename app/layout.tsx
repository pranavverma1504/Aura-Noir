import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Correct import for Google Fonts in Next.js
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    metadataBase: new URL("https://aura-noir.vercel.app"),
    title: "Aura Noir | Essence of Desire",
    description: "Discover Aura Noir, the ultra-luxury pheromone perfume brand. Crafted in Grasse, France, designed to ignite attraction and embody mystery.",
    keywords: "perfume, pheromone, luxury fragrance, cologne, Aura Noir, scent",
    openGraph: {
        title: "Aura Noir | Essence of Desire",
        description: "Experience the allure of Aura Noir. Premium pheromone perfumes for the bold and mysterious.",
        type: "website",
        locale: "en_US",
        siteName: "Aura Noir",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
