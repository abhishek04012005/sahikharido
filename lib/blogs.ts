import blogsData from '@/data/blogs.json';
import productsData from '@/data/products.json';

export type Product = (typeof productsData)[number];

export type Blog = (typeof blogsData)[number];

const blogs = blogsData as Blog[];

/** All blogs from blogs.json */
export function getAllBlogs(): Blog[] {
  return blogs;
}

/** Find one blog by URL slug */
export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

/** Load products for a blog using productIds → products.json */
export function getProductsForBlog(blog: Blog): Product[] {
  if (blog.productIds?.length) {
    return blog.productIds
      .map((id) => productsData.find((p) => p.id === id))
      .filter((p): p is Product => p !== undefined);
  }

  return productsData.filter((p) => p.category === blog.category).slice(0, 7);
}

/** Blog + its products — use this on the detail page */
export function getBlogWithProducts(slug: string) {
  const blog = getBlogBySlug(slug);
  if (!blog) return null;

  return {
    blog,
    products: getProductsForBlog(blog),
  };
}

/** Category label for product badges */
export function getCategoryLabel(category: string) {
  const labels: Record<string, string> = {
    kitchen: 'Kitchen',
    electronics: 'Electronics',
    fitness: 'Fitness',
    fashion: 'Fashion',
  };
  return labels[category] ?? category.charAt(0).toUpperCase() + category.slice(1);
}

export function getCategoryEmoji(category: string) {
  const emojis: Record<string, string> = {
    kitchen: '🔥',
    electronics: '💻',
    fitness: '💪',
    fashion: '⌚',
  };
  return emojis[category] ?? '⭐';
}

/** Estimated original price for discount display */
export function getOriginalPrice(price: string, isDeal = false) {
  const amount = parseFloat(price.replace(/[^0-9.]/g, ''));
  if (Number.isNaN(amount)) return price;
  const prefix = price.trim().startsWith('₹') ? '₹' : '$';
  const multiplier = isDeal ? 1.3 : 1.2;
  return `${prefix}${(amount * multiplier).toFixed(2)}`;
}

export function getDiscountPercent(price: string, originalPrice: string) {
  const current = parseFloat(price.replace(/[^0-9.]/g, ''));
  const original = parseFloat(originalPrice.replace(/[^0-9.]/g, ''));
  if (Number.isNaN(current) || Number.isNaN(original) || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
}
