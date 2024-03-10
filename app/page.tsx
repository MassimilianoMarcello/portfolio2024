"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Global } from '@emotion/react'
import globalStyles from '@/app/global_emotion_styles';
import { ThemeProvider } from '@emotion/react'
import theme from '@/app/theme_emotion';
import styled from '@emotion/styled'
import MainPage from "@/components/Main_Page/MainPage";

export default function Home() {
  return (
    <main className={styles.main}>
       <ThemeProvider theme={theme}>

       <Global styles={globalStyles} />
  <MainPage/>
  
       </ThemeProvider>

    </main>
  );
}

// const Beduino = styled.h3`
//   background-color:${({ theme }) => theme.colors.blue};
//   font-size:${({ theme }) => theme.fontSize.heading1};;
// `
