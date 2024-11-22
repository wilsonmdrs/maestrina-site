import "./globals.css";
import type { Metadata } from "next";
import { Fahkwang } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maestrina",
  description: "Orchestrating Business Success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <script
          defer
          data-site="wwww.maestrina.pt"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/logos/logo-maestrina.svg" type="svg" />
      </head>
      <body className={fahkwang.className}>
        <Layout>
          {children}
          {/* <FixedPlugin /> Add Chat Icon in the future */}
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
