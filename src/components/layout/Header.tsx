"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass-pill w-full max-w-4xl" : "w-full max-w-7xl"
        }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Veraqon<span className="text-cyan-400">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            <Link href="#" className="hover:text-white transition-colors">Data engine</Link>
            <Link href="#" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="#" className="hover:text-white transition-colors">Research</Link>
            <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-neutral-200 transition-all group">
          Get in touch
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </motion.nav>
    </header>
  );
}
