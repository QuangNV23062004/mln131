import { ArrowRight, BookOpen } from "lucide-react";
import React from "react";

export default function Hero({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg")',
          filter: "brightness(0.6) blur(1px)",
        }}
      />

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-red-800/40 to-amber-800/50" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="block mb-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            Liên minh giai cấp
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-200">
            và tầng lớp trong thời kỳ
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-red-300">
            quá độ lên CNXH ở Việt Nam
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Khám phá sự phát triển của liên minh giai cấp công nhân với nông dân
          và trí thức trong quá trình xây dựng chủ nghĩa xã hội tại Việt Nam
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("overview")}
            className="group inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="mr-2">Khám phá ngay</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection("theory")}
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Lý thuyết cơ bản
          </button>
        </div>
      </div>
    </section>
  );
}
