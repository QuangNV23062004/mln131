"use client";
import Hero from "@/components/Hero";
import MainContext from "@/components/MainContext";
import Navigation from "@/components/Navigation";
import Overview from "@/components/Overview";
import ProgressBar from "@/components/ProgressBar";
import Reality from "@/components/Reality";
import TableOfContent from "@/components/TableOfContent";
import Theory from "@/components/Theory";
import { title } from "process";
import { useEffect, useState } from "react";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const tableOfContents = [
    {
      id: "introduction",
      title: "Trang giới thiệu",
      description: "Nền tảng lý luận về liên minh giai cấp",
    },
    { id: "overview", title: "Tổng quan", description: "Tổng quan về website" },
    {
      id: "theory",
      title: "Lý luận",
      description: "Sự hình thành và phát triển qua các thời kỳ",
    },
    {
      id: "main-context",
      title: "Nội dung chính",
      description: "Thành phần và vai trò của từng giai cấp",
    },
    {
      id: "reality",
      title: "Thực tiễn",
      description: "Kết quả trong xây dựng CNXH",
    },
    {
      id: "tableOfContents",
      title: "Mục lục",
      description: "Tổng mục lục",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="min-h-screen bg-white text-black w-full">
      <ProgressBar />
      <div id={tableOfContents[0].id}>
        <Navigation
          isScrolled={isScrolled}
          scrollToSection={scrollToSection}
          tableOfContents={tableOfContents}
        />
        <Hero scrollToSection={scrollToSection} />
      </div>

      <Overview id={tableOfContents[1].id} />
      <Theory id={tableOfContents[2].id} />

      <MainContext id={tableOfContents[3].id} />
      <Reality id={tableOfContents[4].id} />
      <TableOfContent
        id={tableOfContents[5].id}
        tableOfContents={tableOfContents}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
