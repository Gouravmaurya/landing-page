"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  User, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Mic2,
  Search,
  CheckCircle2
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const talentSteps = [
  {
    title: "AI Onboarding",
    desc: "Our engine parses your resume, extracting skills, experience, and career trajectory to build your verified identity.",
    icon: Search
  },
  {
    title: "Adaptive Screening",
    desc: "A 45-question camera-proctored technical assessment that adjusts difficulty in real-time based on your depth.",
    icon: Cpu
  },
  {
    title: "Rachel AI Interview",
    desc: "A high-fidelity voice session with Rachel, our AI interviewer, to verify technical depth and behavioral patterns.",
    icon: Mic2
  },
  {
    title: "Global Verification",
    desc: "Once verified, you enter the elite talent pool where visionary companies find you. No more manual applications.",
    icon: ShieldCheck
  }
];

const enterpriseSteps = [
  {
    title: "Smart JD Parsing",
    desc: "Upload your JD. Our AI extracts role parameters, required technical skills, and ideal candidate traits automatically.",
    icon: Search
  },
  {
    title: "Instant Matching",
    desc: "The system matches your query against our verified pool, ranking candidates by their assessment and interview scores.",
    icon: Cpu
  },
  {
    title: "Technical Deep-Dive",
    desc: "Access granular AI-generated profiles including Rachel's interview feedback and technical category breakdowns.",
    icon: Mic2
  },
  {
    title: "Accelerated Hiring",
    desc: "Connect directly with verified talent. Reduce your time-to-hire by 80% with pre-vetted, high-intent candidates.",
    icon: Building2
  }
];

export default function Workflow() {
  const [activeTab, setActiveTab] = useState<"talent" | "enterprise">("talent");
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const steps = activeTab === "talent" ? talentSteps : enterpriseSteps;

  useGSAP(() => {
    // Reset any existing animations on tab change
    ScrollTrigger.getAll().forEach(t => {
      if (t.vars.id === "workflow-trigger") t.kill();
    });

    const stepElements = gsap.utils.toArray(".workflow-step");
    
    stepElements.forEach((step: any, i: number) => {
      gsap.fromTo(step, 
        { opacity: 0.3, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            id: "workflow-trigger"
          }
        }
      );
    });

    // Visual Panel Float
    gsap.to(".visual-panel", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef, dependencies: [activeTab] });

  return (
    <section ref={containerRef} className="py-40 px-6 bg-[#050505] relative overflow-hidden" id="workflow">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-cyan-500/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left: Sticky Context */}
        <div className="lg:sticky lg:top-40 lg:h-fit space-y-12">
          <div className="space-y-6">
            <div className="inline-flex p-1 bg-neutral-900 border border-white/5 rounded-2xl">
              <button
                onClick={() => setActiveTab("talent")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === "talent" ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "text-neutral-500 hover:text-white"
                }`}
              >
                <User className="w-4 h-4" />
                For Talent
              </button>
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === "enterprise" ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "text-neutral-500 hover:text-white"
                }`}
              >
                <Building2 className="w-4 h-4" />
                For Enterprise
              </button>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              The journey to <br />
              <span className="text-gradient">high-velocity hiring.</span>
            </h2>
            
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              We've automated the friction points of modern recruitment, 
              allowing humans to focus on what matters: the final connection.
            </p>
          </div>

          {/* Interactive Visual Panel */}
          <div className="visual-panel relative aspect-square w-full max-w-md glass rounded-[3rem] border border-white/10 p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50" />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle2 className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold text-xl">Verification Complete</p>
                <p className="text-neutral-500 text-sm">System integrity: 100%</p>
              </div>
              
              {/* Dynamic Skill Tags Animation */}
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "System Design", "Behavioral", "React"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-neutral-400 uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Scanning Line Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scan" />
          </div>
        </div>

        {/* Right: Scrolling Steps */}
        <div ref={stepsContainerRef} className="space-y-32 py-20">
          {steps.map((step, i) => (
            <div key={i} className="workflow-step group space-y-8 pl-12 border-l border-white/10 relative">
              {/* Vertical Progress Line Overlay */}
              <div className="absolute top-0 left-[-1px] w-[1px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-1000" />
              
              {/* Step Number Bubble */}
              <div className="absolute top-0 left-[-20px] w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-sm font-bold text-neutral-500 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-colors duration-500">
                {i + 1}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-cyan-400">
                  <step.icon className="w-6 h-6" />
                  <span className="text-[10px] uppercase font-black tracking-[0.3em] text-neutral-500">Step 0{i + 1}</span>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:gap-4 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 text-cyan-500" />
                </button>
              </div>
            </div>
          ))}

          {/* Final CTA in Workflow */}
          <div className="workflow-step pt-10">
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-black border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-bold text-white">Ready to start the journey?</h4>
                <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-transform">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
