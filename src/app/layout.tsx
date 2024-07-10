import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

const links = [
  { label: "Home", href: "home" },
  { label: "T-Shirts", href: "t-shirts" },
  { label: "Jeans", href: "jeans" },
  { label: "Shoes", href: "shoes" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header links={links} title="Stoor" />
        {children}

        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
