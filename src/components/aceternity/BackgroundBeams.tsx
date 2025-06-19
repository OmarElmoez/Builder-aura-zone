import React from "react";

interface BackgroundBeamsProps {
  className?: string;
}

export const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_60)">
          <g filter="url(#filter0_f_17_60)">
            <path
              d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z"
              fill="url(#paint0_linear_17_60)"
            />
            <path
              d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z"
              fill="url(#paint1_linear_17_60)"
            />
            <path
              d="M320 400H400V78.75L320 400Z"
              fill="url(#paint2_linear_17_60)"
            />
            <path
              d="M400 0H128.6L51.5 67.5L400 78.75V0Z"
              fill="url(#paint3_linear_17_60)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_17_60"
            x="-50"
            y="-50"
            width="500"
            height="500"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="25"
              result="effect1_foregroundBlur_17_60"
            />
          </filter>
          <linearGradient
            id="paint0_linear_17_60"
            x1="90.9504"
            y1="135.504"
            x2="58.7514"
            y2="25.4906"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_17_60"
            x1="176.583"
            y1="204.274"
            x2="120.157"
            y2="404.381"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_17_60"
            x1="357.5"
            y1="175"
            x2="357.5"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_17_60"
            x1="252.325"
            y1="87.244"
            x2="252.325"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_17_60">
            <rect width="400" height="400" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
