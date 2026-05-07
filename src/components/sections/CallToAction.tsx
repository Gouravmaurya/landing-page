"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CallToAction() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["inset(20% round 40px)", "inset(0% round 0px)"]
  );

  return (
    <section ref={container} className="py-40 bg-black px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 pt-4">
            FOR COMPANIES
          </span>
          <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            <span className="text-white">Don't Settle.</span> <br />
            <span className="text-zinc-600">Hire Smart.</span>
          </h2>
        </div>

        <motion.div 
          style={{ clipPath }}
          className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-20"
        >
          <Image
            src="/images/hero-bg.png"
            alt="Engineering Hub"
            fill
            className="object-cover grayscale brightness-50 contrast-125"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-end">
          <div />
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <p className="text-zinc-400 text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
              Join hundreds of high-growth companies that use Veraqon 
              to build world-class engineering teams without borders.
            </p>
            <button className="bg-white text-black px-12 py-6 rounded-full text-xl font-black uppercase tracking-widest hover:bg-zinc-200 transition-all whitespace-nowrap">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
