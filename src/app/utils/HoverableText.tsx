"use client";
import React, { useState } from "react";
import { useAIChat } from "../context/AIChatContext";

export default function HoverableText({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { openChatAndSendPrompt } = useAIChat();

  const handleAskAI = async () => {
    const prompt = `giải thích thêm về "${text}"`;
    await openChatAndSendPrompt(prompt);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <button
          onClick={handleAskAI}
          className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md text-sm shadow-md transform translate-x-1/2 -translate-y-1/2 hover:bg-red-600 transition"
        >
          Hỏi AI
        </button>
      )}
    </div>
  );
}
