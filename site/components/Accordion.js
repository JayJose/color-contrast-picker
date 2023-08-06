import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading } from "@chakra-ui/react";

export default function MyAccordion({ section1Content, section2Content }) {
  return (
    <Box minWidth={"69%"}>
      <Heading pt={0} fontWeight={400} size="md" align={"center"}>
        Expand Your Palette
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Add a new color.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          {section1Content}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Upload a swatch.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {section2Content}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

