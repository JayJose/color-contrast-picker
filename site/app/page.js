"use client";
import { useEffect, useState } from "react";

// styling
import { Inter } from "next/font/google";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

// custom components
import MyForm from "./components/Form";
import MyTable from "./components/Table";

// helper functions
import postData from "./lib/postData";

// sample data
import sampleData from "./example.json";

export default function Home() {
  const [data, setData] = useState(sampleData);

  const url = "http://localhost:8000/api/v0/picks/combos";
  // useEffect(() => {
  //   console.log("running useEffect");
  //   postData(url, ["#FFFFFF", "#000000", "#FFF000"], setData);
  // }, []);

  return (
    <>
      <MyForm setData={setData} />
      <MyTable data={data} />
    </>
  );
}
