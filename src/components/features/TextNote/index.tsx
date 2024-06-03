import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import {
  Card,
  Button,
  Separator,
  Grid,
  Box,
  Flex,
  Heading,
} from "@radix-ui/themes";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdown } from "@/components/common/constance";

export default function TextNote() {
  return (
    <Card>
      <Flex justify="between" gap="3">
        <Heading truncate>Simple note</Heading>
        <Flex justify="end" gap="3">
          <Button>
            <Pencil1Icon />
          </Button>
          <Button>
            <TrashIcon />
          </Button>
        </Flex>
      </Flex>
      <Separator my="3" size="4" />
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </Card>
  );
}
