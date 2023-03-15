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
  Tooltip,
} from "@chakra-ui/react";

// chakra icons
import { InfoIcon } from "@chakra-ui/icons";

// custom components
import MyCard from "../components/Card";
import MyHeader from "../components/Header";
import MyTag from "../components/Tag";
import MyInput from "../components/Input";
import MyFooter from "../components/Footer";

// helper functions
import postData from "../lib/postData";
import { sortByRatio } from "../lib/sortData";

// sample palettes
import palettes from "../data/palettes.json";

// HOME
export default function Home() {
  // initialize with a random palette
  const paletteIx = Math.floor(Math.random() * palettes.length);
  const [colors, setColors] = useState(palettes[paletteIx]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("running useEffect");
    postData(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v0/picks/combos`,
      colors
    ).then((data) => {
      setData(data);
      setShow(true);
      sortByRatio(data.results.colorCombos);
    });
  }, []);

  // delete color
  function deleteColor(color) {
    setColors(colors.filter((c) => c !== color));
  }

  return (
    <>
      <MyHeader />
      {show && (
        <Container bg={"white"} maxW="container.xl" p={{ base: 0, md: 3 }}>
          <VStack
            h="100%"
            w="100%"
            p={{ base: 1, md: 2 }}
            spacing={2}
            align="stretch"
            borderRadius={"10px"}
            mb={4}
          >
            <HStack justifyContent={"center"}>
              <Heading pt={0} fontWeight={400} size="md" align={"center"}>
                Your Color Palette
              </Heading>
            </HStack>
            <VStack>
              <HStack justifyContent={"center"}>
                {colors.map((c, i) => (
                  <MyTag
                    key={c}
                    label={c}
                    color={c}
                    handleClick={deleteColor}
                    canRemove={true}
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
            <HStack justifyContent={"center"}>
              <Heading pt={2} fontWeight={400} size="md" align={"center"}>
                Accessibility Results
              </Heading>
              <Tooltip
                hasArrow
                label="AA and AAA assessibility is evaluated for each combination of 2 colors from your palette. At least 2 colors are required to generate an assessment."
                bg="gray.300"
                color="black"
              >
                <InfoIcon boxSize={4} />
              </Tooltip>
            </HStack>
            <SimpleGrid
              pt={2}
              columns={{ base: 1, md: 2 }}
              spacingX="20px"
              spacingY="20px"
            >
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
          <Divider />
          <MyFooter />
        </Container>
      )}
    </>
  );
}
