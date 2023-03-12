import { useEffect, useState } from "react";

// styling
import { Inter } from "next/font/google";

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

// HOME
export default function Home() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([
    "#FFFF00",
    "#FF3300",
    "#099FFF",
    "#000000",
  ]);

  useEffect(() => {
    console.log("running useEffect");
    postData("http://0.0.0.0:8000/api/v0/picks/combos", colors).then((data) => {
      setData(data);
      setColors(data.results.colors);
      setShow(true);
    });
  }, []);

  return (
    <>
      <MyHeader></MyHeader>
      {show && (
        <Container bg={"#f9f9f9"} maxW="container.xl" p={{ base: 0, md: 3 }}>
          <VStack
            h="95vh"
            w="100%"
            p={4}
            spacing={2}
            align="stretch"
            borderRadius={"10px"}
          >
            <MyForm setData={setData} colors={colors} setColors={setColors} />
            <Divider></Divider>
            <HStack>
              {colors.map((c, i) => (
                <MyTag key={i} label={c} color={c} />
              ))}
            </HStack>
            <Divider></Divider>
            <Heading fontWeight={300} size="md">
              Accessibility Results
            </Heading>
            <SimpleGrid columns={2} spacingX="20px" spacingY="20px">
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
      )}
    </>
  );
}
