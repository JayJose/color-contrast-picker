import { useState, useEffect } from "react";

// components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Spacer,
  Text,
  HStack,
  Switch,
} from "@chakra-ui/react";

// icons
import { CheckCircleIcon, QuestionIcon, WarningIcon } from "@chakra-ui/icons";

// custom components
import MyTag from "./Tag";

function getIcon(result) {
  switch (result) {
    case "pass":
      return <CheckCircleIcon color="green" />;
    case "fail":
      return <WarningIcon color="red" />;
    default:
      return <QuestionIcon color="black" />;
  }
}

export default function MyCard({
  foregroundColor,
  backgroundColor,
  aaResult,
  aaaResult,
  contrastRatio,
}) {
  // color toggling
  const [isReversed, setIsReversed] = useState(false);
  const fg = isReversed ? backgroundColor : foregroundColor;
  const bg = isReversed ? foregroundColor : backgroundColor;

  // demo text
  const fontSizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
  const text = "The quick brown fox jumps over the lazy dog.";

  return (
    <Card minW="sm">
      <CardHeader>
        <HStack>
          <Text color="black">Colors: </Text>
          {[fg, bg].map((c, i) => (
            <MyTag key={i} label={c} color={c} />
          ))}
        </HStack>
      </CardHeader>
      <CardBody color={fg} bg={bg}>
        <Stack mt={0} spacing={1}>
          {fontSizes.map((f) => (
            <Text key={f} fontSize={f}>
              {text}
            </Text>
          ))}
        </Stack>
      </CardBody>
      <CardFooter color="white" alignItems={"center"}>
        <HStack mr={4}>
          <Text color="black">AA: </Text>
          {getIcon(aaResult)}
        </HStack>
        <HStack mr={4}>
          <Text color="black">AAA: </Text>
          {getIcon(aaaResult)}
        </HStack>
        <HStack>
          <Text color="black">Ratio: {contrastRatio}</Text>
        </HStack>
        <Spacer />
        <HStack mr={4}>
          <Text color="black">Swap colors:</Text>
          <Switch onChange={() => setIsReversed(!isReversed)} />
        </HStack>
      </CardFooter>
    </Card>
  );
}
