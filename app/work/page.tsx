import Image from "next/image";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";
import { getAllCaseStudies } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata({
  title: "Case Studies - Corallo Digital",
  description: "See how Corallo Digital orchestrates cross-channel marketing programs that compound growth."
});

export default async function WorkPage() {
  const studies = await getAllCaseStudies();

  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Case studies"
          title="Outcomes across SaaS, ecommerce, and fintech"
          description="Every engagement is measured against revenue, pipeline, and retention goals. Explore a sample of recent wins."
        />
      </Reveal>
      <div className="mt-16 space-y-16">
        {studies.map((study) => (
          <Reveal key={study.slug}>
            <Card id={study.slug} variant="outline" className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{study.client}</div>
                <h3 className="text-2xl font-semibold text-primary dark:text-white">{study.title}</h3>
                <p className="text-base text-slate-600 dark:text-slate-300">{study.summary}</p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {study.metrics.map((metric) => (
                    <li key={metric.label} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      <p className="text-2xl font-semibold text-primary dark:text-white">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em]">{metric.label}</p>
                    </li>
                  ))}
                </ul>
                <Button href={`/contact?ref=${study.slug}`} variant="secondary" className="w-full justify-center sm:w-auto">
                  Request teardown
                </Button>
              </div>
              <div className="relative h-72 overflow-hidden rounded-3xl">
                <Image
                  src={study.coverImage}
                  alt={`${study.client} campaign visuals`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
