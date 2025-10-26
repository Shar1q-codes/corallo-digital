"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } })
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:px-8 lg:py-32">
        <motion.div
          className="lg:col-span-6"
          initial={"hidden"}
          animate={"visible"}
          variants={heroVariants}
          custom={0}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            Full-funnel digital marketing studio
          </p>
          <Badge className="mt-6 w-fit bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/40">
            Built for scaling small businesses
          </Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn curiosity into compound growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            We help small businesses orchestrate paid, organic, and lifecycle programs that work as hard as your
            product. Every experiment ships with performance analytics so you can scale confidently.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Proposal
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative lg:col-span-6"
          initial={"hidden"}
          animate={"visible"}
          variants={heroVariants}
          custom={0.1}
        >
          <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft sm:h-96 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
              alt="Team reviewing digital marketing performance dashboards in a modern workspace"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
