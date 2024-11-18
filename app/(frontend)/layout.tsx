import "../../styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: {
      template: "%s | A.S.D. Valera",
      default: 'A.S.D. Valera',
   },
   description: 'Sito ufficiale della A.S.D. Valera Calcio',
   keywords: 'Valera, Calcio, A.S.D., A.S.D. Valera, A.S.D. Valera Calcio',
   metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
}


export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="it">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            {/* <link rel="stylesheet" href="/globals.css" /> */}
            <meta name="author" content="Lorenzo Raia" />
         </head>
         <body>
            <Navbar />
            <div className="py-4 px-6 mx-auto lg:w-4/5 md:w-5/6 mt-[64px] md:mt-[104px]">
               {children}
            </div>
            <Footer />
         </body>
      </html>
   )
}
