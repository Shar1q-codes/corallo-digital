const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://corallo-digital.example.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");
export const siteUrlObj = new URL(siteUrl);
