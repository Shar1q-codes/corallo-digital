"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().optional(),
  website: z.string().url("Please enter a valid URL.").optional(),
  message: z.string().min(10, "Please share a bit more detail.")
});

export function ContactForm({ className }: { className?: string }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback(null);
    const result = contactSchema.safeParse({
      name: formState.name,
      email: formState.email,
      company: formState.company || undefined,
      website: formState.website ? formState.website : undefined,
      message: formState.message
    });

    if (!result.success) {
      const fieldErrors = Object.fromEntries(
        result.error.issues.map((issue) => [issue.path[0], issue.message])
      );
      setErrors(fieldErrors);
      setStatus("error");
      setFeedback("Please fix the highlighted fields.");
      return;
    }

    setErrors({});

    const mailtoSubject = "New project inquiry";
    const mailtoBody = [
      `Name: ${result.data.name}`,
      `Email: ${result.data.email}`,
      `Company: ${result.data.company ?? "n/a"}`,
      `Website: ${result.data.website ?? "n/a"}`,
      "",
      result.data.message
    ].join("\n");

    setStatus("success");
    setFeedback("Thanks! Your email client should open. If it doesn't, email us at hello@corallodigital.com.");
    setFormState({ name: "", email: "", company: "", website: "", message: "" });

    if (typeof window !== "undefined") {
      window.location.href = `mailto:hello@corallodigital.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          autoComplete="name"
          required
          placeholder="Hi, I'm..."
          error={errors.name}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          autoComplete="email"
          required
          placeholder="you@company.com"
          error={errors.email}
        />
        <Input
          label="Company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          autoComplete="organization"
          placeholder="Company or team"
        />
        <Input
          label="Website"
          name="website"
          value={formState.website}
          onChange={handleChange}
          placeholder="https://"
          error={errors.website}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className={cn(
            "w-full rounded-2xl border border-[var(--color-border)] bg-surface px-4 py-3 text-sm text-primary shadow-soft/0 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
            errors.message && "border-danger focus-visible:ring-danger"
          )}
          required
          placeholder="Tell us about your growth goals, current experiments, or biggest blockers..."
        />
        {errors.message ? <p className="mt-2 text-xs text-danger" role="alert">{errors.message}</p> : null}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit inquiry"}
        </Button>
        {feedback ? (
          <p
            className={cn(
              "text-sm",
              status === "success" ? "text-success" : "text-danger"
            )}
            role="status"
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
