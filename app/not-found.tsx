import Link from "next/link";

import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-32 text-center lg:px-8">
      <Reveal className="mx-auto max-w-xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">404</p>
        <h1 className="text-4xl font-semibold text-primary">We lost that constellation</h1>
        <p className="text-base text-secondary">
          The page you are looking for doesn't exist or has been moved. Let's get you back to exploring modern marketing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary">
            Start a project
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
