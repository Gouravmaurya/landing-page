"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Rachel's AI interview work?",
    answer: "Rachel uses advanced large language models combined with real-time voice synthesis and speech recognition to conduct natural conversations. She adapts her questions based on the candidate's resume and live responses to verify technical depth."
  },
  {
    question: "Is the pre-assessment proctored?",
    answer: "Yes, all assessments are camera-proctored with AI-driven integrity monitoring. We track screen activity and physical presence to ensure the highest standards of verification."
  },
  {
    question: "How long does the verification process take?",
    answer: "Typically, a candidate can complete the entire journey—from onboarding to final verification—in under 2 hours. Once verified, they are immediately visible to matched enterprises."
  },
  {
    question: "Can I use Veraqon for custom roles?",
    answer: "Absolutely. Our AI Job Description parser can analyze any role requirements and create tailored assessment pipelines to find the perfect fit for your specific needs."
  }
];

function FAQItem({ question, answer, index, isOpen, onClick }: { question: string, answer: string, index: number, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/10 group">
      <button
        onClick={onClick}
        className="w-full py-10 flex items-start gap-8 text-left"
      >
        <span className="text-xl font-bold text-neutral-800 tabular-nums pt-1 group-hover:text-cyan-400 transition-colors">
          0{index + 1}
        </span>
        <div className="flex-1 space-y-4">
          <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${isOpen ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"}`}>
            {question}
          </span>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl py-4">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`mt-2 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? "bg-white text-black border-white" : "text-neutral-500"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-40 px-6 bg-black" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20">
        
        {/* Sticky Left Label */}
        <div className="lg:sticky lg:top-40 lg:h-fit">
          <span className="text-[24px] font-black uppercase tracking-[0.3em] text-neutral-600">FAQ</span>
        </div>

        {/* Right Content */}
        <div className="space-y-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none font-playfair">
            Questions? <br />
            <span className="text-neutral-700 italic">Answered.</span>
          </h2>

          <div className="border-t border-white/10">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
