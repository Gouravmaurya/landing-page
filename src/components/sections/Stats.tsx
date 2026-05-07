"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Verified Talent", value: 10000, suffix: "+" },
  { label: "AI Interviews Conducted", value: 250000, suffix: "+" },
  { label: "Matching Accuracy", value: 99, suffix: "%" },
  { label: "Global Companies", value: 500, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-40 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20">
        
        {/* Left Label */}
        <div className="lg:sticky lg:top-40 lg:h-fit">
          <span className="text-[24px] font-black uppercase tracking-[0.3em] text-neutral-600">Metric Impact</span>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter font-playfair">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <div className="h-px w-full bg-white/10" />
              <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
