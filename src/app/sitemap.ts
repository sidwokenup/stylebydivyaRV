import { MetadataRoute } from 'next'
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stylebydivya.in';

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
