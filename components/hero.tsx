"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

import type { Transition } from "framer-motion";

const shimmerTransition: Transition = {
  duration: 6,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut"
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-30%] h-[520px] bg-gradient-primary opacity-60 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.55] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_55%)]" />
      </div>

      <div className="container relative mx-auto grid gap-12 px-6 pb-28 pt-32 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:pb-36 lg:pt-40">
        <motion.div
          className="space-y-8 text-[color:var(--text-primary)]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            <Badge className="rounded-full bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-primary">
              Vibrant creative marketing studio
            </Badge>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl lg:text-[3.35rem]">
              Breakthrough growth for brands ready to move from campaigns to momentum.
            </h1>
            <p className="max-w-xl text-lg text-secondary">
              Corallo Digital embeds with your team to orchestrate full-funnel programs, shape demand narratives, and
              operationalize experimentation with accountable measurement.
            </p>
          </div>

          <motion.div
            variants={textVariants}
            custom={0.2}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" size="lg" variant="marketing" className="shadow-glow hover:shadow-strong">
              Book a strategy session
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore our services
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-secondary"
            variants={textVariants}
            custom={0.3}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["US", "UK", "IN"].map((geo) => (
                  <span
                    key={geo}
                    className="inline-grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-gradient-to-br from-white to-slate-100 text-xs font-semibold text-primary shadow-soft"
                  >
                    {geo}
                  </span>
                ))}
              </div>
              <span className="font-medium">
                Trusted by founders and CMOs across the US, UK, and India
              </span>
            </div>
            <div className="flex gap-6 text-xs uppercase tracking-[0.3em] text-muted">
              <span>SEO &amp; Paid Media</span>
              <span>Lifecycle</span>
              <span>Analytics</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative grid place-items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/60 shadow-strong backdrop-blur">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Corallo Digital team reviewing growth experiments"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-primary/45 via-secondary/35 to-accent/40 mix-blend-multiply"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.5, 0.8, 0.5] }
                }
                transition={shimmerTransition}
              />
            </div>

            {/* Floating cards intentionally hidden for now */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
