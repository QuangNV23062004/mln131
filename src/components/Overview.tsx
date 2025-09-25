import HoverableText from "@/app/utils/HoverableText";
import React from "react";
import { Tractor, Pickaxe, GraduationCap } from "lucide-react";
import Motion from "./Motion";
import MotionHover from "./MotionHover";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Overview({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-b from-red-50 via-yellow to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Motion className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tổng quan
          </Motion>
          <Motion className="w-24 h-1 bg-red-600 mx-auto rounded-full" delay={0.2} children={undefined}></Motion>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <Motion className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify" delay={0.2}>
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
          </Motion>

          <Motion>
          <div className="flex justify-center mt-8">
            <div className="w-76 h-60">
              <DotLottieReact
                src="https://lottie.host/7a9bbef9-adad-412e-a8ac-1b8e44b14ff3/8WaL9CZ8gr.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          </Motion>


          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <MotionHover>
              <Motion className="text-center p-6 bg-red-50 rounded-xl border border-red-100" direction="left">
                <MotionHover>
                  <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Pickaxe className="w-6 h-6 text-black" />
                  </div>
                  <HoverableText text="giai cấp công nhân lại là lực lượng lãnh đạo trong quá trình xây dựng CNXH">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Giai cấp công nhân
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lực lượng lãnh đạo trong quá trình xây dựng CNXH
                    </p>
                  </HoverableText>
                </MotionHover>
              </Motion>
            </MotionHover>

            <MotionHover>
              <Motion className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-100" direction="bottom">
                <MotionHover>
                  <div className="w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Tractor className="w-6 h-6 text-black" />
                  </div>
                  <HoverableText text="nông dân là đồng minh chủ yếu của giai cấp công nhân">
                    {" "}
                    <h3 className="font-semibold text-gray-900 mb-2">Nông dân</h3>
                    <p className="text-gray-600 text-sm">
                      Đồng minh chủ yếu của giai cấp công nhân
                    </p>
                  </HoverableText>
                </MotionHover>
              </Motion>
            </MotionHover>

            <MotionHover>
              <Motion className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100" direction="right">
                <MotionHover>
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-black" />
                  </div>
                  <HoverableText text="giai cấp trí thức là Lực lượng quan trọng trong sự nghiệp xây dựng đất nước">
                    {" "}
                    <h3 className="font-semibold text-gray-900 mb-2">Trí thức</h3>
                    <p className="text-gray-600 text-sm">
                      Lực lượng quan trọng trong sự nghiệp xây dựng đất nước
                    </p>
                  </HoverableText>
                </MotionHover>
              </Motion>
            </MotionHover>
          </div>
        </div>
      </div>
    </section>
  );
}
