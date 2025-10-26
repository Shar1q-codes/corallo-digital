"use client";

import { useState } from "react";

import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage("Thanks for subscribing! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-12 flex-1 rounded-full border border-slate-700 bg-slate-900 px-4 text-sm text-slate-100 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          required
        />
        <Button type="submit" className="h-12 px-6">
          Join Newsletter
        </Button>
      </div>
      {status !== "idle" && message ? (
        <p
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "text-sm",
            status === "error" ? "text-red-400" : "text-green-400"
          )}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
