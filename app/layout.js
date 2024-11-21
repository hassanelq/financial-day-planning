import "./globals.css";
import { Montserrat } from "next/font/google";
import ogImage from "../public/ogImage.png";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Financial Day - 4th Edition",
  description:
    "Les Nouveaux Horizons de La Finance : Tendances, Technologies et Opportunités de Marché",
  metadataBase: new URL("https://finday4.vercel.app/"),

  openGraph: {
    type: "website",
    url: "https://finday4.vercel.app/",
    title: "Financial Day - 4th Edition",
    description:
      "Les Nouveaux Horizons de La Finance : Tendances, Technologies et Opportunités de Marché",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Financial Day - 4th Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Day - 4th Edition",
    description:
      "Les Nouveaux Horizons de La Finance : Tendances, Technologies et Opportunités de Marché",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Financial Day - 4th Edition",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
