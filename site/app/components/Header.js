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
  const headerConfig = { primaryColor: "black", secColor: "white" };
  return (
    <>
      <Flex
        width={"100%"}
        top="0"
        justifyContent={"space-between"}
        position="sticky"
        zIndex={1}
        p={2}
        background={headerConfig.secColor}
        borderBottom={"2px solid black"}
      >
        <Box p="0">
          <Heading size="lg" fontWeight={300} color={headerConfig.primaryColor}>
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
                  icon={
                    <HamburgerIcon w={6} h={6} color={headerConfig.secColor} />
                  }
                  background={headerConfig.primaryColor}
                  maxH={7}
                >
                  {isOpen ? "Close" : "Open"}
                </MenuButton>
                <MenuList
                  fontSize={"14px"}
                  fontWeight={200}
                  background={headerConfig.secColor}
                  textColor={headerConfig.primaryColor}
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
