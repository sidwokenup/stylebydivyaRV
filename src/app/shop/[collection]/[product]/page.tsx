import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";
import ProductView from "@/components/shop/ProductView";
import { Metadata } from "next";
import { SEO } from "@/lib/seo";

export const revalidate = 86400; // Revalidate every 24 hours

interface ProductPageProps {
  params: Promise<{
    collection?: string;
    product?: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { collection, product: productId } = await params;

  if (!collection || !productId) return {};

  const product = getProduct(collection, productId);

  if (!product) {
    return {
      title: "Product Not Found | " + SEO.siteName,
    };
  }

  const url = `${SEO.siteUrl}/shop/${collection}/${productId}`;

  return {
    title: `${product.name} | ${SEO.siteName}`,
    description: product.description || SEO.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} | ${SEO.siteName}`,
      description: product.description || SEO.description,
      url: url,
      siteName: SEO.siteName,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description || SEO.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { collection, product } = await params;

  if (!collection || !product) {
    notFound();
  }

  const foundProduct = getProduct(collection, product);

  if (!foundProduct) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": foundProduct.name,
            "image": foundProduct.images,
            "description": foundProduct.description,
            "brand": {
              "@type": "Brand",
              "name": SEO.siteName
            },
            "offers": {
              "@type": "Offer",
              "url": `${SEO.siteUrl}/shop/${collection}/${product}`,
              "priceCurrency": "INR",
              "price": foundProduct.price,
              "availability": foundProduct.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
            }
          }),
        }}
      />
      <ProductView product={foundProduct} />
    </>
  );
}
