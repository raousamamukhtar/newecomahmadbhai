
import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "@/components/shared/Wrapper";
import Footer from "@/components/views/Footer";

import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "@/components/utils/ReduxProvider";
import Navbar from "@/components/views/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce shopping App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            <Wrapper>
              <Navbar />
              {children}
              <Footer />
            </Wrapper>
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
