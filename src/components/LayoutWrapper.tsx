"use client";
import React from "react";
import AIChatBubble from "./AIChatBubble";
import AIChatOverlay from "./AIChatOverlay";
import { AIChatProvider, useAIChat } from "@/app/context/AIChatContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AIChatProvider>
      <LayoutContent>{children}</LayoutContent>
    </AIChatProvider>
  );
}

// Separate content to use hook (can't use hooks directly in LayoutWrapper since it's the provider root)
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isBubbleOpen, setIsBubbleOpen } = useAIChat();

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
      />
    </div>
  );
}
