import { useEffect, useState } from "react";
import { Button, HStack, Input, Switch, Text, VStack } from "@chakra-ui/react";

import postData from "../lib/postData";
import { sortByRatio } from "../lib/sortData";

export default function MyInput({ setData, colors, setColors }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v0/picks/combos`;
  var [inputVal, setInputVal] = useState("");

  useEffect(() => {
    postData(url, colors).then((data) => {
      setData(data);
      sortByRatio(data.results.colorCombos);
    });
  }, [colors]);

  const addColor = async (event) => {
    event.preventDefault();
    // workaround for missing default value when using color picker
    // set a default value to black to match color picker
    if (!showText && inputVal === "") {
      inputVal = "#000000";
    }
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

  function handleChange(event) {
    setInputVal(event.currentTarget.value.toUpperCase());
  }

  const [showText, setShowText] = useState(true);

  return (
    <VStack>
      <HStack mt={2}>
        <Switch onChange={() => setShowText(!showText)}></Switch>
        <form onSubmit={addColor}>
          <Input
            size="sm"
            minW="200px"
            type={showText ? "text" : "color"}
            onChange={(event) => handleChange(event)}
            placeholder="Add a color "
            value={inputVal}
            bg={"white"}
          />
        </form>
        <Button
          size="sm"
          alignSelf={"right"}
          bg={"blue.600"}
          type={"submit"}
          onClick={addColor}
          color="white"
        >
          Add
        </Button>
      </HStack>
      {showText ? (
        <Text fontSize={"xs"} color="gray.500">
          Enter colors as 6-digit hex colors (ex: #FFFFFF)
        </Text>
      ) : null}
    </VStack>
  );
}
