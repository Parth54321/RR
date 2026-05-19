'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/40 p-10 backdrop-blur-xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300">AI Systems Engineer • Founder Energy</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Building next-generation AI products, autonomous systems, and intelligent digital infrastructure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          World-class personal brand platform engineered for recruiters, founders, investors, and research collaborators.
        </p>
      </motion.div>
    </section>
  );
}
