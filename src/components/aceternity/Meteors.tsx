import React from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({
  number = 20,
  className = "",
}) => {
  const meteors = new Array(number).fill(true);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="meteor"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s",
            animationDuration: Math.random() * 3 + 2 + "s",
          }}
        />
      ))}
    </div>
  );
};
