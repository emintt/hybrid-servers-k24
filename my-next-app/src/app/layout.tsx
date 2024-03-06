import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter fontt
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mun sivusto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={inter.className}>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Example Site
        </span>
      </div>
      <div className="lg:flex lg:items-center lg:w-auto justify-end">
        <ul className="flex">
          <li className="mr-4">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Home
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/profile"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Profile
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/upload"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Upload
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <div className="container mx-auto pt-4">{children}</div>
    </main>
  </body>
</html>
  );
}
