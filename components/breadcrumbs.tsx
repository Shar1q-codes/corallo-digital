import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-secondary">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="inline-flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="transition hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
            {!isLast ? <span className="text-muted">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}

