import Hero from '@/components/Hero/Hero';
import ProductCard from '@/components/ProductCard/ProductCard';
import BlogCard from '@/components/BlogCard/BlogCard';
import productsData from '@/data/products.json';
import { getAllBlogs } from '@/lib/blogs';

export default function Home() {
  const trendingProducts = productsData.filter((p) => p.isTrending).slice(0, 4);
  const latestBlogs = getAllBlogs();

  return (
    <>
      <Hero />

      <section className="container" style={{ padding: 'var(--space-3xl) var(--space-md)' }}>
        <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-secondary)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Trending Products
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Discover what&apos;s hot right now based on our expert reviews.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: 'var(--space-3xl) var(--space-md)' }}>
        <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-secondary)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Latest Buying Guides & Reviews
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Expert advice to help you make the right choice.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
