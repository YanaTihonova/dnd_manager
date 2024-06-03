"use client";

import { Container } from "@radix-ui/themes";

import TextNote from "@/components/features/TextNote";
import { markdown } from "@/components/common/constance";

export default function Home() {
  return (
    <Container style={{ padding: "15px" }}>
      <TextNote title="Why not" text={markdown} />
    </Container>
  );
}
