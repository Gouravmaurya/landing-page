"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-40 bg-black relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-4xl space-y-12"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-gradient">
          Verify once. <br />Hire with confidence.
        </h2>
        
        <p className="text-neutral-500 text-lg md:text-xl max-w-xl mx-auto">
          Join hundreds of companies that trust Veraqon to find and match the world's most verified talent.
        </p>

        <div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center"
        >
          <motion.button
            style={{ x: mouseX, y: mouseY }}
            className="group relative bg-white text-black px-12 py-6 rounded-full text-2xl font-black hover:scale-110 transition-transform flex items-center gap-4"
          >
            Start hiring now
            <span className="bg-black text-white p-1 rounded-full group-hover:translate-x-2 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Dynamic Background Elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />
    </section>
  );
}
