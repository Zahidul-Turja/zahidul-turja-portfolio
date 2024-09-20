import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "@/app/styles/globals.css";
import StarsCanvas from "./_components/StarsCanvas";
import Navbar from "./_components/Navbar";
import InitialAnimation from "./_components/InitialAnimation";
import Footer from "./_components/sections/Footer";

// const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Turja | Programmer",
  description:
    "Prortfolio of a Fullstack webdeveloper named Zahidul Islam Turja. A fullstack Software Engineer with experience in Websites and Mobile Application Development. Available for projects and collaborations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/z-logo-circle.svg" sizes="any" />
      </head>
      <body
        className={`${urbanist.className} min-h-screen overflow-x-hidden overflow-y-scroll bg-primary-950 text-primary-100 antialiased`}
      >
        <InitialAnimation />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
