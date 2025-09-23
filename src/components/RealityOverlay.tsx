import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function RealityOverlay({
  isOpen,
  onClose,
  text,
  image,
  fallback,
  imageSource,
}: {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  image: string;
  fallback: string;
  imageSource: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Reset image error when overlay opens with new image
  useEffect(() => {
    if (isOpen) {
      setImageError(false);
      setIsClosing(false);
    }
  }, [isOpen, image]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); // Match animation duration
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-200 flex items-center justify-center z-50 ${
        isClosing ? "bg-opacity-0" : "bg-opacity-50"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 relative transform transition-all duration-200 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100"
          aria-label="Close overlay"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6">
          {/* Image container */}
          <div className="mb-6">
            {!imageError ? (
              <img
                src={image}
                alt={fallback}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-600 border border-gray-200">
                <div className="text-center p-4">
                  <div className="text-gray-400 mb-2">📷</div>
                  <div className="text-sm font-medium">{fallback}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Image unavailable
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Text content */}
          <div className="text-gray-800">
            <div className="text-lg leading-relaxed mb-3">{text}</div>
            {imageSource && (
              <div className="text-sm text-gray-500 italic border-t pt-3">
                Source: {imageSource}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
