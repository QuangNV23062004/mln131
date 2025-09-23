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
import RealityOverlay from "./RealityOverlay";

export default function Reality({ id }: { id: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
      image:
        "https://media.vietnamplus.vn/images/70ecbaf68ce60ced7af37d8bc1483e0feac8f02c1de84961c0c032c038ec9990b23e0fdadb29912fc3ec44547f9952066d64f5f9b93b4178f8bb92df0ef6ff84/doanh_nghiep_Binh_duong.jpg",
      imageAnnotations: "Công nhân ở 1 công ty may mặc ở Bình Dương",
      fallback: "Ảnh công nhân",
      imageSource:
        "https://www.vietnamplus.vn/doanh-nghiep-binh-duong-phuc-hoi-tro-lai-san-xuat-sau-dich-post748271.vnp",
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Nông dân",
      description:
        "vừa là lực lượng sản xuất nông nghiệp, vừa tham gia quá trình tái cơ cấu nông thôn, cung cấp nguyên liệu và lao động cho công nghiệp.",
      color: "from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
      image:
        "https://doanhnghiepvadoisong.com.vn/uploads/images/2022/11/21/lua-1668939479-1669005909.jpg",
      imageAnnotations: "Nông dân thu thập lúa tại đồng bằng sông Cửu Long",
      fallback: "Ảnh nông nhân",
      imageSource:
        "https://doanhnghiepvadoisong.com.vn/giai-phap-nao-de-phat-trien-ben-vung-cay-lua-vung-dong-bang-song-cuu-long-a1233.html",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Trí thức",
      description:
        "đóng vai trò trong nghiên cứu khoa học, công nghệ, đổi mới sáng tạo.",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      image:
        "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/buithuhuong/2021_11_09/nanodragron.jpg",
      imageAnnotations:
        "Các nhà khoa học thuộc Viện Hàn lâm Khoa học và Công nghệ Việt Nam nghiên cứu, chế tạo thành công vệ tinh NanoDragon và phóng lên quỹ đạo năm 2021.",
      fallback: "Ảnh trí thức",
      imageSource:
        "https://baochinhphu.vn/phong-thanh-cong-ve-tinh-nanodragon-made-in-vietnam-102303600.htm",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Doanh nhân",
      description:
        "phát triển kinh tế thị trường định hướng XHCN, tạo công ăn việc làm.",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      image:
        "https://replus.vn/wp-content/uploads/2024/08/start-up-viet-nam-4-1024x506.jpg",
      imageAnnotations:
        "Với sứ mệnh mang đến cho người dùng trải nghiệm thanh toán và quản lý tài chính đơn giản, an toàn và hiệu quả, góp phần thúc đẩy sự phát triển của nền kinh tế số tại Việt Nam, Momo dần trở nên phổ biến với giới trẻ Việt Nam và phổ biến rộng khắp các thành phố lớn.",
      fallback: "Ảnh doanh nghiệp",
      imageSource: "https://replus.vn/top-15-startup-viet-nam/",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Thanh niên, phụ nữ",
      description:
        "giữ vai trò xung kích trong khởi nghiệp, sáng tạo, hội nhập quốc tế.",
      color: "from-pink-500 to-pink-700",
      bgColor: "from-pink-50 to-pink-100",
      image:
        "https://phunuvietnam.mediacdn.vn/thumb_w/1098/179072216278405120/2024/4/20/1-17136178871411855897268-0-73-487-852-crop-1713617893900425215586.jpg",
      imageAnnotations:
        "bà Nguyễn Thanh Hiền, Chủ tịch Hội LHPN huyện Châu Thành, tỉnh Bến Tre cho biết, trong quý 1/2024, Hội tiếp tục triển khai nhiều hoạt động hỗ trợ hội viên, phụ nữ khởi nghiệp. Trong đó, tích cực hỗ trợ sản phẩm khởi nghiệp đạt chứng nhận OCOP.",
      fallback: "Ảnh Thanh niên, phụ nữ",
      imageSource:
        "https://phunuvietnam.vn/ben-tre-tich-cuc-ho-tro-san-pham-khoi-nghiep-dat-chung-nhan-ocop-20240420200206323.htm",
    },
  ];

  const setModalOpen = (title: string, image: string) => {};
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
            {realityItems.map((item: any, index) => (
              <div
                onClick={() => setSelectedItem(item)}
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:shadow-2xl cursor-pointer hover:scale-105 ${
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
      </div>{" "}
      <RealityOverlay
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        text={(selectedItem as any)?.imageAnnotations || ""}
        image={(selectedItem as any)?.image || ""}
        fallback={(selectedItem as any)?.fallback || ""}
        imageSource={`Nguồn: ${(selectedItem as any)?.imageSource}`}
      />
    </section>
  );
}
