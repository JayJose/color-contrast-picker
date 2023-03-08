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

import {
  CheckIcon,
  CheckCircleIcon,
  CloseIcon,
  QuestionIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

function getIcon(result) {
  switch (result) {
    case "pass":
      return <CheckCircleIcon color="green" />;
      break;
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
}) {
  const [colors, setColors] = useState([foregroundColor, backgroundColor]);
  return (
    <Card minW="sm">
      <CardBody color={colors[0]} bg={colors[1]}>
        <Stack mt="1" spacing="3">
          <Heading size="md">
            {colors[0]} on {colors[1]}
          </Heading>
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
        <HStack>
          <Text color="black">AAA: </Text>
          {getIcon(aaaResult)}
        </HStack>
        <Spacer />
        <Switch
          onChange={() => {
            setColors(colors.slice().reverse());
          }}
        />
      </CardFooter>
    </Card>
  );
}
