"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { CaseStudySummary } from "@/lib/content";
import { cn } from "@/lib/utils";

interface CaseStudiesStripProps {
  studies: CaseStudySummary[];
}

export function CaseStudiesStrip({ studies }: CaseStudiesStripProps) {
  if (!studies.length) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-bg to-surface py-28">
      <div className="absolute inset-y-0 left-1/2 hidden h-full w-[1200px] -translate-x-1/2 rounded-full bg-gradient-primary/20 blur-3xl lg:block" />
      <div className="container relative mx-auto flex flex-col gap-12 px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">Case studies</p>
            <h2 className="text-3xl font-semibold text-primary">Programs that compounded pipeline and retention</h2>
            <p className="text-base text-secondary">
              Explore a sample of programs we have piloted with B2B and ecommerce brands. Every engagement combines
              experimentation roadmaps, creative intelligence, and performance instrumentation.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
          >
            View all case studies
            <span aria-hidden>-&gt;</span>
          </Link>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 pr-6 snap-x snap-mandatory">
            {studies.map((study) => (
              <motion.article
                key={study.slug}
                whileHover={{ y: -12 }}
                className={cn(
                  "relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-surface/80 p-6 shadow-strong backdrop-blur",
                  "lg:w-[380px]"
                )}
              >
                <div className="relative h-48 overflow-hidden rounded-3xl">
                  <Image
                    src={study.coverImage}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 320px, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-secondary/25 to-accent/25" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                    <span>{study.client}</span>
                    <span>Case study</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{study.title}</h3>
                  <p className="text-sm text-secondary">{study.summary}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-secondary">
                  {study.metrics.slice(0, 3).map((metric) => (
                    <span
                      key={`${study.slug}-${metric.label}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-surface/60 px-3 py-1 font-medium text-primary"
                    >
                      <span className="text-muted">{metric.label}</span>
                      <span>{metric.value}</span>
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
                >
                  Read the story <span aria-hidden>-&gt;</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

