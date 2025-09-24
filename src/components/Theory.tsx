"use client";
import HoverableText from "@/app/utils/HoverableText";
import React, { useEffect, useState } from "react";
import Motion from "./Motion";
import MotionHover from "./MotionHover";

export default function Theory({ id }: { id: string }) {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => (prev < 3 ? prev + 1 : prev));
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id={id}
      className="py-20 bg-white from-white to-orange-50/50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <Motion className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cơ sở lý luận
        </Motion>
        <Motion className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full" delay={0.2} children={undefined}></Motion>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
        <div className="mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
          <Motion className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 flex items-center" direction="left" delay={0.2}>
            <div className="w-2 h-8 bg-orange-600 rounded-full mr-4"></div>
            Khái niệm
          </Motion>
          <MotionHover scale={1.05} tapScale={0.98}>
            <Motion direction="right" delay={0.4}>
              <HoverableText
                text="Liên minh giai cấp, tầng lớp là sự liên kết chính trị - xã hội giữa
            các giai cấp và tầng lớp khác nhau trong xã hội, dựa trên lợi ích
            căn bản, lâu dài, để cùng thực hiện nhiệm vụ cách mạng."
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600">
                  Liên minh giai cấp, tầng lớp là sự liên kết chính trị - xã hội
                  giữa các giai cấp và tầng lớp khác nhau trong xã hội, dựa trên lợi
                  ích căn bản, lâu dài, để cùng thực hiện nhiệm vụ cách mạng.
                </p>
              </HoverableText>
            </Motion>
          </MotionHover>
        </div>

        <div className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
          <Motion className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 flex items-center" direction="left" delay={0.4}>
            <div className="w-2 h-8 bg-red-600 rounded-full mr-4"></div>
            Vì sao cần liên minh giai cấp trong thời kỳ quá độ?
          </Motion>
          <div className="space-y-4">
            {[
              "Quá độ lên CNXH là giai đoạn phức tạp, nhiều thành phần xã hội cùng tồn tại.",
              "Chỉ giai cấp công nhân là lực lượng lãnh đạo, nhưng cần có sự ủng hộ và tham gia của nông dân, trí thức và các tầng lớp khác.",
              "Liên minh giai cấp tạo nên khối đại đoàn kết dân tộc, vừa là điều kiện, vừa là mục tiêu của cách mạng XHCN.",
            ].map((item, index) => (
              <MotionHover scale={1.05} tapScale={0.98} key={index}>
                <Motion
                  direction="right"
                  delay={0.2 + index * 0.2}
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl hover:bg-red-50 transform ${visibleItems > index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                    }`}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <HoverableText text={item}>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {index === 2 ? (
                        <>
                          Liên minh giai cấp tạo nên{" "}
                          <strong className="text-red-600 bg-red-50 px-2 py-1 rounded">
                            khối đại đoàn kết dân tộc
                          </strong>
                          , vừa là điều kiện, vừa là mục tiêu của cách mạng XHCN.
                        </>
                      ) : (
                        item
                      )}{" "}
                    </p>
                  </HoverableText>
                </Motion>
              </MotionHover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
