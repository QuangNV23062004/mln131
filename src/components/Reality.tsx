"use client";
import {
  TrendingUp,
  Factory,
  Wheat,
  Lightbulb,
  Briefcase,
  Users,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Reality({ id }: { id: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const realityItems = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Công nhân",
      description:
        "lực lượng nòng cốt trong sản xuất công nghiệp, xây dựng hạ tầng, tham gia vào nền kinh tế tri thức.",
      color: "from-red-500 to-red-700",
      bgColor: "from-red-50 to-red-100",
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Nông dân",
      description:
        "vừa là lực lượng sản xuất nông nghiệp, vừa tham gia quá trình tái cơ cấu nông thôn, cung cấp nguyên liệu và lao động cho công nghiệp.",
      color: "from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Trí thức",
      description:
        "đóng vai trò trong nghiên cứu khoa học, công nghệ, đổi mới sáng tạo.",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Doanh nhân",
      description:
        "phát triển kinh tế thị trường định hướng XHCN, tạo công ăn việc làm.",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Thanh niên, phụ nữ",
      description:
        "giữ vai trò xung kích trong khởi nghiệp, sáng tạo, hội nhập quốc tế.",
      color: "from-pink-500 to-pink-700",
      bgColor: "from-pink-50 to-pink-100",
    },
  ];

  return (
    <section ref={sectionRef} id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Liên hệ thực tiễn
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full" />
        </div>

        <div
          className={`bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              Trong công cuộc{" "}
              <span className="font-bold text-green-600 bg-green-100 px-3 py-1 rounded-lg">
                công nghiệp hóa - hiện đại hóa
              </span>{" "}
              và chuyển đổi số, liên minh giai cấp, tầng lớp ngày càng thể hiện
              rõ:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {realityItems.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-360 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-${
                      item.color.split(" ")[0].split("-")[0]
                    }-600 group-hover:cursor-pointer transition-colors`}
                  >
                    {item.title}:
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {item.description}
                  </p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
