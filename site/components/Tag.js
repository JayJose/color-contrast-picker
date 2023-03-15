"use client";

import { Box, Tag, TagLabel, TagCloseButton, Tooltip } from "@chakra-ui/react";

export default function MyTag({
  label,
  color,
  handleClick,
  canRemove = false,
}) {
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
      {canRemove ? (
        <TagCloseButton
          size="sm"
          className={color}
          onClick={() => handleClick(color)}
        />
      ) : null}
    </Tag>
  );
}
