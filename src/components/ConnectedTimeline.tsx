import React from "react";
import { motion } from "framer-motion";
import { FloatingCard } from "@/components/aceternity/FloatingCards";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface ConnectedTimelineProps {
  items: TimelineItem[];
}

const ConnectedTimeline: React.FC<ConnectedTimelineProps> = ({ items }) => {
  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Central connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden lg:block" />

      {/* Mobile connecting line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 lg:hidden" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative mb-16 lg:mb-24 ${
            index % 2 === 0
              ? "lg:flex lg:flex-row lg:text-left"
              : "lg:flex lg:flex-row-reverse lg:text-right"
          } flex flex-row text-left`}
        >
          {/* Timeline dot */}
          <div className="absolute left-8 lg:left-1/2 top-8 transform lg:-translate-x-1/2 -translate-x-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                </div>
              </div>

              {/* Pulsing animation */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30"
              />
            </motion.div>
          </div>

          {/* Content card */}
          <div
            className={`flex-1 ${index % 2 === 0 ? "lg:pr-12 pl-20 lg:pl-0" : "lg:pl-12 pl-20 lg:pr-0"}`}
          >
            <FloatingCard
              className={`${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}
            >
              {/* Year badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 mb-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
              >
                {item.year}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-4"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
                className="text-white/70 leading-relaxed"
              >
                {item.description}
              </motion.p>

              {/* Decorative elements */}
              <div
                className={`absolute -top-2 ${index % 2 === 0 ? "-right-2 lg:-right-4" : "-left-2 lg:-left-4"} w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl`}
              />
            </FloatingCard>
          </div>

          {/* Connection line to dot (desktop only) */}
          <div
            className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r ${
              index % 2 === 0
                ? "from-transparent to-blue-500 right-1/2 w-8"
                : "from-blue-500 to-transparent left-1/2 w-8"
            }`}
          />
        </motion.div>
      ))}

      {/* Final decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: items.length * 0.2 + 0.5 }}
        viewport={{ once: true }}
        className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-1/2 bottom-0"
      >
        <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse" />
        <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-full animate-ping" />
      </motion.div>
    </div>
  );
};

export default ConnectedTimeline;
