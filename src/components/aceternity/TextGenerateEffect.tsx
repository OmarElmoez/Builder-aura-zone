import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}) => {
  const [scope, setScope] = useState<string[]>([]);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScope(wordsArray);
    }, 100);

    return () => clearTimeout(timer);
  }, [wordsArray]);

  const renderWords = () => {
    return (
      <motion.div className={className}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              initial={{ opacity: 0 }}
              animate={scope.includes(word) ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: duration,
                delay: idx * 0.1,
                ease: "easeInOut",
              }}
              style={{
                filter: filter ? `blur(10px)` : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return renderWords();
};
