import {
  ChartBarIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FunnelIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
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
  | "Web"
  | "AI"
  | "Brand"
  | "Funnel"
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
    Web: GlobeAltIcon,
    AI: CpuChipIcon,
    Brand: PaintBrushIcon,
    Funnel: FunnelIcon,
    SparklesIcon: SparklesIcon
  };

  return mapping[name] ?? SparklesIcon;
}
