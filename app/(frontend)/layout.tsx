import "../../styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
            <link rel="stylesheet" href="/global.css" />
         </head>
         <body>
            <Navbar />
            <div className="py-4 px-6 mx-auto lg:w-3/4 md:w-5/6 mt-[64px] md:mt-[104px]">
               {children}
            </div>
            <Footer />
         </body>
      </html>
   )
}
