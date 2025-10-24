import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { ElementType } from "react";

type IconName =
  | "SEO"
  | "PPC"
  | "Social"
  | "Content"
  | "Email"
  | "Analytics"
  | "SparklesIcon"
  | string;

export function resolveIcon(name: IconName): ElementType {
  const mapping: Record<string, ElementType> = {
    SEO: MagnifyingGlassIcon,
    PPC: CursorArrowRaysIcon,
    Social: UserGroupIcon,
    Content: DocumentTextIcon,
    Email: EnvelopeIcon,
    Analytics: ChartBarIcon,
    SparklesIcon: SparklesIcon
  };

  return mapping[name] ?? SparklesIcon;
}
