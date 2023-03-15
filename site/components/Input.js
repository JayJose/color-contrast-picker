import { useEffect, useState } from "react";
import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";

import postData from "../lib/postData";

export default function MyInput({ setData, colors, setColors }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v0/picks/combos`;
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    postData(url, colors).then((data) => {
      setData(data);
    });
  }, [colors]);

  const addColor = async (event) => {
    event.preventDefault();
    console.log("executing addColor");
    if (colors.includes(inputVal)) {
      alert("That color already exists");
      setInputVal("");
      return;
    }
    if (/^#[0-9A-F]{6}$/i.test(inputVal)) {
      setColors((oldColors) => [...oldColors, inputVal]);
    } else {
      alert("Not a valid hex color");
    }
    setInputVal("");
  };

  function handleClick(event) {
    setInputVal(event.currentTarget.value.toUpperCase());
  }

  return (
    <VStack>
      <HStack mt={2}>
        <Input
          size="sm"
          type="text"
          onChange={(event) => handleClick(event)}
          placeholder="Add a color "
          value={inputVal}
          bg={"white"}
        />
        <Button
          size="sm"
          alignSelf={"right"}
          bg={"gray.500"}
          type={"submit"}
          onClick={addColor}
          color="white"
        >
          Add
        </Button>
      </HStack>
      <Text fontSize={"xs"} color="gray.500">
        Enter colors as 6-digit hex colors (ex: #FFFFFF)
      </Text>
    </VStack>
  );
}
