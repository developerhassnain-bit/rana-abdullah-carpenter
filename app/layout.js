import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Rana Abdullah — Professional Carpenter Lahore",
  description: "Expert furniture making, custom kitchen cabinets, door and wood repair, and bespoke woodwork across Lahore, Pakistan by Rana Abdullah.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 selection:bg-[#7a3f1b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
