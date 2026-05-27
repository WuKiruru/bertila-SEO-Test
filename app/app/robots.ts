import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        // Public content
        allow: [
          "/",
        ],

        // Technical/internal routes
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/tmp/",
          "/search/",
        ],
      },

      // AI crawler handling
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "CCBot",
          "anthropic-ai",
        ],
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
        ],
      },
    ],

    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
