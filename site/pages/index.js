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
  Stack,
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
import MyFormUpload from "../components/FormUpload";

// helper functions
import postData from "../lib/postData";
import { sortByRatio } from "../lib/sortData";
import { checkColorContrast } from "../lib/getCombos";

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
    checkColorContrast(colors).then((data) => {
      setData(data);
      sortByRatio(data);
      setShow(true);
    });
  }, [colors]);

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
              <Stack direction={"column"}>
                {colors.map((c, i) => (
                  <MyTag
                    key={c}
                    label={c}
                    color={c}
                    handleClick={deleteColor}
                    canRemove={true}
                  />
                ))}
              </Stack>
              <MyInput
                setData={setData}
                colors={colors}
                setColors={setColors}
              />
              <MyFormUpload
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
              {Array.from(data).map((e, i) => (
                <MyCard
                  key={i}
                  foregroundColor={e.colors[0]}
                  backgroundColor={e.colors[1]}
                  aaResult={e.data.AA}
                  aaaResult={e.data.AAA}
                  contrastRatio={e.data.ratio}
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
