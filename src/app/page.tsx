"use client";

import { Flex, Grid } from "@radix-ui/themes";

import TextNote from "@/components/features/TextNote";

export default function Home() {
  return (
    <Flex direction="column" gap="3">
      <TextNote />
      <TextNote />
      <TextNote />
      <TextNote />
      <TextNote />
    </Flex>
  );
}
