import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";
import ProductView from "@/components/shop/ProductView";
import { Metadata } from "next";

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
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description || `Buy ${product.name} from StyleByDivya. Premium quality fashion.`,
    alternates: {
      canonical: `/shop/${collection}/${productId}`,
    },
    openGraph: {
      title: `${product.name} | StyleByDivya`,
      description: product.description,
      url: `https://stylebydivya.in/shop/${collection}/${productId}`,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
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

  return <ProductView product={foundProduct} />;
}
