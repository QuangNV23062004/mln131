import HoverableText from "@/app/utils/HoverableText";
import React from "react";

export default function Overview({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-b from-red-50 via-yellow to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tổng quan
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
            Trong tiến trình xây dựng chủ nghĩa xã hội, không một giai cấp nào
            có thể hoàn thành sứ mệnh lịch sử một cách đơn độc. Ở Việt Nam, việc
            hình thành và củng cố liên minh giai cấp, tầng lớp là yếu tố quyết
            định bảo đảm sự phát triển ổn định, vững chắc của chế độ xã hội mới.
            Website này được xây dựng như một{" "}
            <span className="font-semibold text-red-600">
              "sản phẩm sáng tạo"
            </span>{" "}
            nhằm truyền tải kiến thức từ giáo trình Chủ nghĩa xã hội khoa học
            (2021) đến với sinh viên và người quan tâm, dưới hình thức trực
            quan, dễ tiếp cận, phù hợp với thời đại số.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <HoverableText text="giai cấp công nhân lại là lực lượng lãnh đạo trong quá trình xây dựng CNXH">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Giai cấp công nhân
                </h3>
                <p className="text-gray-600 text-sm">
                  Lực lượng lãnh đạo trong quá trình xây dựng CNXH
                </p>
              </HoverableText>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <HoverableText text="nông dân là đồng minh chủ yếu của giai cấp công nhân">
                {" "}
                <h3 className="font-semibold text-gray-900 mb-2">Nông dân</h3>
                <p className="text-gray-600 text-sm">
                  Đồng minh chủ yếu của giai cấp công nhân
                </p>
              </HoverableText>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <HoverableText text="giai cấp trí thức là Lực lượng quan trọng trong sự nghiệp xây dựng đất nước">
                {" "}
                <h3 className="font-semibold text-gray-900 mb-2">Trí thức</h3>
                <p className="text-gray-600 text-sm">
                  Lực lượng quan trọng trong sự nghiệp xây dựng đất nước
                </p>
              </HoverableText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
