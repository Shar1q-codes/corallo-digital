import type { ComponentType } from "react";

export type ServiceStatus = "Live" | "Private" | "Research" | "Alpha";

export interface ServiceCatalogItem {
  id: string;
  name: string;
  slug: string;
  category?: string;
  status: ServiceStatus;
  oneLiner: string;
  description: string;
  highlights: string[];
  websiteUrl: string;
  icon: ComponentType<{ className?: string }>;
}

const AnalyticsIcon: ServiceCatalogItem["icon"] = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 16.5V20" />
    <path d="M10 12v8" />
    <path d="M16 7v13" />
    <path d="M21 4v16" />
    <path d="M3 20h18" />
  </svg>
);

const AtsIcon: ServiceCatalogItem["icon"] = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h5" />
    <path d="M15 16l1.5 1.5L19 15" />
  </svg>
);

const TaxOpsIcon: ServiceCatalogItem["icon"] = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
    <path d="M7 8h10" />
    <path d="M7 12h10" />
    <path d="M7 16h6" />
    <circle cx="17.5" cy="16" r="1.3" />
  </svg>
);

export const servicesCatalog: ServiceCatalogItem[] = [
  {
    id: "analytics-dashboards",
    name: "Analytics Dashboards",
    slug: "analytics-dashboards",
    category: "Analytics",
    status: "Live",
    oneLiner: "Operational dashboards for real-time visibility across systems.",
    description:
      "A modular analytics layer that aggregates product and operational signals into clear dashboards. Designed for fast navigation, consistent definitions, and decision-grade visibility without noise.",
    highlights: [
      "Unified KPIs with consistent definitions",
      "Role-based views for operators",
      "Event + metric overlays for diagnosis",
      "Composable widgets and layouts",
      "Export-ready reporting surfaces"
    ],
    websiteUrl: "https://corallo.digital/analytics",
    icon: AnalyticsIcon
  },
  {
    id: "ats",
    name: "ATS",
    slug: "ats",
    category: "Operations",
    status: "Private",
    oneLiner: "A streamlined applicant tracking system for structured hiring workflows.",
    description:
      "An internal-grade ATS designed to keep hiring structured and auditable roles, stages, evaluations, and decisions in one place. Built for clarity, repeatability, and low-friction collaboration.",
    highlights: [
      "Pipeline stages with clear state",
      "Scorecards and evaluation notes",
      "Role-based access and review",
      "Searchable candidate history",
      "Decision log for traceability"
    ],
    websiteUrl: "https://corallo.digital/ats",
    icon: AtsIcon
  },
  {
    id: "taxops",
    name: "TaxOps",
    slug: "taxops",
    category: "Compliance Systems",
    status: "Research",
    oneLiner:
      "A systems-layer for audit-oriented tax operations and compliance workflows.",
    description:
      "TaxOps is a product line focused on structured tax operations, including document intake, classification, review workflows, and traceable outputs. Built as a system of modules that can evolve without breaking operating guarantees.",
    highlights: [
      "Document intake and structured extraction",
      "Workflow-driven review and findings",
      "Traceable outputs and audit trails",
      "Modular rule and policy layers",
      "Designed for long-term system evolution"
    ],
    websiteUrl: "https://corallo.digital/taxops",
    icon: TaxOpsIcon
  }
];



