import { Archivo, Instrument_Serif, Yellowtail } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
});

export const metadata = {
  title: {
    default: "Zona Strings | Hand-cut Ankara fabric portraits by Echezona Ogudu",
    template: "%s | Zona Strings",
  },
  description:
    "Echezona Ogudu (Zona Strings) is an award-winning artist who builds portraits entirely from hand-cut Ankara fabric. See the work and commission a piece.",
  openGraph: {
    title: "Zona Strings",
    description: "Portraits made from hand-cut Ankara fabric by Echezona Ogudu.",
    images: ["/work/tupac.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${yellowtail.variable}`}
    >
      <body className="weave">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
