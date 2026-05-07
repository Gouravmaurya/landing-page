"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-colorful.png"
          alt="Cinematic Background"
          fill
          priority
          className="object-cover opacity-80 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-70" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-cyan-400">Trusted by Global Enterprises</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 text-gradient leading-[1.05]">
            The AI platform for <br />
            <span className="text-white font-serif italic font-medium">human intelligence</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all group">
              <span className="bg-black text-white p-1 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
              Get in touch
            </button>
            <p className="text-neutral-400 max-w-sm text-sm md:text-base md:text-left ml-4">
              Veraqon eliminates the repetitive hiring cycle. Verify once, hire with confidence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
