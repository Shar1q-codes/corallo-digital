"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { TestimonialCard } from "@/components/testimonial-card";

interface TestimonialsCarouselProps {
  testimonials: {
    quote: string;
    name: string;
    role: string;
  }[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const goTo = (direction: "next" | "prev") => {
    setIndex((prev) => {
      if (direction === "next") {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section aria-label="Testimonials" className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Testimonials
          </p>
          <h3 className="text-2xl font-semibold text-primary dark:text-white">What our partners say</h3>
        </div>
        <div className="hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => goTo("prev")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-slate-700 dark:text-slate-300"
            aria-label="Show previous testimonial"
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo("next")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-slate-700 dark:text-slate-300"
            aria-label="Show next testimonial"
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 w-6 rounded-full transition ${
                i === index ? "bg-accent" : "bg-slate-200 dark:bg-slate-700"
              }`}
              aria-label={`Show testimonial from ${item.name}`}
              aria-pressed={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
