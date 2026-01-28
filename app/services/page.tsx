import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ecosystem - Corallo Digital",
  description:
    "Owned digital systems across analytics, operations, and compliance."
});

export default function ServicesPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-35%] h-[420px] bg-gradient-primary/25 blur-3xl" />
      <section className="container relative mx-auto px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <ServicesCatalog />
      </section>
    </div>
  );
}
