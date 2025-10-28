import { Card } from "@/components/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <Card tone="muted" elevated className="flex h-full flex-col gap-6">
      <p className="text-lg font-medium leading-relaxed text-primary">"{quote}"</p>
      <div className="mt-auto space-y-1 text-sm text-secondary">
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-secondary">{role}</p>
      </div>
    </Card>
  );
}
