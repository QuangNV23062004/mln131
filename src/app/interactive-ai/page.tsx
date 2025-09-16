"use client";

import axios from "axios";
import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState<any[]>([
    {
      from: "AI",
      content:
        "Xin chào! Tôi là **Trợ lý học tập về Cơ cấu xã hội – giai cấp**. Hãy đặt câu hỏi liên quan đến chương 5 để tôi hỗ trợ bạn!",
    },
  ]);
  const [prompt, setPrompt] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const fetchAIResponse = async (question?: string) => {
    const finalPrompt = question || prompt;
    if (!finalPrompt.trim()) return;

    const userMessage = { from: "user", content: finalPrompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setIsThinking(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Bạn là chuyên gia về Chủ nghĩa xã hội. Trả lời bằng tiếng Việt, rõ ràng, ngắn gọn, dựa trên kiến thức của chương 5: Cơ cấu xã hội – giai cấp và liên minh giai cấp trong thời kỳ quá độ lên CNXH. Câu hỏi: ${finalPrompt}`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": process.env.NEXT_PUBLIC_GEMINI_KEY,
          },
        }
      );
      const reply = response.data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { from: "AI", content: reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "AI",
          content:
            "Xin lỗi, tôi gặp sự cố khi trả lời. Bạn có thể thử lại sau nhé!",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      fetchAIResponse();
    }
  };

  const quickQuestions = [
    "Liên minh giai cấp trong thời kỳ quá độ lên CNXH là gì?",
    "Cơ cấu giai cấp – xã hội ở Việt Nam hiện nay gồm những thành phần nào?",
    "Phương hướng cơ bản để xây dựng liên minh giai cấp ở Việt Nam?",
    "Vai trò của liên minh công – nông – trí thức trong CNXH?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          Trợ lý học tập – Chương 5
        </h1>
        <p className="text-gray-600">
          Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ
          quá độ lên CNXH
        </p>
      </div>

      {/* Chat Messages */}
      <div className="px-6 py-4 space-y-4 overflow-y-auto h-[390px] bg-blue-50 rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.from === "user" ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`max-w-3xl px-4 py-3 rounded-2xl shadow ${message.from === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
                }`}
            >
              <div className="text-sm font-medium mb-1 opacity-75">
                {message.from === "user" ? "Bạn" : "AI Trợ lý"}
              </div>
              <div className="whitespace-pre-wrap">
                {message.content.replace(/\*\*(.*?)\*\*/g, "$1")}
              </div>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isThinking && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                <span className="text-gray-600">Đang suy nghĩ...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="bg-white border-t px-6 py-3 flex gap-2 overflow-x-auto">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => fetchAIResponse(q)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition whitespace-nowrap"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t px-6 py-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Đặt câu hỏi về cơ cấu xã hội – giai cấp..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isThinking}
          />
          <button
            onClick={() => fetchAIResponse()}
            disabled={isThinking || !prompt.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isThinking ? "Đang gửi..." : "Gửi"}
          </button>
        </div>
      </div>
    </div>
  );
}
