import { useRef, useState } from "react";
import { Button, HStack, Input, InputGroup, Stack } from "@chakra-ui/react";

import getData from "../lib/getData";
import postData from "../lib/postData";

export default function MyForm({ setData }) {
  const colorsRef = useRef();

  const url = "http://localhost:8000/api/v0/picks/combos";

  async function handleClick(e) {
    e.preventDefault();
    let val = colorsRef.current.value;
    await postData(url, JSON.parse(val), setData);
  }

  //     await postData(url,
  //       colorsRef.current.value,
  //       setData
  //     }).then((data) => {
  //       if (data) {
  //         console.log(data);
  //         getData(url, setData);
  //       }
  //     });
  //     e.target.reset();
  //   }

  return (
    <HStack>
      <Input type="text" placeholder="Enter colors here" ref={colorsRef} />
      <Button bg={"black"} onClick={handleClick} color="white">
        Go
      </Button>
    </HStack>
  );
}
