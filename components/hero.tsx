"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/button";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } })
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          className="max-w-3xl"
          initial={"hidden"}
          animate={"visible"}
          variants={heroVariants}
          custom={0}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            Full-funnel digital marketing studio
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn curiosity into compound growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            We help modern brands orchestrate paid, organic, and lifecycle programs that work as hard as your product.
            Every experiment ships with performance analytics so you can scale confidently.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Proposal
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
