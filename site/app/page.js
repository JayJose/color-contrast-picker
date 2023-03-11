"use client";

import { use, useState } from "react";

// styling
import { Inter } from "next/font/google";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

// chakra components
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

// custom components
import MyCard from "../components/Card";
import MyForm from "../components/Form";
import MyHeader from "../components/Header";
import MyTag from "../components/Tag";

// helper functions
import postData from "../lib/postData";

//

export default function Home() {
  const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    // "#008000",
    // "#0000ff",
    // "#4b0082",
    // "#ee82ee",
  ];
  // const colorFetch = getSampleData();
  const colorFetch = postData(
    "http://0.0.0.0:8000/api/v0/picks/combos",
    colors
  );

  const [data, setData] = useState(use(colorFetch));

  return (
    <>
      <MyHeader></MyHeader>
      <Container bg={"#f9f9f9"} maxW="container.xl" p={{ base: 0, md: 3 }}>
        <VStack
          h="95vh"
          w="100%"
          p={4}
          spacing={2}
          align="stretch"
          borderRadius={"10px"}
        >
          <MyForm setData={setData} />
          <HStack>
            {data.results.colors.map((c, i) => (
              <MyTag key={i} label={c} color={c} />
            ))}
          </HStack>
          <Divider></Divider>
          <Heading fontWeight={300} size="md">
            Accessibility Results
          </Heading>
          <SimpleGrid columns={2} spacingX="50px" spacingY="50px">
            {data.results.colorCombos.map((e, i) => (
              <MyCard
                key={i}
                foregroundColor={e.colorOne}
                backgroundColor={e.colorTwo}
                aaResult={e.results.results.AA}
                aaaResult={e.results.results.AAA}
                contrastRatio={e.results.results.ratio}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
}
