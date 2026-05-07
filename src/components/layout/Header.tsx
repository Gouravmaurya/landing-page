"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Rachel AI", href: "#rachel" },
  { name: "Workflow", href: "#workflow" },
  { name: "FAQ", href: "#faq" },
];

function NavLink({ name, href }: { name: string, href: string }) {
  return (
    <Link href={href} className="relative group block py-1 overflow-hidden">
      {/* Base Layer (Grey) */}
      <span className="text-sm font-bold text-neutral-500 transition-colors">
        {name}
      </span>
      {/* Fill Layer (White) */}
      <span className="absolute inset-0 text-sm font-bold text-white w-0 group-hover:w-full transition-all duration-500 ease-[0.16,1,0.3,1] overflow-hidden whitespace-nowrap">
        {name}
      </span>
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "py-4" : "py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`relative flex items-center justify-between p-4 transition-all duration-700 rounded-3xl ${
            isScrolled ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white font-playfair uppercase">Veraqon</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <button className="text-sm font-bold text-neutral-500 hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all group active:scale-95">
              Start Hiring <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 lg:hidden"
          >
            <div className="bg-neutral-900 border border-white/10 rounded-[2.5rem] p-10 space-y-10 shadow-2xl">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold text-white hover:text-cyan-400 transition-colors font-playfair"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-10 border-t border-white/5 flex flex-col gap-4">
                <button className="w-full py-5 text-white font-black uppercase tracking-widest text-xs">Log in</button>
                <button className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs">
                  Start Hiring
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
