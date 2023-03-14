import { useEffect, useState } from "react";
import {
  Button,
  HStack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import postData from "../lib/postData";

export default function MyForm({ setData, colors, setColors }) {
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

  return (
    <HStack>
      <form onSubmit={addColor}>
        <FormControl>
          <Input
            type="text"
            onChange={(event) =>
              setInputVal(event.currentTarget.value.toUpperCase())
            }
            placeholder="Give me a good one"
            value={inputVal}
            bg={"white"}
          />
          <FormHelperText>
            Enter colors as 6-digit hex colors (ex: #FFFFFF)
          </FormHelperText>
        </FormControl>
      </form>
      <Button
        alignSelf={"right"}
        bg={"black"}
        type={"submit"}
        onClick={addColor}
        color="white"
      >
        +Add
      </Button>
    </HStack>
  );
}
