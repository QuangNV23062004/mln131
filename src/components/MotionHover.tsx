import { motion } from "framer-motion";

interface MotionHoverProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;       
  tapScale?: number;    
}

export default function MotionHover({
  children,
  className = "",
  scale = 1.10,
  tapScale = 0.95,
}: MotionHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale
      }}
      whileTap={{
        scale: tapScale,
      }}
      transition={{ duration: 0.15, ease: "easeOut"  }}
    >
      {children}
    </motion.div>
  );
}
