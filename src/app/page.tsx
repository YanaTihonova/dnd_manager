"use client";

import { Container, Flex, Grid } from "@radix-ui/themes";

import TextNote from "@/components/features/TextNote";

export default function Home() {
  return (
    <Container style={{ padding: "15px" }}>
      <TextNote />
    </Container>
  );
}
