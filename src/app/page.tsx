"use client";

import { Button, Card, Separator } from "@radix-ui/themes";
import { Pencil1Icon } from "@radix-ui/react-icons";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~~strikethrough~~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| ad | bd |
|---|---|
| *a* | b |
| a | b |
`;

export default function Home() {
  return (
    <Card>
      <Button>
        <Pencil1Icon /> Edit
      </Button>
      <Separator my="3" size="4" />
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </Card>
  );
}
