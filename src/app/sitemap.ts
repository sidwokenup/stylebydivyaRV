import { MetadataRoute } from 'next'
import { products } from "@/lib/products";
import { SEO } from "@/lib/seo";
import { pingSearchEngines } from "@/lib/searchEnginePing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl;

  // Trigger search engine ping asynchronously (non-blocking)
  // In a real production build, this might be better placed in a build script or a webhook handler.
  // However, for this implementation, we'll trigger it when the sitemap is generated.
  if (process.env.NODE_ENV === 'production') {
    pingSearchEngines().catch(err => console.error("Failed to ping search engines:", err));
  }

  // Static routes
  const routes = [
    '',
    '/shop/wrapstyles',
    '/shop/saree-revival',
    '/shop/indo-western',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.collection}/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...productRoutes];
}
