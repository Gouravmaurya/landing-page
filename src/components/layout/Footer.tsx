"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tighter">
            Veraqon<span className="text-cyan-400">.</span>
          </h3>
          <p className="max-w-xs">
            The world's most advanced infrastructure for human intelligence and verified talent.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Talent Pool</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Interviewer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Verification</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Veraqon. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
