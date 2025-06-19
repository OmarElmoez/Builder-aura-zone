import React from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className = "",
  showRadialGradient = true,
}) => {
  return (
    <div
      className={`relative flex flex-col min-h-screen bg-black overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            absolute inset-0 opacity-50 blur-[10px] will-change-transform
            ${
              showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
            }
          `}
          style={{
            background: `
              repeating-linear-gradient(
                100deg,
                transparent 0%,
                transparent 7%,
                var(--blue-500) 10%,
                var(--blue-600) 12%,
                var(--blue-500) 16%
              ),
              repeating-linear-gradient(
                100deg,
                transparent 0%,
                transparent 7%,
                var(--purple-500) 10%,
                var(--purple-600) 12%,
                var(--purple-500) 16%
              ),
              repeating-linear-gradient(
                100deg,
                transparent 0%,
                transparent 7%,
                var(--pink-500) 10%,
                var(--pink-600) 12%,
                var(--pink-500) 16%
              )
            `,
            backgroundBlendMode: "multiply",
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">{children}</div>
    </div>
  );
};
