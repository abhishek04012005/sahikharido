import { notFound } from 'next/navigation';
import BlogDetailClient from '@/components/blog/BlogDetailClient';
import { getBlogWithProducts } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = getBlogWithProducts(slug);

  if (!data) return { title: 'Not Found' };

  const { blog } = data;

  return {
    title: blog.seo?.metaTitle ?? `${blog.title} | SahiKharido`,
    description: blog.seo?.metaDescription ?? blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getBlogWithProducts(slug);

  if (!data) {
    notFound();
  }

  return <BlogDetailClient blog={data.blog} products={data.products} />;
}
