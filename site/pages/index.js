import { useEffect, useState } from "react";

// styling
import { Inter } from "next/font/google";

// chakra components
import {
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
import MyHeader from "../components/Header";
import MyTag from "../components/Tag";
import MyInput from "../components/Input";

// helper functions
import postData from "../lib/postData";

// HOME
export default function Home() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([
    "#1e3d59",
    "#f5f0e1",
    "#ff6e40",
    "#ffc13b",
  ]);

  useEffect(() => {
    console.log("running useEffect");
    postData("http://0.0.0.0:8000/api/v0/picks/combos", colors).then((data) => {
      setData(data);
      setShow(true);
    });
  }, []);

  return (
    <>
      <MyHeader />
      {show && (
        <Container bg={"white"} maxW="container.xl" p={{ base: 0, md: 3 }}>
          <VStack
            h="100%"
            w="100%"
            p={0}
            spacing={2}
            align="stretch"
            borderRadius={"10px"}
          >
            <Heading pt={0} fontWeight={800} size="md" align={"center"}>
              Your Colors
            </Heading>
            <VStack>
              <HStack justifyContent={"center"}>
                {colors.map((c, i) => (
                  <MyTag
                    key={i}
                    label={c}
                    color={c}
                    colors={colors}
                    setColors={setColors}
                  />
                ))}
              </HStack>
              <MyInput
                setData={setData}
                colors={colors}
                setColors={setColors}
              />
            </VStack>
            <Divider pb={3}></Divider>
            <Heading pt={2} fontWeight={800} size="md" align={"center"}>
              Accessibility Results
            </Heading>
            <SimpleGrid pt={2} columns={2} spacingX="20px" spacingY="20px">
              {data.results.colorCombos.map((e, i) => (
                <MyCard
                  key={i}
                  foregroundColor={e.colorOne}
                  backgroundColor={e.colorTwo}
                  aaResult={e.results.AA}
                  aaaResult={e.results.AAA}
                  contrastRatio={e.results.ratio}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      )}
    </>
  );
}
