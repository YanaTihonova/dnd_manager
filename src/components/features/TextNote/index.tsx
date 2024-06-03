import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import {
  Card,
  Button,
  Separator,
  Grid,
  Box,
  Flex,
  Heading,
  TextArea,
  TextField,
} from "@radix-ui/themes";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdown } from "@/components/common/constance";
import { useState } from "react";

export default function TextNote() {
  const [editMode, useEditMode] = useState(false);
  const [title, useTitle] = useState("Simple note");
  const [text, useText] = useState(markdown);

  return (
    <Card>
      <Flex justify="between" gap="3">
        {editMode ? (
          <TextField.Root
            value={title}
            onChange={(event) => useTitle(event.target.value)}
          />
        ) : (
          <Heading truncate>{title}</Heading>
        )}
        <Flex justify="end" gap="3">
          <Button onClick={() => useEditMode(!editMode)}>
            <Pencil1Icon />
          </Button>
          <Button color="ruby">
            <TrashIcon />
          </Button>
        </Flex>
      </Flex>
      <Separator my="3" size="4" />
      {editMode ? (
        <TextArea
          style={{ minHeight: "250px" }}
          resize="vertical"
          value={text}
          onChange={(event) => useText(event.target.value)}
        />
      ) : (
        <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
      )}
    </Card>
  );
}
