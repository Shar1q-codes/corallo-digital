import { Card } from "@/components/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <Card variant="outline" className="flex h-full flex-col gap-6">
      <p className="text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200">"{quote}"</p>
      <div className="mt-auto space-y-1 text-sm text-slate-600 dark:text-slate-300">
        <p className="font-semibold text-primary dark:text-white">{name}</p>
        <p>{role}</p>
      </div>
    </Card>
  );
}
