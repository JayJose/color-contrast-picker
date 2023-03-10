"use client";

import { use, useRef } from "react";
import { Button, HStack, Input, InputGroup, Stack } from "@chakra-ui/react";

import postData from "../lib/postData";
import sampleData from "../app/example.json";

export default function MyForm({ setData }) {
  const colorsRef = useRef();

  const url = "http://localhost:8000/api/v0/picks/combos";

  function handleClick(e) {
    e.preventDefault();
    console.log("handling click");
    let val = colorsRef.current.value;
    const colorFetch = postData("http://0.0.0.0:8000/api/v0/picks/combos", [
      "#ffffff",
      "#000000",
    ]);
    // reset it somehow
    setData(sampleData);
  }

  return (
    <HStack>
      <Input
        bg={"white"}
        type="text"
        placeholder="Enter colors here"
        ref={colorsRef}
      />
      <Button bg={"black"} onClick={handleClick} color="white">
        Go
      </Button>
    </HStack>
  );
}
