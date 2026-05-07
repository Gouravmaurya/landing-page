"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CinematicReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform from inset(8% round 24px) to inset(0% round 0px)
  const clipInset = useTransform(scrollYProgress, [0, 0.4], [8, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [32, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <section ref={containerRef} className="h-[120vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            clipPath: useTransform(clipInset, (v) => `inset(${v}% ${v}% ${v}% ${v}% round ${borderRadius.get()}px)`),
            scale
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/nature-bg.png"
            alt="Cinematic Reveal"
            fill
            className="object-cover brightness-75"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl md:text-6xl font-bold text-white font-playfair tracking-tight max-w-4xl"
            >
              Building the infrastructure for <br />
              <span className="italic text-cyan-400">the future of work.</span>
            </motion.h2>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </motion.div>
      </div>
    </section>
  );
}
