"use client";

import { motion } from "framer-motion";
import { Brain, Code, Globe, Shield, Zap, Search } from "lucide-react";

const services = [
  {
    title: "Rachel — AI Interviewer",
    description: "Real-time voice AI conducting personalized interviews via WebSocket, TTS, and STT.",
    icon: Brain,
    color: "cyan"
  },
  {
    title: "Resume Intelligence",
    description: "Automated parsing, skill extraction, experience scoring, and role-fit analysis.",
    icon: Search,
    color: "blue"
  },
  {
    title: "JD Parser",
    description: "Upload any JD document — AI extracts all role parameters automatically.",
    icon: Shield,
    color: "purple"
  },
  {
    title: "Talent Matching",
    description: "AI matches verified candidates to job posts based on skills, experience, and scores.",
    icon: Zap,
    color: "yellow"
  },
  {
    title: "Reference Check AI",
    description: "Analyzes performance and history to identify and validate the optimal reference.",
    icon: Globe,
    color: "emerald"
  },
  {
    title: "Integrity Monitoring",
    description: "Camera-proctored sessions with screen activity and physical presence awareness.",
    icon: Code,
    color: "rose"
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gradient"
          >
            AI Powerhouse <br />for Human Intelligence
          </motion.h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Every layer of the Veraqon platform is built with proprietary AI to ensure the highest quality of verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center mb-6 text-${service.color}-400 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
