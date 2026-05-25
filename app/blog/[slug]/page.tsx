import { notFound } from 'next/navigation';
import BlogDetailClient from '@/components/blog/BlogDetailClient';
import { getBlogProducts } from '@/lib/blogProducts';
import { getBlogBySlug } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) return { title: 'Not Found' };

  return {
    title: blog.seo?.metaTitle ?? `${blog.title} | SahiKharido`,
    description: blog.seo?.metaDescription ?? blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const products = getBlogProducts(blog);

  return <BlogDetailClient blog={blog} products={products} />;
}
