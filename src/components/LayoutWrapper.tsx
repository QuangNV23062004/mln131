"use client";
import React, { useState } from "react";
import AIChatBubble from "./AIChatBubble";
import AIChatOverlay from "./AIChatOverlay";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);
  return (
    <div>
      <div>{children}</div>
      <AIChatBubble
        isOpen={isBubbleOpen}
        onClick={() => setIsBubbleOpen(!isBubbleOpen)}
      />
      <AIChatOverlay
        isOpen={!isBubbleOpen}
        onClose={() => setIsBubbleOpen(true)}
      ></AIChatOverlay>
    </div>
  );
}
