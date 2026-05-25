import blogsData from '@/data/blogs.json';

export interface BlogAuthor {
  name: string;
  avatar: string;
  bio?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  category: string;
  tags?: string[];
  readTime: string;
  views?: number;
  likes?: number;
  comments?: number;
  featured?: boolean;
  productIds?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  relatedPosts?: string[];
}

const blogs = blogsData as Blog[];

export function getAllBlogs(): Blog[] {
  return blogs;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((blog) => blog.slug);
}
