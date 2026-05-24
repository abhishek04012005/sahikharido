import React from 'react';
import Hero from '@/components/Hero/Hero';
import ProductCard from '@/components/ProductCard/ProductCard';
import BlogCard from '@/components/BlogCard/BlogCard';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import blogsData from '@/data/blogs.json';

export default function Home() {
  const trendingProducts = productsData.filter(p => p.isTrending).slice(0, 4);
  const latestBlogs = blogsData.slice(0, 3); // Get top 3 latest blogs

  return (
    <>
      <Hero />
      
      {/* Trending Products Section */}
      <section className="container" style={{ padding: 'var(--space-3xl) var(--space-md)' }}>
        <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: 'var(--space-sm)' }}>
            Trending Products
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Discover what's hot right now based on our expert reviews.</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: 'var(--space-lg)' 
        }}>
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Grid (Simplified for now) */}
      <section style={{ backgroundColor: 'var(--color-background-light)', padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
              Shop by Category
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: 'var(--space-md)' 
          }}>
            {categoriesData.map(category => (
              <a 
                key={category.id}
                href={`/categories/${category.slug}`}
                className="category-card-simple"
                style={{
                  backgroundColor: 'var(--color-background)',
                  padding: 'var(--space-xl)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  transition: 'transform var(--transition-fast)'
                }}
              >
                <h3 style={{ fontWeight: 600 }}>{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="container" style={{ padding: 'var(--space-3xl) var(--space-md)' }}>
        <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: 'var(--space-sm)' }}>
            Latest Buying Guides & Reviews
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Expert advice to help you make the right choice.</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: 'var(--space-xl)' 
        }}>
          {latestBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
