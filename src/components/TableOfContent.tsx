import { ArrowRight } from "lucide-react";
import React from "react";

export default function TableOfContent({
  id,
  tableOfContents,
  scrollToSection,
}: {
  id: string;
  tableOfContents: any[];
  scrollToSection: (id: string) => void;
}) {
  return (
    <div
      id={id}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mục lục
        </h3>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tableOfContents.map((item, index) => (
          <div
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group cursor-pointer p-6 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
