import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "VP Agency",
  description: "Simple concept website from Figma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="smooth-scroll">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
