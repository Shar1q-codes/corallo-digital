"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Input } from "@/components/input";
import { ServiceModal } from "@/components/services/ServiceModal";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServiceCatalogItem, servicesCatalog } from "@/data/services";

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "by",
  "for",
  "from",
  "in",
  "into",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with"
]);

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const tokenize = (value: string) =>
  normalizeText(value)
    .split(" ")
    .filter((token) => token && token.length >= 2 && !STOP_WORDS.has(token));

const buildInitials = (value: string) =>
  tokenize(value)
    .map((token) => token[0])
    .join("");

type IndexedService = ServiceCatalogItem & {
  _search: {
    name: string;
    category: string;
    oneLiner: string;
    description: string;
    highlights: string;
    initials: string;
    tokens: string[];
  };
};

const indexServices = (items: ServiceCatalogItem[]): IndexedService[] =>
  items.map((service) => {
    const highlightsText = service.highlights.join(" ");
    const tokens = Array.from(
      new Set([
        ...tokenize(service.name),
        ...tokenize(service.category ?? ""),
        ...tokenize(service.oneLiner),
        ...tokenize(service.description),
        ...tokenize(highlightsText)
      ])
    );

    return {
      ...service,
      _search: {
        name: normalizeText(service.name),
        category: normalizeText(service.category ?? ""),
        oneLiner: normalizeText(service.oneLiner),
        description: normalizeText(service.description),
        highlights: normalizeText(highlightsText),
        initials: buildInitials(service.name),
        tokens
      }
    };
  });

const scoreService = (
  service: IndexedService,
  query: string,
  tokens: string[]
) => {
  if (!query && tokens.length === 0) return 0;

  let score = 0;
  const { name, category, oneLiner, description, highlights, initials } =
    service._search;

  if (query) {
    const isShort = query.length < 2;
    if (isShort) {
      if (name.startsWith(query)) score += 80;
      if (category.startsWith(query)) score += 30;
    } else {
      if (name.includes(query)) score += 80;
      if (category.includes(query)) score += 30;
      if (oneLiner.includes(query)) score += 22;
      if (description.includes(query)) score += 14;
      if (highlights.includes(query)) score += 10;
      if (initials.includes(query)) score += 28;
    }
  }

  if (tokens.length > 0) {
    let matchedTokens = 0;
    tokens.forEach((token) => {
      if (
        name.includes(token) ||
        category.includes(token) ||
        oneLiner.includes(token) ||
        description.includes(token) ||
        highlights.includes(token)
      ) {
        matchedTokens += 1;
        score += 6;
      }

      if (name.startsWith(token)) score += 10;
      if (category.startsWith(token)) score += 6;
      if (oneLiner.startsWith(token)) score += 4;
    });

    if (matchedTokens === tokens.length) score += 14;
  }

  return score;
};

export function ServicesCatalog() {
  const [query, setQuery] = useState("");
  const [activeService, setActiveService] = useState<ServiceCatalogItem | null>(
    null
  );
  const deferredQuery = useDeferredValue(query);

  const indexed = useMemo(() => indexServices(servicesCatalog), []);

  const filtered = useMemo(() => {
    const normalized = normalizeText(deferredQuery);
    const tokens = tokenize(deferredQuery);
    if (!normalized && tokens.length === 0) {
      return indexed.map(({ _search, ...service }) => service);
    }

    const scored = indexed
      .map((service) => ({
        service,
        score: scoreService(service, normalized, tokens)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.service.name.localeCompare(b.service.name);
      })
      .map(({ service }) => {
        const { _search, ...rest } = service;
        return rest;
      });

    return scored;
  }, [deferredQuery, indexed]);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Ecosystem
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-primary">Ecosystem</h1>
          <p className="text-base text-secondary">
            Owned digital systems, built, operated, and evolved under one
            operating rhythm.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full max-w-lg">
          <Input
            label="Search"
            placeholder="Search by name, category, or focus"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setQuery("");
              }
            }}
            helperText={
              deferredQuery.trim().length > 0
                ? deferredQuery.trim().length < 2
                  ? "Type at least 2 characters to filter."
                  : `${filtered.length} result${filtered.length === 1 ? "" : "s"}`
                : "Search across names, categories, and highlights."
            }
            endAdornment={
              query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded-full border border-transparent p-1 text-muted transition hover:text-secondary"
                  aria-label="Clear search"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              ) : null
            }
          />
        </div>
      </div>

      <ServicesGrid services={filtered} onOpen={setActiveService} />

      {deferredQuery.trim() && filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-surface/70 p-6 text-sm text-secondary">
          <p className="font-medium text-primary">No matches found.</p>
          <p className="mt-2 text-secondary">
            Try searching by product name (e.g. “analytics”, “hire”, “tax”) or
            a category like “operations”.
          </p>
        </div>
      ) : null}

      <ServiceModal
        service={activeService}
        open={Boolean(activeService)}
        onClose={() => setActiveService(null)}
      />
    </div>
  );
}
