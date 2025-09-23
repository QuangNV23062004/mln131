import { BookOpen } from "lucide-react";
import React from "react";

export default function Navigation({
  isScrolled,
  scrollToSection,
  tableOfContents,
}: {
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
  tableOfContents: any[];
}) {
  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BookOpen
                className={`h-8 w-8 ${
                  isScrolled ? "text-red-600" : "text-white"
                } transition-colors`}
              />
              <span
                className={`font-bold text-xl ${
                  isScrolled ? "text-gray-900" : "text-white"
                } transition-colors`}
              >
                Lý thuyết Chính trị
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:opacity-80 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
