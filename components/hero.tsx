"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/button";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } })
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:px-8 lg:py-32">
        <motion.div
          className="lg:col-span-7"
          initial={"hidden"}
          animate={"visible"}
          variants={heroVariants}
          custom={0}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Full-funnel digital marketing studio
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
            Turn curiosity into compound growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
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
        <motion.div
          className="lg:col-span-5"
          initial={"hidden"}
          animate={"visible"}
          variants={heroVariants}
          custom={0.2}
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: "Avg. lift in qualified pipeline", value: "+42%" },
                { label: "Marketing-sourced revenue", value: "" },
                { label: "Experiments shipped annually", value: ">120" },
                { label: "Average ROAS", value: "3.6x" }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <p className="text-2xl font-semibold text-primary dark:text-white">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
