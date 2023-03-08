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
} from "@chakra-ui/react";

import {
  CheckIcon,
  CheckCircleIcon,
  CloseIcon,
  QuestionIcon,
  WarningIcon,
} from "@chakra-ui/icons";

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
  return (
    <Card minW="sm">
      <CardBody color={foregroundColor} bg={backgroundColor}>
        <Stack mt="1" spacing="3">
          <Heading size="md">
            {foregroundColor} on top of {backgroundColor}
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Stack>
      </CardBody>
      <Divider color={foregroundColor} />

      <CardFooter color="white" alignItems={"center"}>
        <HStack mr={4}>
          <Text color="black">AA: </Text>
          {getIcon(aaResult)}
        </HStack>
        <HStack>
          <Text color="black">AAA: </Text>
          {getIcon(aaaResult)}
        </HStack>
      </CardFooter>
    </Card>
  );
}
