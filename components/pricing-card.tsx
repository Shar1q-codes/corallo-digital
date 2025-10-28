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
      tone={featured ? "vibrant" : "muted"}
      elevated
      className={cn(
        "flex h-full flex-col gap-6",
        featured && "bg-gradient-sunrise text-inverse shadow-strong"
      )}
    >
      <div className="space-y-3">
        <h3 className={cn("text-xl font-semibold", featured ? "text-inverse" : "text-primary")}>{name}</h3>
        <p className={cn("text-4xl font-semibold", featured ? "text-inverse" : "text-primary")}>{price}</p>
        <p className={cn("text-sm", featured ? "text-inverse/80" : "text-secondary")}>{description}</p>
      </div>
      <ul className={cn("space-y-3 text-sm", featured ? "text-inverse/85" : "text-secondary")}>
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <CheckCircleIcon
              className={cn(
                "mt-0.5 h-4 w-4",
                featured ? "text-inverse" : "text-accent"
              )}
              aria-hidden="true"
            />
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
