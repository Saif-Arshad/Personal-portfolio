import type { Metadata } from "next";
import { Poppins } from 'next/font/google'; // Import Poppins from Google
import "./globals.css";
import Header from "./_components/shared/header";
import Footer from "./_components/shared/footer";
import LenisInitializer from './_lib/LenisInitializer';
import { PageTransition } from "./_lib/changePage";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Saif Ur Rehman - Software Engineer",
  description: "A software engineer with a passion for creating incredible web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased bg-gray-900 text-white`}
      >
        <PageTransition>
          <div className="relative h-full min-h-screen">
            <div className="fixed bottom-0 z-0 font-poppins left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <Header />
            <LenisInitializer />
            <div className="pt-6 px-3 mx-auto z-50">
              {children}
            </div>
            <Footer />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
