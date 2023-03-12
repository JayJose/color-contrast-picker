"use client";

import { useState } from "react";

// components
import {
  Button,
  ButtonGroup,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Spacer,
  Text,
  HStack,
  Switch,
} from "@chakra-ui/react";

// icons
import {
  CheckIcon,
  CheckCircleIcon,
  CloseIcon,
  QuestionIcon,
  WarningIcon,
} from "@chakra-ui/icons";

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
  const colors = [foregroundColor, backgroundColor];
  const text = "The quick brown fox jumps over the lazy dog.";
  return (
    <Card minW="sm">
      <CardHeader>
        <HStack>
          <Text color="black">Colors: </Text>
          {colors.map((c, i) => (
            <MyTag key={i} label={c} color={c} />
          ))}
        </HStack>
      </CardHeader>
      <CardBody color={colors[0]} bg={colors[1]}>
        <Stack mt={0} spacing={1}>
          {/* <Text fontSize="6xl">{text}</Text>
          <Text fontSize="5xl">{text}</Text>
          <Text fontSize="4xl">{text}</Text>
          <Text fontSize="3xl">{text}</Text> */}
          {/* <Text fontSize="2xl">{text}</Text> */}
          <Text fontSize="xl">{text}</Text>
          <Text fontSize="lg">{text}</Text>
          <Text fontSize="md">{text}</Text>
          <Text fontSize="sm">{text}</Text>
          <Text fontSize="xs">{text}</Text>
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
          <Switch
          // onChange={() => {
          //   setColors(colors.slice().reverse());
          // }}
          />
        </HStack>
      </CardFooter>
    </Card>
  );
}
