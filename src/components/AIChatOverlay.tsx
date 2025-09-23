"use client";
import React, { useRef, useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAIChat } from "@/app/context/AIChatContext";

export default function AIChatOverlay({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const { messages, isTyping, handleClearMessages, openChatAndSendPrompt } =
    useAIChat();
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState(""); // Local for manual input
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendManual = async () => {
    if (!input.trim()) return;
    await openChatAndSendPrompt(input);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendManual();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-red-200 flex flex-col backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl border-b border-red-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 animate-pulse"></div>
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
          <span className="font-bold text-lg text-white drop-shadow-lg">
            Trợ lí ảo
          </span>
        </div>
        <div className="relative z-10 flex items-center gap-2">
          <button
            onClick={handleClearMessages}
            disabled={messages.length <= 1 || isTyping}
            className="text-white/70 hover:text-white disabled:text-white/30 text-sm transition-all duration-200 hover:scale-110 disabled:scale-100 disabled:cursor-not-allowed"
            aria-label="Clear all messages"
            title="Clear conversation"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/80 hover:text-white text-xl font-bold transition-all duration-200 hover:scale-110"
            aria-label="Minimize chat"
          >
            {isMinimized ? "□" : "−"}
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xl font-bold transition-all duration-200 hover:scale-110 hover:rotate-90"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages Container */}
      {!isMinimized && (
        <div className="flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                } animate-in fade-in-50 slide-in-from-bottom-2 duration-300`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                      : "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200 shadow-lg"
                  }`}
                >
                  <div className="mb-1">
                    <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
                  </div>
                  <div
                    className={`text-xs opacity-70 ${
                      msg.from === "user" ? "text-red-100" : "text-gray-500"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in-50">
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 px-4 py-3 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      Tutor is typing...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="flex items-center gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <div className="flex-1 relative">
              <input
                type="text"
                className="w-full bg-white text-gray-800 px-4 py-3 rounded-xl outline-none border border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-gray-400"
                placeholder="Ask me anything about English..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              {input && (
                <button
                  type="button"
                  onClick={() => setInput("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  ×
                </button>
              )}
            </div>

            {/* Send Button */}
            <button
              type="button"
              onClick={handleSendManual}
              disabled={!input.trim() || isTyping}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 shadow-lg shadow-red-500/25 disabled:shadow-none"
              aria-label="Send message"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
