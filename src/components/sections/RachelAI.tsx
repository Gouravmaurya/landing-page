"use client";

import { motion } from "framer-motion";
import { Mic, Volume2, ShieldCheck, Zap } from "lucide-react";
import { useMemo, useState, useEffect } from "react";

function NeuralParticle({ index }: { index: number }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random base parameters
  const randomParams = useMemo(() => {
    if (!mounted) return null;
    const angle = (index / 100) * Math.PI * 2;
    const baseRadius = 30 + Math.random() * 120;
    return {
      angle,
      baseRadius,
      pulseDuration: 2 + Math.random() * 4, // Randomized pulse duration
      pulseDelay: Math.random() * -5,       // Randomized pulse delay
      size: 1 + Math.random() * 4,         // Randomized size
      opacity: 0.1 + Math.random() * 0.5,  // Randomized base opacity
      scaleRange: 1.2 + Math.random() * 0.8, // Randomized scale range
    };
  }, [index, mounted]);

  if (!mounted || !randomParams) return null;

  return (
    <motion.div
      animate={{
        // Randomized individual pulse
        scale: [1, randomParams.scaleRange, 1],
        opacity: [randomParams.opacity, randomParams.opacity * 2, randomParams.opacity],
      }}
      transition={{
        duration: randomParams.pulseDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: randomParams.pulseDelay,
      }}
      className="absolute"
      style={{
        width: randomParams.size,
        height: randomParams.size,
        borderRadius: "50%",
        backgroundColor: "#22d3ee",
        boxShadow: `0 0 15px rgba(34, 211, 238, ${randomParams.opacity})`,
        left: `calc(50% + ${Math.cos(randomParams.angle) * randomParams.baseRadius}px)`,
        top: `calc(50% + ${Math.sin(randomParams.angle) * randomParams.baseRadius}px)`,
      }}
    />
  );
}

export default function RachelAI() {
  const particles = useMemo(() => [...Array(120)], []);

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden" id="rachel">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20 items-center">
        
        {/* Sticky Left Label */}
        <div className="lg:sticky lg:top-40 lg:h-fit">
          <span className="text-[20px] font-black uppercase tracking-[0.3em] text-neutral-600">The Vettor</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold"
            >
              <Mic className="w-4 h-4" />
              Meet Rachel
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] font-playfair"
            >
              Verified <br />
              <span className="text-neutral-700 italic">Intelligence.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-500 text-lg max-w-lg leading-relaxed"
            >
              Rachel conducts one-on-one voice interviews, analyzing technical depth, behavioral patterns, and role-specific knowledge in real-time.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {[
                { icon: Volume2, title: "Natural Voice", desc: "Powered by advanced ElevenLabs TTS" },
                { icon: Zap, title: "Zero Latency", desc: "Real-time speech recognition via Deepgram" },
                { icon: ShieldCheck, title: "Integrity First", desc: "Camera-proctored & activity monitored" },
                { icon: Mic, title: "Dynamic Questions", desc: "Personalized based on resume & role" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-5 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                    <p className="text-neutral-600 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
            {/* Background Static Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-80 h-80 border border-cyan-500/5 rounded-full"
                  style={{ scale: 0.8 + i * 0.4 }}
                />
              ))}
            </div>

            {/* Slowly Rotating Neural Cloud */}
            <motion.div 
              animate={{
                rotate: 360, // Slow continuous rotation
              }}
              transition={{
                duration: 60, // 60 seconds for a full rotation
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Core Glow */}
              <div className="absolute w-40 h-40 bg-cyan-400/20 blur-[80px] rounded-full" />
              
              {/* Particles */}
              <div className="relative w-full h-full flex items-center justify-center">
                {particles.map((_, i) => (
                  <NeuralParticle key={i} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
