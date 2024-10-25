import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Global/Footer";
import styles from "./layout.module.css";
// import Header from "../components/Global/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Eastern Post",
  description: "Buy the book today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
      {/*<Header />*/}
      <main className={styles.content}>
          {children}
          </main>
      <Footer />
      </body>
    </html>
  );
}
