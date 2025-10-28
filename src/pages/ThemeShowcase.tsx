import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/card";
import { Input } from "@/components/input";
import { Link } from "@/components/link";

const brandSwatches = [
  { name: "Primary", token: "--color-primary", className: "bg-primary-400" },
  { name: "Secondary", token: "--color-secondary", className: "bg-secondary" },
  { name: "Accent", token: "--color-accent", className: "bg-accent" },
  { name: "Dark", token: "--color-dark", className: "bg-dark" },
  { name: "Light", token: "--color-light", className: "bg-light border border-[var(--color-border)]" },
  { name: "Muted", token: "--color-muted", className: "bg-[var(--color-muted)]" },
  { name: "Success", token: "--color-success", className: "bg-success" },
  { name: "Warning", token: "--color-warning", className: "bg-warning" },
  { name: "Danger", token: "--color-danger", className: "bg-danger" },
  { name: "Info", token: "--color-info", className: "bg-info" }
];

const gradients = [
  { name: "Primary Gradient", className: "bg-hero-1" },
  { name: "Accent Gradient", className: "bg-hero-2" },
  { name: "Sunrise Gradient", className: "bg-gradient-sunrise" }
];

export default function ThemeShowcase() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const buttonVariants = useMemo(
    () => ["primary", "secondary", "accent", "outline", "ghost", "marketing"] as const,
    []
  );

  return (
    <main className="min-h-screen bg-bg pb-24 text-primary-800">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pt-20 sm:px-10 lg:px-12">
        <header className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              Vibrant Creative System
            </p>
            <h1 className="mt-2 text-4xl font-bold text-primary-800 dark:text-primary-100">
              Theme Showcase
            </h1>
            <p className="mt-3 max-w-2xl text-secondary">
              Explore the token-driven UI kit powered by Corallo Digital’s Vibrant Creative palette.
              Components, utilities, and gradients respond to the light and dark surface tokens.
            </p>
          </div>
          <Button
            onClick={() => setIsDark((prev) => !prev)}
            pressed={isDark}
            variant="marketing"
            size="xl"
          >
            Toggle {isDark ? "Light" : "Dark"} Mode
          </Button>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-100">
            Brand Swatches
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {brandSwatches.map((swatch) => (
              <Card key={swatch.name} inset className="p-4">
                <div
                  className={`h-20 w-full rounded-2xl ${swatch.className}`}
                  aria-hidden="true"
                />
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-semibold text-primary-800 dark:text-primary-100">
                    {swatch.name}
                  </p>
                  <p className="text-xs font-medium text-secondary">
                    token: <code className="font-mono">{swatch.token}</code>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-100">
            Buttons
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card elevated className="space-y-4">
              <CardHeader className="mb-4">
                <CardTitle>Variants</CardTitle>
                <CardDescription>
                  Palette-driven interactions with focus rings, hover/active states, and disabled treatments.
                </CardDescription>
              </CardHeader>
              <CardBody className="flex flex-wrap gap-4">
                {buttonVariants.map((variant) => (
                  <Button key={variant} variant={variant} size="md">
                    {variant === "marketing" ? "Gradient CTA" : `${variant} button`}
                  </Button>
                ))}
              </CardBody>
              <CardFooter className="flex flex-wrap gap-4">
                <Button variant="primary" size="md" disabled>
                  Disabled
                </Button>
                <Button variant="outline" size="md" pressed>
                  Pressed state
                </Button>
              </CardFooter>
            </Card>
            <Card tone="vibrant" elevated className="space-y-6">
              <CardHeader className="text-primary-800">
                <CardTitle>Marketing CTA</CardTitle>
                <CardDescription>
                  Large, high-impact button with gradient fill, uppercase tracking, and glow shadow.
                </CardDescription>
              </CardHeader>
              <CardBody>
                <Button variant="marketing" size="xl" className="w-full justify-center">
                  Launch Campaign
                </Button>
              </CardBody>
              <CardFooter className="border-transparent">
                <p className="text-xs text-secondary">
                  Tip: combine <code className="font-mono">variant=&quot;marketing&quot;</code> with icons for persuasive hero CTAs.
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-100">
            Badges &amp; Links
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="space-y-4">
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Subtle, solid, and outline tone options for campaign and status labeling.</CardDescription>
              </CardHeader>
              <CardBody className="flex flex-wrap gap-3">
                <Badge variant="subtle">New</Badge>
                <Badge variant="solid">Live</Badge>
                <Badge variant="outline">Beta</Badge>
              </CardBody>
            </Card>
            <Card className="space-y-4">
              <CardHeader>
                <CardTitle>Links</CardTitle>
                <CardDescription>Underline offset, gradient hover, and focus ring align with the color tokens.</CardDescription>
              </CardHeader>
              <CardBody className="flex flex-col gap-3">
                <Link href="#default">Learn more about Corallo Digital</Link>
                <Link href="#always" underline="always">
                  Always underlined link style
                </Link>
                <Link href="#none" underline="none" className="text-primary-700 hover:text-primary-600">
                  Minimal link with custom color
                </Link>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-100">
            Inputs
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardBody className="space-y-4">
                <Input label="Name" placeholder="Jordan Smith" helperText="Use your preferred display name." />
                <Input label="Email" type="email" placeholder="you@company.com" />
              </CardBody>
            </Card>
            <Card>
              <CardBody className="space-y-4">
                <Input
                  label="Website"
                  placeholder="https://"
                  error="Please provide a valid URL."
                />
                <Input label="Budget" placeholder="$25,000" disabled helperText="Budget locked after final approval." />
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-100">
            Cards
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card tone="vibrant" elevated>
              <CardHeader>
                <CardTitle>Vibrant Campaign</CardTitle>
                <CardDescription>
                  Ideal for feature callouts and marketing highlights against light or dark surfaces.
                </CardDescription>
              </CardHeader>
              <CardBody>
                <p>
                  Harness color tokens by applying <code className="font-mono">tone=&quot;vibrant&quot;</code> for a gradient wash.
                </p>
                <p>
                  Pair with <code className="font-mono">Button</code> variants for contextual actions.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="accent" size="md">
                  Activate
                </Button>
              </CardFooter>
            </Card>
            <Card tone="muted">
              <CardHeader>
                <CardTitle>Muted Insight</CardTitle>
                <CardDescription>
                  Balanced neutrals support analytics or detail-heavy content without overwhelming visuals.
                </CardDescription>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>✓ WCAG AA contrast verified on surface tokens</li>
                  <li>✓ Adaptive shadows respect dark/light mode</li>
                  <li>✓ Borders reuse <code className="font-mono">--color-border</code></li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button variant="ghost" size="md">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-100">
            Gradients
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {gradients.map((gradient) => (
              <Card key={gradient.name} elevated inset>
                <div
                  className={`bg-center bg-cover ${gradient.className} rounded-3xl p-10 text-inverse shadow-strong`}
                >
                  <h3 className="text-lg font-semibold">{gradient.name}</h3>
                  <p className="mt-2 text-sm opacity-90">
                    Apply via <code className="font-mono">{gradient.className}</code> utility.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
