"use client";

import { motion } from "framer-motion";

const logos = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Tesla", "Apple", "OpenAI"
];

export default function Logos() {
  return (
    <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-10">
        <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">
          Trusted by high-growth organizations
        </p>
        
        <div className="relative flex overflow-hidden w-full">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-20 items-center whitespace-nowrap min-w-full"
          >
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="text-3xl md:text-5xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default tracking-tighter"
              >
                {logo}
              </span>
            ))}
          </motion.div>
          
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
