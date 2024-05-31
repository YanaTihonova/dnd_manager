"use client";

import { Flex, Text, Button } from "@radix-ui/themes";

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
    <Flex direction="column" gap="2" align="center">
      <Text>Hello from Radix Themes :)</Text>
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </Flex>
  );
}
