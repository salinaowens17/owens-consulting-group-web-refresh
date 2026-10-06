# Project rules

- Declare shared favicon links in the root route and serve square, logo-derived icon files from public/ so all pages share a crawlable site identity.
- Derive sitemap URLs from required route staticData.sitemap decisions using the versioned helper; omit lastmod without authoritative page-specific timestamps to keep discovery accurate.
- Keep page-specific search and social metadata on leaf routes and shared defaults on the root to avoid conflicting descriptions.