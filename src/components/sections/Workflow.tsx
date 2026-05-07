"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, CheckCircle2 } from "lucide-react";

const candidateSteps = [
  { title: "Smart Onboarding", desc: "AI parses your resume and extracts skills instantly." },
  { title: "Pre-Assessment", desc: "45-question camera-proctored technical screening." },
  { title: "AI Interview", desc: "One-on-one voice session with Rachel to verify depth." },
  { title: "Verified Pool", desc: "Get added to the Veraqon pool and let companies find you." },
];

const enterpriseSteps = [
  { title: "Job Analysis", desc: "Upload JD and let AI extract all role parameters." },
  { title: "Talent Matching", desc: "System matches against verified pool ranked by scores." },
  { title: "Pipeline View", desc: "Track interactions from request to hired in one dashboard." },
  { title: "Instant Hire", desc: "Hire pre-vetted talent with 100% confidence." },
];

export default function Workflow() {
  const [activeTab, setActiveTab] = useState<"candidate" | "enterprise">("candidate");

  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Seamless flow. <span className="text-neutral-500">Maximum impact.</span>
          </h2>
          
          <div className="flex justify-center pt-8">
            <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10">
              <button
                onClick={() => setActiveTab("candidate")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === "candidate" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
                }`}
              >
                <User className="w-4 h-4" />
                For Talent
              </button>
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === "enterprise" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
                }`}
              >
                <Building2 className="w-4 h-4" />
                For Enterprise
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {(activeTab === "candidate" ? candidateSteps : enterpriseSteps).map((step, i) => (
                <div key={i} className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-bold text-white">{i + 1}</span>
                  </div>
                  <div className="relative z-10 space-y-4 pt-12">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
