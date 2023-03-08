import {
  HStack,
  Heading,
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Home } from "grommet-icons";

export default function MyHeader() {
  return (
    <>
      <Flex
        width={"100%"}
        top="0"
        justifyContent={"space-between"}
        position="sticky"
        zIndex={1}
        p={2}
        background={"white"}
        borderBottom={"2px solid black"}
      >
        <Box p="0" color="black">
          <Heading size="lg" fontWeight={300}>
            Contrast Color Picker
          </Heading>
        </Box>
        <HStack spacing={2}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon w={6} h={6} color="white" />}
                  background={"black"}
                  maxH={7}
                >
                  {isOpen ? "Close" : "Open"}
                </MenuButton>
                <MenuList
                  fontSize={"14px"}
                  fontWeight={200}
                  background="white"
                  textColor={"black"}
                >
                  <MenuItem>
                    <Link href="https://github.com/JayJose/contrast-color-picker">
                      View the repo <ExternalLinkIcon />
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="https://webaim.org/">
                      Get the data <ExternalLinkIcon />
                    </Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Flex>
    </>
  );
}
