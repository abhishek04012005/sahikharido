import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ProductCard from '@/components/ProductCard/ProductCard';
import blogsData from '@/data/blogs.json';
import productsData from '@/data/products.json';
import styles from './BlogDetail.module.css';

// Type for the Page props in Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  
  if (!blog) return { title: 'Not Found' };

  return {
    title: `${blog.title} | SahiKharido`,
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Blogs', href: '/blog' },
    { label: blog.title }
  ];

  // Get products based on productIds from blog, or fallback to category
  let suggestedProducts = [];
  const blogWithProducts = blog as any;
  if (blogWithProducts.productIds && blogWithProducts.productIds.length > 0) {
    suggestedProducts = blogWithProducts.productIds
      .map((id: string) => productsData.find(p => p.id === id))
      .filter((p: any) => p !== undefined)
      .slice(0, 7);
  } else {
    // Fallback to category-based filtering if no productIds
    suggestedProducts = productsData.filter(p => p.category === blog.category);
    if (suggestedProducts.length < 7) {
      const otherProducts = productsData.filter(p => p.category !== blog.category);
      suggestedProducts = [...suggestedProducts, ...otherProducts].slice(0, 7);
    } else {
      suggestedProducts = suggestedProducts.slice(0, 7);
    }
  }

  // Since we have HTML in our mock data, we'll dangerouslySetInnerHTML it.
  // In a real app with a CMS, we might use a markdown renderer or structured text component.
  const contentHtml = (blog as any).content || `<p>${blog.excerpt}</p><p>Detailed content is coming soon.</p>`;

  return (
    <div className="container">
      <article className={styles.article}>
        <Breadcrumb items={breadcrumbItems} />
        
        <header className={styles.header}>
          <span className={styles.category}>{blog.category}</span>
          <h1 className={styles.title}>{blog.title}</h1>
          
          <div className={styles.meta}>
            <div className={styles.author}>
              <Image 
                src={blog.author.avatar} 
                alt={blog.author.name}
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.authorName}>{blog.author.name}</span>
            </div>
            
            <div className={styles.metaItem}>
              <Calendar size={16} />
              <time dateTime={blog.publishedAt}>
                {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
            
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>

        <div className={styles.featuredImage}>
          <Image 
            src={blog.image} 
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 800px"
            className={styles.image}
          />
        </div>

        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className={styles.shareSection}>
          <span className={styles.shareTitle}>Share this article:</span>
          <div className={styles.socialBtns}>
            <button className={styles.shareBtn} aria-label="Share on Facebook">
              <FaFacebook size={18} />
            </button>
            <button className={styles.shareBtn} aria-label="Share on Twitter">
              <FaTwitter size={18} />
            </button>
            <button className={styles.shareBtn} aria-label="Share on LinkedIn">
              <FaLinkedin size={18} />
            </button>
            <button className={styles.shareBtn} aria-label="Copy Link">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Suggested Products Section */}
        {suggestedProducts.length > 0 && (
          <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
              Products Mentioned & Suggested
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: 'var(--space-md)',
              maxWidth: '100%'
            }}>
              {suggestedProducts.map(product => (
                <div key={product.id} style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  padding: 'var(--space-md)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-background)',
                  transition: 'all var(--transition-normal)',
                  cursor: 'pointer',
                  ':hover': {
                    boxShadow: 'var(--shadow-md)',
                    borderColor: 'var(--color-primary)'
                  }
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    flexShrink: 0,
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-background-light)'
                  }}>
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      width={100}
                      height={100}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ margin: '0 0 var(--space-xs) 0', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>
                        {product.title}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-xs)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>⭐ {product.rating} ({product.reviewsCount})</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-sm)' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>{product.price}</span>
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        transition: 'background-color var(--transition-fast)'
                      }}>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
