"use client";

import { Box, Tag, TagLabel, TagCloseButton, Tooltip } from "@chakra-ui/react";

export default function MyTag({ label, color, colors, setColors }) {
  const tag = {
    size: "sm",
    bg: "gray.500",
    br: "full",
    variant: "solid",
    labelColor: "white",
  };

  function handleClick(e) {
    let color = e.currentTarget.textContent;
    setColors(colors.filter((c) => c !== color));
  }

  return (
    <Tag
      size={tag.size}
      borderRadius={tag.br}
      variant={tag.variant}
      bg={tag.bg}
      onClick={handleClick}
    >
      <TagLabel color={tag.labelColor}>{label}</TagLabel>
      <Box bg={color} ml={1} p={1.5} borderRadius="full" />
    </Tag>
  );
}
