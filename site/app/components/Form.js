import { useRef, useState } from "react";
import { Button, Input, InputGroup, Stack } from "@chakra-ui/react";

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
    <Stack spacing={4}>
      <InputGroup>
        <Input type="tel" placeholder="Colors" ref={colorsRef} />
        <Button colorScheme={"gray"} onClick={handleClick}>
          Search
        </Button>
      </InputGroup>
    </Stack>
  );
}
