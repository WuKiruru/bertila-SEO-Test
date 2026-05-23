import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: Route[] = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/aviso-legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politica-cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accesibilidad", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: `${SITE_CONFIG.url}${path}`,
        ca: `${SITE_CONFIG.url}${path}`,
        "x-default": `${SITE_CONFIG.url}${path}`,
      },
    },
  }));
}
