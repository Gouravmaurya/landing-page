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

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-cyan-400" : "text-neutral-300 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-cyan-500 text-black rotate-180" : "bg-white/5 text-white"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-500 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Got questions? <br />
            <span className="text-neutral-500">We've got answers.</span>
          </h2>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
