"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "Giai đoạn quá độ",
    title: "Liên minh giai cấp – tầng lớp",
    description:
      "Sự hợp tác giữa công – nông – trí thức dưới sự lãnh đạo của giai cấp công nhân và Đảng Cộng sản, nhằm xây dựng CNXH.",
    color: "bg-blue-100",
    icon: "🤝",
  },
  {
    year: "Hiện nay",
    title: "Cơ cấu giai cấp ở Việt Nam",
    description:
      "Công nhân, nông dân, trí thức, doanh nhân, các tầng lớp khác. Đặc điểm: đa dạng, biến đổi nhưng vẫn hướng tới CNXH.",
    color: "bg-green-100",
    icon: "🏛️",
  },
  {
    year: "Chiến lược phát triển",
    title: "Phương hướng cơ bản",
    description:
      "Phát triển kinh tế thị trường định hướng XHCN, nâng cao đời sống công – nông – trí thức, xây dựng đội ngũ doanh nhân trí thức mạnh, thực hiện dân chủ XHCN.",
    color: "bg-yellow-100",
    icon: "🚀",
  },
  {
    year: "Kết luận",
    title: "Động lực & nền tảng chính trị – xã hội",
    description:
      "Xây dựng cơ cấu xã hội – giai cấp hợp lý và liên minh các tầng lớp là yêu cầu tất yếu để Việt Nam phát triển bền vững và giữ vững độc lập dân tộc.",
    color: "bg-blue-600 text-white",
    icon: "✨",
  },
];

export default function TopicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 py-10">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700">
          Liên minh giai cấp & Cơ cấu xã hội – Chương 5
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Tóm tắt nội dung thuyết trình dưới dạng timeline
        </p>
      </header>

      {/* Timeline */}
      <main className="relative max-w-5xl mx-auto px-6">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative w-full flex ${
                isLeft ? "justify-start" : "justify-end"
              } mb-12`}
            >
              <div className="w-1/2 relative">
                <div
                  className={`p-6 rounded-2xl shadow-lg ${item.color} ${
                    item.color.includes("bg-") ? "text-gray-800" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>

                {/* Year badge */}
                <span
                  className="absolute -top-5 -right-5 bg-blue-500 text-white px-3 py-1 rounded-full font-semibold shadow-lg"
                  style={{
                    ...(isLeft ? { right: "-2rem" } : { left: "-2rem" }),
                  }}
                >
                  {item.year}
                </span>
              </div>
            </motion.div>
          );
        })}
      </main>
    </div>
  );
}
