import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export function PricingCard({ name, price, description, highlights, featured = false }: PricingCardProps) {
  return (
    <Card
      variant={featured ? "default" : "outline"}
      className={cn(
        "flex h-full flex-col gap-6",
        featured && "border border-accent/30 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900"
      )}
    >
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-primary dark:text-white">{name}</h3>
        <p className="text-4xl font-semibold text-primary dark:text-white">{price}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button href="/contact" variant={featured ? "primary" : "secondary"} className="w-full justify-center">
          Get started
        </Button>
      </div>
    </Card>
  );
}
