import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation({
  isScrolled,
  scrollToSection,
  tableOfContents,
}: {
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
  tableOfContents: any[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      tableOfContents.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const offsetTop = el.offsetTop - 100;
          if (window.scrollY >= offsetTop) {
            current = item.id;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        current = tableOfContents[tableOfContents.length - 1].id;
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen
              className={`h-8 w-8 ${isScrolled ? "text-red-600" : "text-white"
                } transition-colors`}
            />
            <span
              className={`font-bold text-xl ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              Lý thuyết Chính trị
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700" : "text-white"
                  } ${activeId === item.id ? "text-red-600 font-bold" : ""}`}
              >
                {item.title}

                {activeId === item.id && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
