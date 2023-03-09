import { Box, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

export default function MyTag({ label, color }) {
  const tag = {
    size: "sm",
    bg: "gray.500",
    br: "full",
    variant: "solid",
    labelColor: "white",
  };
  return (
    <Tag
      size={tag.size}
      borderRadius={tag.br}
      variant={tag.variant}
      bg={tag.bg}
    >
      <TagLabel color={tag.labelColor}>{label}</TagLabel>
      <Box bg={color} ml={1} p={1.5} borderRadius="full" />
    </Tag>
  );
}
