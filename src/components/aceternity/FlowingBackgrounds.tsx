import React from "react";
import { motion } from "framer-motion";

// Subtle dot grid pattern
export const DotGrid: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 opacity-30 ${className}`}>
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

// Animated gradient orbs
export const GradientOrbs: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        key="orb-1"
        className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        key="orb-2"
        className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-bl from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      <motion.div
        key="orb-3"
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
};

// Subtle grid lines
export const GridLines: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 opacity-20 ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

// Flowing lines
export const FlowingLines: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <motion.path
          key="path-1"
          d="M0,300 Q250,100 500,300 T1000,300"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          opacity={0.6}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          key="path-2"
          d="M0,700 Q250,500 500,700 T1000,700"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          opacity={0.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.7)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Subtle spotlight effect
export const SpotlightEffect: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.05) 0%, transparent 40%)
          `,
        }}
      />
    </div>
  );
};

// Layered background composition
export const LayeredBackground: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: "hero" | "section" | "subtle";
}> = ({ children, className = "", variant = "section" }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            <GradientOrbs />
            <SpotlightEffect />
            <DotGrid className="opacity-20" />
          </>
        );
      case "section":
        return (
          <>
            <DotGrid className="opacity-10" />
            <SpotlightEffect className="opacity-50" />
          </>
        );
      case "subtle":
        return <GridLines className="opacity-10" />;
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {getVariantStyles()}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Section divider with flowing line
export const SectionDivider: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`relative py-20 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-30" />
      </motion.div>
    </div>
  );
};
