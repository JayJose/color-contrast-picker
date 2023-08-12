'use client'

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
  Text,
} from '@chakra-ui/react'

import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'

export default function MyHeader() {
  const headerConfig = { primaryColor: 'black', secColor: 'white' }
  return (
    <>
      <Flex
        width={'100%'}
        top="0"
        position="sticky"
        zIndex={1}
        p={2}
        background={headerConfig.secColor}
        borderBottom={'2px solid black'}
        alignItems="center"
        textAlign="center"
      >
        <Flex justifyContent="flex-start">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={
                    <HamburgerIcon
                      w={6}
                      h={6}
                      color={headerConfig.primaryColor}
                    />
                  }
                  background={headerConfig.secColor}
                  maxH={7}
                >
                  {isOpen ? 'Close' : 'Open'}
                </MenuButton>
                <MenuList
                  fontSize={'14px'}
                  fontWeight={200}
                  background={headerConfig.secColor}
                  textColor={headerConfig.primaryColor}
                >
                  <MenuItem>
                    <Link href="https://github.com/JayJose/contrast-color-picker">
                      Visit the repo <ExternalLinkIcon />
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="https://github.com/users/JayJose/projects/2">
                      Visit the project <ExternalLinkIcon />
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
        </Flex>
        <Flex flex="1" justifyContent="center" direction="column">
          <Heading size="lg" fontWeight={300} color={headerConfig.primaryColor}>
            HueView
          </Heading>
          <Text fontSize="lg" color={headerConfig.primaryColor}>
            Design 🤝 Accessibility
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
