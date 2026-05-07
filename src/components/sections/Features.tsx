"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Visual Content - Floating Panels */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <motion.div 
            style={{ y: y1, rotate: rotate1 }}
            className="absolute z-20 w-[80%] aspect-video glass rounded-2xl overflow-hidden animate-float"
          >
            <Image 
              src="/images/ui-panels.png" 
              alt="UI Panel 1" 
              fill 
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
          </motion.div>

          <motion.div 
            style={{ y: y2, rotate: rotate2 }}
            className="absolute z-10 w-[90%] aspect-video glass rounded-2xl overflow-hidden translate-x-10 translate-y-20 opacity-50 blur-[2px]"
          >
            <Image 
              src="/images/ui-panels.png" 
              alt="UI Panel 2" 
              fill 
              className="object-cover scale-110"
            />
          </motion.div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        </div>

        {/* Text Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              AI-driven vetting for <br />
              modern enterprises
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              Veraqon analyzes technical depth and behavioral patterns to deliver pre-screened, ranked talent profiles instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Merit-based verification</h3>
            <p className="text-neutral-500 max-w-md">
              Candidates interview once with Rachel, our AI interviewer, and get verified. No more manual screening or repetitive hiring cycles.
            </p>
          </motion.div>

          <button className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center gap-2 group">
            Explore our solutions
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
