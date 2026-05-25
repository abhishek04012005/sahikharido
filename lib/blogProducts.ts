import productsData from '@/data/products.json';
import type { Blog } from '@/lib/blogs';

type Product = (typeof productsData)[number];

export interface BlogProduct {
  id: string;
  type: string;
  typeEmoji: string;
  title: string;
  brand: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  affiliateLink: string;
}

const CATEGORY_META: Record<string, { emoji: string; label: string }> = {
  kitchen: { emoji: '🔥', label: 'Kitchen' },
  electronics: { emoji: '💻', label: 'Electronics' },
  fitness: { emoji: '💪', label: 'Fitness' },
  fashion: { emoji: '⌚', label: 'Fashion' },
};

function getCategoryMeta(category: string) {
  return CATEGORY_META[category] ?? { emoji: '⭐', label: category.charAt(0).toUpperCase() + category.slice(1) };
}

function estimateOriginalPrice(price: string, isDeal: boolean): string {
  const numeric = parseFloat(price.replace(/[^0-9.]/g, ''));
  if (Number.isNaN(numeric)) return price;
  const multiplier = isDeal ? 1.3 : 1.2;
  const prefix = price.trim().startsWith('₹') ? '₹' : '$';
  return `${prefix}${(numeric * multiplier).toFixed(2)}`;
}

function mapProduct(product: Product): BlogProduct {
  const meta = getCategoryMeta(product.category);
  const featureText = product.features?.length
    ? product.features.join('. ')
    : `${product.brand} delivers reliable performance for everyday use.`;

  return {
    id: product.id,
    type: meta.label,
    typeEmoji: meta.emoji,
    title: product.title,
    brand: product.brand,
    price: product.price,
    originalPrice: estimateOriginalPrice(product.price, product.isDeal ?? false),
    rating: product.rating,
    reviewCount: product.reviewsCount,
    image: product.image,
    description: [
      product.description,
      featureText,
      `A top pick in our ${meta.label.toLowerCase()} category with strong ratings from verified buyers.`,
    ],
    pros: product.pros ?? ['Great quality', 'Good value for money'],
    cons: product.cons ?? ['Compare specs before buying'],
    bestFor: [
      `🛒 ${meta.label} Shoppers`,
      '⭐ Top Rated',
      '💰 Best Value',
      '✅ Expert Pick',
    ],
    affiliateLink: product.affiliateLink,
  };
}

export function getBlogProducts(blog: Blog): BlogProduct[] {
  let products: Product[] = [];

  if (blog.productIds?.length) {
    products = blog.productIds
      .map((id) => productsData.find((p) => p.id === id))
      .filter((p): p is Product => p !== undefined);
  }

  if (products.length === 0) {
    products = productsData.filter((p) => p.category === blog.category);
  }

  if (products.length < 7) {
    const extras = productsData.filter(
      (p) => p.category !== blog.category && !products.some((existing) => existing.id === p.id)
    );
    products = [...products, ...extras];
  }

  return products.slice(0, 7).map(mapProduct);
}

export function getDiscountPercent(price: string, originalPrice: string): number {
  const current = parseFloat(price.replace(/[^0-9.]/g, ''));
  const original = parseFloat(originalPrice.replace(/[^0-9.]/g, ''));
  if (Number.isNaN(current) || Number.isNaN(original) || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
}
