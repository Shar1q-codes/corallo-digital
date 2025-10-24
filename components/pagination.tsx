import { Button } from "@/components/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="mt-8 flex flex-wrap items-center justify-between gap-4" aria-label="Pagination">
      {prevPage ? (
        <Button variant="secondary" href={`/blog?page=${prevPage}`}>
          Previous
        </Button>
      ) : (
        <Button variant="secondary" disabled className="pointer-events-none opacity-40">
          Previous
        </Button>
      )}
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Page {currentPage} of {totalPages}
      </p>
      {nextPage ? (
        <Button variant="secondary" href={`/blog?page=${nextPage}`}>
          Next
        </Button>
      ) : (
        <Button variant="secondary" disabled className="pointer-events-none opacity-40">
          Next
        </Button>
      )}
    </nav>
  );
}
