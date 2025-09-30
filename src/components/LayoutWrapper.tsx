"use client";
import React, { useEffect } from "react";
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+K (or Cmd+K on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault(); // Prevent default browser behavior
        setIsBubbleOpen(!isBubbleOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBubbleOpen, setIsBubbleOpen]);
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
