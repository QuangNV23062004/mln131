"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function MainContext({ id }: { id: string }) {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Nền tảng của liên minh",
      content: [
        'Công nhân - nông dân - trí thức là "trục xương sống" của khối liên minh.',
        "Đây là lực lượng đông đảo, trực tiếp sản xuất và sáng tạo ra của cải vật chất và tinh thần.",
      ],
    },
    {
      title: "Mở rộng liên minh",
      content: [
        "Thanh niên, phụ nữ, lực lượng vũ trang.",
        "Doanh nhân và trí thức kiều bào – tham gia đóng góp kinh tế và tri thức.",
      ],
    },
    {
      title: "Nguyên tắc xây dựng liên minh",
      content: [
        "Bảo đảm vai trò lãnh đạo của giai cấp công nhân thông qua Đảng Cộng sản Việt Nam.",
        "Dựa trên lợi ích chung của dân tộc và nhân dân lao động, kết hợp lợi ích trước mắt và lâu dài.",
        "Tự nguyện, bình đẳng, cùng có lợi, chống áp đặt hoặc chia rẽ.",
      ],
    },
  ];

  return (
    <div
      id={id}
      className="py-20 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 translate-y-0 opacity-100">
          Nội dung chính
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full transform transition-all duration-1000 scale-x-100"></div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-2xl transition-all duration-500 ${
                activeSection === index
                  ? "shadow-lg border-green-300"
                  : "hover:border-green-200"
              }`}
            >
              <button
                onClick={() =>
                  setActiveSection(activeSection === index ? -1 : index)
                }
                className="w-full p-6 text-left flex items-center justify-between hover:bg-green-50 rounded-2xl transition-all duration-300"
              >
                <h3
                  className={`text-xl md:text-2xl font-semibold transition-colors ${
                    activeSection === index ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {section.title}
                </h3>
                <ArrowRight
                  className={`w-6 h-6 transition-all duration-300 ${
                    activeSection === index
                      ? "rotate-90 text-green-600"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeSection === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 transform transition-all duration-500 translate-y-0 opacity-100"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p
                          className="text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: item.replace(
                              /\"([^\"]+)\"/g,
                              '<strong class="text-green-600 bg-green-50 px-1 rounded">$1</strong>'
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
