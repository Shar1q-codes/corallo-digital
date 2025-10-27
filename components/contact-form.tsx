"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/button";
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

  const fieldClass = (field: string) =>
    cn(
      "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
      errors[field] && "border-red-500 focus-visible:ring-red-500"
    );

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={fieldClass("name")}
            autoComplete="name"
            required
          />
          {errors.name ? <p className="mt-2 text-xs text-red-500" role="alert">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className={fieldClass("email")}
            autoComplete="email"
            required
          />
          {errors.email ? <p className="mt-2 text-xs text-red-500" role="alert">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className={fieldClass("company")}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="website" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Website
          </label>
          <input
            id="website"
            name="website"
            value={formState.website}
            onChange={handleChange}
            className={fieldClass("website")}
            placeholder="https://"
          />
          {errors.website ? <p className="mt-2 text-xs text-red-500" role="alert">{errors.website}</p> : null}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className={cn(
            "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
            errors.message && "border-red-500 focus-visible:ring-red-500"
          )}
          required
        />
        {errors.message ? <p className="mt-2 text-xs text-red-500" role="alert">{errors.message}</p> : null}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit inquiry"}
        </Button>
        {feedback ? (
          <p
            className={cn(
              "text-sm",
              status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
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
