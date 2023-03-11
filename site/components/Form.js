import { useState } from "react";
import {
  Button,
  HStack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import postData from "../lib/postData";
import sampleData from "../data/example.json";

export default function MyForm({ setData, setColors }) {
  const [inputVal, setInputVal] = useState("");

  const url = "http://localhost:8000/api/v0/picks/combos";

  // async function handleClick(e) {
  //   e.preventDefault();
  //   console.log("handling click");
  //   let val = colorsRef.current.value;
  //   const colorFetch = postData("http://0.0.0.0:8000/api/v0/picks/combos", [
  //     "#ffffff",
  //     "#000000",
  //   ]);
  // }

  const addColor = async (event) => {
    event.preventDefault();

    console.log("executing addColor");
    if (/^#[0-9A-F]{6}$/i.test(inputVal)) {
      setColors((oldColors) => [...oldColors, inputVal]);
    } else {
      alert("Wrong!");
    }
    setInputVal("");
  };

  return (
    <HStack>
      <form onSubmit={addColor}>
        <FormControl>
          <FormLabel>Colors</FormLabel>
          <Input
            type="text"
            onChange={(event) => setInputVal(event.currentTarget.value)}
            placeholder="Give me a good one."
            value={inputVal}
          />
          <FormHelperText>
            Enter colors as 6-digit hex colors (ex: #FFFFFF).
          </FormHelperText>
        </FormControl>
        <Button bg={"black"} type={"submit"} onClick={addColor} color="white">
          +Add
        </Button>
      </form>
    </HStack>
  );
}
