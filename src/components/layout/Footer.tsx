"use client";

import { Globe, Mail, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-white/5 bg-[#050505] text-neutral-500 text-sm overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">Veraqon</span>
          </Link>
          <p className="max-w-xs leading-relaxed">
            The world's most advanced infrastructure for human intelligence and verified talent. Eliminating the friction of hiring.
          </p>
          <div className="flex gap-4">
            {[Globe, Mail, Zap].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Platform</h4>
          <ul className="space-y-4">
            {["Talent Pool", "AI Interviewer", "JD Verification", "Pre-Assessment"].map(link => (
              <li key={link}><Link href="#" className="hover:text-cyan-400 transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Resources</h4>
          <ul className="space-y-4">
            {["Documentation", "API Reference", "Case Studies", "Blog"].map(link => (
              <li key={link}><Link href="#" className="hover:text-cyan-400 transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Stay Updated</h4>
          <p className="text-xs leading-relaxed">Join 2,000+ companies receiving our weekly talent intelligence report.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-white text-black rounded-lg hover:bg-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-bold tracking-widest">© 2026 Veraqon Systems Inc. Built for Scale.</p>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/status" className="hover:text-white transition-colors">System Status</Link>
        </div>
      </div>
    </footer>
  );
}
