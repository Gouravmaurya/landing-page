"use client";

import { motion } from "framer-motion";
import { Mic, Volume2, ShieldCheck, Zap } from "lucide-react";

export default function RachelAI() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight"
          >
            The world's first <br />
            <span className="text-gradient">AI Talent Vettor.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-lg leading-relaxed"
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
                className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                  <p className="text-neutral-500 text-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
          {/* Voice Wave Animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeInOut",
                }}
                className="absolute w-full h-full border border-cyan-500/20 rounded-full"
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 group cursor-pointer"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/20 animate-pulse" />
              <motion.div
                animate={{
                  height: [20, 60, 40, 80, 30],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 bg-cyan-400 rounded-full mx-1"
              />
              <motion.div
                animate={{
                  height: [40, 20, 80, 30, 60],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 bg-cyan-400 rounded-full mx-1"
              />
              <motion.div
                animate={{
                  height: [60, 40, 30, 60, 40],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 bg-cyan-400 rounded-full mx-1"
              />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-1" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
