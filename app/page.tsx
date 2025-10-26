import Image from "next/image";

import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { createMetadata } from "@/lib/seo";
import { getAllCaseStudies, getAllServices, getLatestBlogPosts } from "@/lib/content";

export const metadata = createMetadata({
  title: "Corallo Digital - Growth marketing that compounds",
  description:
    "Full-funnel digital marketing for ambitious brands. Explore our services across SEO, paid media, lifecycle, and analytics."
});

export default async function HomePage() {
  const [services, studies, posts] = await Promise.all([
    getAllServices(),
    getAllCaseStudies(),
    getLatestBlogPosts()
  ]);

  const testimonials = [
    {
      quote:
        "Corallo unlocked a 40% lift in marketing qualified pipeline within the first quarter. Their structured experimentation is unmatched.",
      name: "Maya Collins",
      role: "VP Marketing, Northwind"
    },
    {
      quote:
        "From creative production to paid media execution, the team behaves like an embedded growth squad. We finally have real attribution.",
      name: "Leo Park",
      role: "Head of Growth, Pulse Apparel"
    },
    {
      quote:
        "Our Series B launch exceeded revenue targets by 2x thanks to their lifecycle flows and analytics automation.",
      name: "Riya Desai",
      role: "CMO, HarborTech"
    }
  ];

  const differentiators = [
    {
      title: "Strategy embedded in your team",
      description:
        "We align channel plans with your internal rituals so every launch, sprint, and retro ladders up to shared priorities."
    },
    {
      title: "Experimentation with accountability",
      description:
        "Test roadmaps include goals, owners, and instrumentation - no vanity projections, just clear learning agendas."
    },
    {
      title: "Creative and analytics in one loop",
      description:
        "Design, copy, and measurement collaborate from day one to keep messaging, data, and insights continuously in sync."
    },
    {
      title: "Transparent performance rhythms",
      description:
        "Weekly working sessions focus on what shipped, what we learned, and the next most leveraged moves for your funnel."
    }
  ];

  const featuredStudies = studies.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="container mx-auto px-6 py-24 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Integrated services built for modern marketing teams"
            description="Every engagement is tailored to your funnel architecture, cross-functional workflows, and growth milestones."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Differentiators"
              title="What sets Corallo apart"
          description="Operational rigor, deep channel expertise, and a partner mindset keep every experiment aligned with your north-star metrics."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item) => (
          <Reveal key={item.title}>
            <Card variant="outline" className="h-full space-y-3">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

      <section className="container mx-auto px-6 py-24 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Selected work"
            title="Case studies engineered for impact"
            description="A glimpse into the cross-channel programs we deploy to unlock pipeline, revenue, and brand equity."
          >
            <Button href="/work" variant="secondary">
              See all case studies
            </Button>
          </SectionHeader>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredStudies.map((study) => (
            <Reveal key={study.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
                  <Image
                    src={study.coverImage}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{study.client}</div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{study.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{study.summary}</p>
                  <Button href={`/work#${study.slug}`} variant="ghost" className="mt-auto justify-center">
                    View project
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <TestimonialsCarousel testimonials={testimonials} />
            <Card variant="inset" className="bg-white/10 p-10">
              <h3 className="text-3xl font-semibold">Performance dashboarding that leadership loves.</h3>
              <p className="mt-4 text-base text-slate-200">
                Live dashboards blend platform data, CRM visibility, and ROI modeling so revenue teams make calls with confidence.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-200">
                <li>- Channel mix modeling updated weekly</li>
                <li>- Experiment scorecards with next actions</li>
                <li>- Executive-ready reporting in under 5 minutes</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Flexible engagements for every growth stage"
            description="Choose the right level of partnership. All plans include strategy, measurement, and dedicated channel owners."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <PricingCard
              name="Starter"
              price="₹45,000/mo"
              description="Perfect for seed to Series A teams establishing growth foundations."
              highlights={["Growth roadmap & diagnostics", "One primary channel", "Weekly standups"]}
            />
          </Reveal>
          <Reveal>
            <PricingCard
              name="Growth"
              price="₹80,000/mo"
              description="Multi-channel management with embedded experimentation squad."
              highlights={["Integrated paid + lifecycle", "Creative testing sprints", "Experiment backlog management"]}
              featured
            />
          </Reveal>
          <Reveal>
            <PricingCard
              name="Scale"
              price="₹1,20,000/mo"
              description="Enterprise-grade support with analytics automation and GTM advisory."
              highlights={["Full funnel ownership", "Analytics & attribution hub", "Executive enablement"]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Insights"
              title="Latest thinking from the lab"
              description="Frameworks, playbooks, and benchmarks to keep you ahead of platform shifts."
            >
              <Button href="/blog" variant="secondary">
                Explore all posts
              </Button>
            </SectionHeader>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <Reveal key={post.slug}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-200 bg-white px-8 py-16 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Ready to accelerate?
              </p>
              <h3 className="text-3xl font-semibold text-primary dark:text-white">
                Book a growth working session with our strategists.
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Walk away with channel priorities, quick wins, and a roadmap aligned to revenue goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Get a Proposal</Button>
                <Button href="/services" variant="secondary">
                  View Services
                </Button>
              </div>
            </div>
            <Card variant="outline" className="bg-slate-50 p-8 dark:bg-slate-800">
              <h4 className="text-lg font-semibold text-primary dark:text-white">Session agenda</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>1. Funnel & KPI audit</li>
                <li>2. Channel mix recommendations</li>
                <li>3. Experiment backlog prioritization</li>
                <li>4. Measurement plan alignment</li>
              </ul>
            </Card>
          </div>
        </Reveal>
      </section>
    </>
  );
}
