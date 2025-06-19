import React from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 group ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
}) => {
  const glowColorMap = {
    blue: "shadow-blue-500/20 border-blue-500/30 hover:shadow-blue-500/40",
    purple:
      "shadow-purple-500/20 border-purple-500/30 hover:shadow-purple-500/40",
    pink: "shadow-pink-500/20 border-pink-500/30 hover:shadow-pink-500/40",
    green: "shadow-green-500/20 border-green-500/30 hover:shadow-green-500/40",
  };

  return (
    <div
      className={`
        relative glass rounded-2xl p-6 transition-all duration-500 group
        shadow-lg ${glowColorMap[glowColor as keyof typeof glowColorMap]} 
        hover:scale-105 hover:-translate-y-2
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
