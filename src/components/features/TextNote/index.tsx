import { Pencil1Icon, TrashIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Card,
  Button,
  Separator,
  Flex,
  Heading,
  TextArea,
  TextField,
} from "@radix-ui/themes";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useState } from "react";

type TextNoteProps = {
  title: string;
  text: string;
  additionalBehavior?: () => {};
  editMode?: boolean;
};

export default function TextNote(props: TextNoteProps) {
  const { title: initTitle, text: initText, editMode: initEditMode } = props;
  const [editMode, useEditMode] = useState(initEditMode || false);
  const [title, useTitle] = useState(initTitle);
  const [text, useText] = useState(initText);

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
            {editMode ? <CheckIcon /> : <Pencil1Icon />}
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
