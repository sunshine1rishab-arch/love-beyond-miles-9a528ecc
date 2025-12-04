import { motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";

interface SparklesProps {
  count?: number;
}

const Sparkles = ({ count = 8 }: SparklesProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    size: 8 + Math.random() * 12,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-primary"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <SparklesIcon size={sparkle.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;