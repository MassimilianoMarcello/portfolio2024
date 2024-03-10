"use client";
import { Global } from "@emotion/react";
import globalStyles from "@/app/global_emotion_styles";
import { ThemeProvider } from "@emotion/react";
import "./page.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import PreFooter from "@/components/PreFooter/PreFooter";

const theme = {
  fonts: {
    body: "'Protest Guerrilla', sans-serif",
    heading: "'Protest Guerrilla', sans-serif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&family=Protest+Strike&family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <NavBar />

          {children}

          <PreFooter />
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
