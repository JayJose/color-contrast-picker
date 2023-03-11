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
        <Stack mt="1" spacing="3">
          <Heading size="md">Lorem Ipsum</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
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
          <Text color="black">Toggle colors</Text>
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
