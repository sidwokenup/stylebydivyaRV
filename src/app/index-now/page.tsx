import Link from "next/link";
import { products } from "@/lib/products";
import { SEO } from "@/lib/seo";

export const metadata = {
  title: "Crawl Hub | Style By Divya",
  description: "Internal crawl hub for faster indexing of Style By Divya products.",
  robots: "noindex, follow", // We want Google to follow links but not index this page itself
};

export default function IndexNowPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Style By Divya - Product Crawl Hub</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-blue-600 hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/saree-revival" className="text-blue-600 hover:underline">
                Saree Revival
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">All Products ({products.length})</h2>
          <ul className="space-y-3">
            {products.map((product) => (
              <li key={product.id}>
                <Link 
                  href={`/shop/${product.collection}/${product.id}`}
                  className="text-blue-600 hover:underline block"
                >
                  <span className="font-medium text-black">{product.name}</span>
                  <span className="text-gray-500 text-sm ml-2">
                     → /shop/{product.collection}/{product.id}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
