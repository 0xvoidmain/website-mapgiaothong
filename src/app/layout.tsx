import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./App.scss";
import AppShellWrapper from "@/components/wrapper";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trường Đại Học Giao Thông Vận Tải",
  description: "Trung tâm tư vấn Phát triển giao thông vận tải",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/assets/images/LogoUTC.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AppShellWrapper>{children}</AppShellWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
