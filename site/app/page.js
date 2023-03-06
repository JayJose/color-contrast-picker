"use client";

import { useEffect, useState } from "react";

import { Inter } from "next/font/google";
import styles from "./page.module.css";

import postData from "./lib/postData";
import getData from "./lib/getData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);

  const url = "http://localhost:8000/api/v0/picks/combos";
  useEffect(() => {
    console.log("running useEffect");
    postData(url, ["#FFFFFF", "#000000"], setData);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p className={inter.className}>Contrast Color Picker</p>
      </div>
    </main>
  );
}
