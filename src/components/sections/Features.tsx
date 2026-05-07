"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Mic2, 
  FileSearch, 
  ShieldCheck, 
  Users, 
  Zap,
  ArrowUpRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Rachel — AI Interviewer",
    description: "Real-time voice AI conducting personalized technical and behavioral interviews. High-fidelity voice synthesis and instant speech recognition.",
    icon: Mic2,
    size: "tall", // Spans 1 col, 2 rows
    color: "rgba(0, 255, 255, 0.15)",
    iconColor: "text-cyan-400"
  },
  {
    id: 2,
    title: "Resume Intelligence",
    description: "Automated parsing and skill extraction. AI analyzes career trajectories and role-fit in seconds.",
    icon: FileSearch,
    size: "square", // Spans 1 col, 1 row
    color: "rgba(168, 85, 247, 0.15)",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    title: "Integrity Monitoring",
    description: "Camera-proctored sessions with AI-driven behavior analysis and screen activity tracking.",
    icon: ShieldCheck,
    size: "square", // Spans 1 col, 1 row
    color: "rgba(249, 115, 22, 0.15)",
    iconColor: "text-orange-400"
  },
  {
    id: 4,
    title: "Talent Matching Engine",
    description: "Our proprietary matching engine connects verified candidates to job posts based on deep technical metadata and performance scores.",
    icon: Users,
    size: "wide", // Spans 2 cols, 1 row
    color: "rgba(34, 197, 94, 0.15)",
    iconColor: "text-green-400"
  }
];

function FeatureCard({ feature }: { feature: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(spotlightRef.current, {
      opacity: 1,
      x: x - 150,
      y: y - 150,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const onMouseLeave = () => {
    if (!spotlightRef.current) return;
    gsap.to(spotlightRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`feature-card group relative p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col justify-between
        ${feature.size === "tall" ? "md:row-span-2" : ""}
        ${feature.size === "wide" ? "md:col-span-2" : ""}
      `}
    >
      <div 
        ref={spotlightRef}
        className="absolute pointer-events-none opacity-0 transition-opacity duration-300 w-[300px] h-[300px] rounded-full blur-[100px] z-0"
        style={{ background: feature.color }}
      />

      <div className="relative z-10 space-y-8">
        <div className={`w-14 h-14 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-all duration-500`}>
          <feature.icon className="w-7 h-7" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair tracking-tight leading-tight">
            {feature.title}
          </h3>
          <p className="text-neutral-500 text-base md:text-lg leading-relaxed group-hover:text-neutral-400 transition-colors line-clamp-4">
            {feature.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/5">
        <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">Verified System</span>
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-40 px-6 bg-black relative" id="features">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20">
        
        {/* Sticky Left Label */}
        <div className="lg:sticky lg:top-40 lg:h-fit space-y-6">
          <div className="inline-flex items-center gap-2 text-cyan-400">
            <Zap className="w-4 h-4 fill-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Core Intelligence</span>
          </div>
          <h2 className="text-4xl font-bold text-white font-playfair leading-tight">
            Proprietary AI <br />
            <span className="text-neutral-700 italic underline decoration-cyan-500/30">for talent.</span>
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-[240px]">
            The foundation for a global talent economy, powered by high-fidelity AI verification.
          </p>
        </div>

        {/* Right Content: Optimized Bento Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[360px]">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
