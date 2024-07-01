import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import StarsCanvas from "./_components/StarsCanvas";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Turja | Webdeveloper",
  description: "Fullstack webdeveloper's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-primary-950 text-primary-100 min-h-screen overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
