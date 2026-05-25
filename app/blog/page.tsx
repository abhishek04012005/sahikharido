import React from 'react';
import { getAllBlogs } from '@/lib/blogs';
import BlogCard from '@/components/BlogCard/BlogCard';

// In a real app, you would fetch this by slug from an API
export default function BlogListing() {
  const blogsData = getAllBlogs();

  return (
    <div className="container" style={{ padding: 'var(--space-3xl) var(--space-md)' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: 'var(--space-xl)' }}>
        Latest <span className="text-gradient">Articles</span>
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: 'var(--space-xl)' 
      }}>
        {blogsData.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
