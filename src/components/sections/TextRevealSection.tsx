"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-4 mt-2">
      <span className="absolute opacity-[0.15]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default function TextRevealSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const text = "We believe the future of engineering is global. Veraqon is built to bridge the gap between visionary companies and elite technical talent, using AI to ensure that every hire is not just a match, but a catalyst for innovation.";
  const words = text.split(" ");

  return (
    <section ref={container} className="relative h-[180vh] bg-black px-6 md:px-12">
      <div className="sticky top-0 h-screen flex items-center justify-center max-w-6xl mx-auto">
        <p className="flex flex-wrap text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-white text-center justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
