import { Inter } from "next/font/google";
import "./globals.css";
import Header  from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
const inter=Inter({subsets:["latin"]})
import {Toaster} from "sonner"

export const metadata = {
  title: "Welth",
  description: "Manage your finances, Your way",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/*header*/}
        <Header/>
        <main className="min-h-screen"> {children}</main>
       <Toaster richColors/>
        {/*footer*/}
        <footer className="bg-blue-50 py-12">
           <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            Made by: Arpita Agrawal
          </p>
        </div>
        </footer>
       
      </body>
    </html>
        </ClerkProvider>

  );
}
