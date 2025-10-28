"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/button";
import { Card } from "@/components/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePanelsProps {
  faq: FAQItem[];
}

export function ServicePanels({ faq }: ServicePanelsProps) {
  const [activePanel, setActivePanel] = useState<"faq" | "cta">("faq");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[var(--color-border)] bg-surface p-1 text-sm font-semibold text-secondary shadow-soft">
        <button
          type="button"
          onClick={() => setActivePanel("faq")}
          className={`rounded-xl px-4 py-2 transition ${
            activePanel === "faq"
              ? "bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 text-primary shadow-soft"
              : "hover:text-primary"
          }`}
        >
          FAQs
        </button>
        <button
          type="button"
          onClick={() => setActivePanel("cta")}
          className={`rounded-xl px-4 py-2 transition ${
            activePanel === "cta"
              ? "bg-gradient-to-r from-secondary/20 via-accent/15 to-primary/20 text-primary shadow-soft"
              : "hover:text-primary"
          }`}
        >
          Tailored scope
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activePanel === "faq" ? (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Card tone="muted" elevated className="space-y-4 p-8">
              <h3 className="text-lg font-semibold text-primary">Frequently asked</h3>
              <div className="space-y-3 text-sm text-secondary">
                {faq.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-surface px-4 py-3 transition hover:border-primary/40"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-primary transition group-open:text-secondary">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm text-secondary/90">{item.answer}</p>
                  </details>
                ))}
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Card
              tone="vibrant"
              elevated
              className="space-y-4 bg-gradient-to-br from-white via-rose-50 to-amber-100/70 p-8"
            >
              <h4 className="text-lg font-semibold text-primary">Need a custom scope?</h4>
              <p className="text-sm text-secondary">
                Share your current channel mix, in-house capabilities, and velocity targets. We can shape an engagement
                from advisory through a fully embedded pod in under two weeks.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li>- Modular pricing aligned to ramp speed</li>
                <li>- Embedded or hybrid squads to plug capability gaps</li>
                <li>- Measurement and instrumentation accelerators</li>
              </ul>
              <Button href="/contact" variant="marketing" className="shadow-glow">
                Talk with our strategists
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

