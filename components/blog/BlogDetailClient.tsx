'use client';

import React, { useEffect, useState } from 'react';
import type { Blog, Product } from '@/lib/blogs';
import {
  getCategoryEmoji,
  getCategoryLabel,
  getDiscountPercent,
  getOriginalPrice,
} from '@/lib/blogs';
import './BlogDetail.css';

interface BlogDetailClientProps {
  blog: Blog;
  products: Product[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogDetailClient({ blog, products }: BlogDetailClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const productCount = products.length;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="blog-detail-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <section
        className="blog-detail-hero-section"
        style={blog.image ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${blog.image})` } : undefined}
      >
        <div className="blog-detail-hero-stars">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="blog-detail-star" />
          ))}
        </div>
        <span className="blog-detail-hero-category">{blog.category}</span>
        <h1 className="blog-detail-hero-title">✨ {blog.title} ✨</h1>
        <p className="blog-detail-hero-subtitle">{blog.excerpt}</p>
        <div className="blog-detail-hero-meta">
          <span>By {blog.author.name}</span>
          <span>{formatDate(blog.publishedAt)}</span>
          <span>{blog.readTime}</span>
        </div>
        {blog.tags && blog.tags.length > 0 && (
          <div className="blog-detail-hero-tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="blog-detail-hero-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      <section className="blog-detail-intro-section">
        <div className="blog-detail-intro-content">
          <h2>{blog.intro?.heading ?? blog.title}</h2>
          <p>{blog.intro?.paragraph ?? blog.excerpt}</p>
          {blog.content && (
            <div
              className="blog-detail-html-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          )}
          <div className="blog-detail-quick-facts">
            <div className="blog-detail-fact">
              <span className="blog-detail-fact-icon">📖</span>
              <h3>Read Time</h3>
              <p>{blog.readTime}</p>
            </div>
            <div className="blog-detail-fact">
              <span className="blog-detail-fact-icon">📦</span>
              <h3>Products</h3>
              <p>{productCount} expert picks compared</p>
            </div>
            <div className="blog-detail-fact">
              <span className="blog-detail-fact-icon">🏷️</span>
              <h3>Category</h3>
              <p>{blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}</p>
            </div>
            <div className="blog-detail-fact">
              <span className="blog-detail-fact-icon">✅</span>
              <h3>Verified</h3>
              <p>Curated by SahiKharido experts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-why-matters-section">
        <div className="blog-detail-why-matters-content">
          <h2>Why This Guide Matters</h2>
          <p className="blog-detail-why-matters-intro">
            Choosing the right product saves time, money, and frustration. Our team tested and compared
            top options so you can buy with confidence.
          </p>

          <div className="blog-detail-importance-grid">
            <div className="blog-detail-importance-card">
              <span className="blog-detail-importance-icon">⏰</span>
              <h3>Save Time</h3>
              <p>Skip hours of research — we did the hard work for you</p>
            </div>
            <div className="blog-detail-importance-card">
              <span className="blog-detail-importance-icon">💪</span>
              <h3>Expert Picks</h3>
              <p>Only products with strong ratings and real buyer feedback</p>
            </div>
            <div className="blog-detail-importance-card">
              <span className="blog-detail-importance-icon">💵</span>
              <h3>Best Value</h3>
              <p>Options for every budget from affordable to premium</p>
            </div>
            <div className="blog-detail-importance-card">
              <span className="blog-detail-importance-icon">🎯</span>
              <h3>Honest Reviews</h3>
              <p>Clear pros and cons so you know exactly what to expect</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-sahikharido-section">
        <div className="blog-detail-sahikharido-wrapper">
          <div className="blog-detail-sahikharido-header">
            <h2>Why SahiKharido? {productCount} Premium Products Curated for You</h2>
            <p>
              At <strong>SahiKharido</strong> (&quot;Buy Smart. Buy Right.&quot;), we help you make informed
              decisions. Our expert team handpicked {productCount} top products for this guide.
            </p>
          </div>

          <div className="blog-detail-sahikharido-benefits">
            <div className="blog-detail-benefit-column">
              <div className="blog-detail-benefit-item">
                <span className="blog-detail-benefit-number">✓</span>
                <h3>Performance & Reliability</h3>
                <p>Only products that deliver consistent, professional-quality results</p>
              </div>
              <div className="blog-detail-benefit-item">
                <span className="blog-detail-benefit-number">✓</span>
                <h3>Value for Money</h3>
                <p>Best price-to-performance ratio across all budget ranges</p>
              </div>
              <div className="blog-detail-benefit-item">
                <span className="blog-detail-benefit-number">✓</span>
                <h3>Customer Satisfaction</h3>
                <p>Products with high star ratings and thousands of verified reviews</p>
              </div>
            </div>
            <div className="blog-detail-benefit-column">
              <div className="blog-detail-benefit-item">
                <span className="blog-detail-benefit-number">✓</span>
                <h3>Durability & Warranty</h3>
                <p>Long-lasting products backed by excellent customer support</p>
              </div>
              <div className="blog-detail-benefit-item">
                <span className="blog-detail-benefit-number">✓</span>
                <h3>Variety of Options</h3>
                <p>From budget-friendly to premium — something for everyone</p>
              </div>
              <div className="blog-detail-benefit-item">
                <span className="blog-detail-benefit-number">✓</span>
                <h3>Transparent Reviews</h3>
                <p>Honest pros & cons for every product to help you decide</p>
              </div>
            </div>
          </div>

          {products.length > 0 && (
            <div className="blog-detail-product-summary">
              <h3>Our {productCount} Handpicked Products</h3>
              <div className="blog-detail-product-list">
                {products.map((product) => (
                  <div key={product.id} className="blog-detail-product-list-item">
                    <span className="blog-detail-list-badge">
                      {getCategoryEmoji(product.category)} {getCategoryLabel(product.category)}
                    </span>
                    <span className="blog-detail-list-name">{product.title}</span>
                    <span className="blog-detail-list-price">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="blog-detail-sahikharido-promise">
            <p>
              Each product includes detailed pros & cons, &quot;Best For&quot; recommendations, and
              direct links to purchase with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-detail-products-section">
        {products.map((product, index) => {
          const originalPrice = getOriginalPrice(product.price, product.isDeal);
          const discount = getDiscountPercent(product.price, originalPrice);
          const categoryLabel = getCategoryLabel(product.category);
          const featureText = product.features?.join('. ');
          const bestFor = [
            `🛒 ${categoryLabel}`,
            '⭐ Top Rated',
            '💰 Best Value',
            '✅ Expert Pick',
          ];

          return (
            <div key={product.id} className="blog-detail-product-item">
              <div className="blog-detail-product-header">
                <div className="blog-detail-product-number">#{index + 1}</div>
                <div className="blog-detail-type-badge">
                  {getCategoryEmoji(product.category)} {categoryLabel}
                </div>
              </div>

              <div className="blog-detail-product-card">
                <div className="blog-detail-product-image-wrapper">
                  <img src={product.image} alt={product.title} className="blog-detail-product-image" />
                  {discount > 0 && (
                    <div className="blog-detail-discount-badge">{discount}% OFF</div>
                  )}
                </div>

                <div className="blog-detail-product-info">
                  <h3 className="blog-detail-product-title">{product.title}</h3>
                  <p className="blog-detail-product-brand">{product.brand}</p>

                  <div className="blog-detail-rating">
                    <span className="blog-detail-stars">{'⭐'.repeat(Math.round(product.rating))}</span>
                    <span className="blog-detail-rating-value">{product.rating}</span>
                    <span className="blog-detail-review-count">
                      ({product.reviewsCount.toLocaleString()} reviews)
                    </span>
                  </div>

                  <p className="blog-detail-product-description">{product.description}</p>

                  <div className="blog-detail-price-section">
                    <span className="blog-detail-price">{product.price}</span>
                    {discount > 0 && (
                      <span className="blog-detail-original-price">{originalPrice}</span>
                    )}
                  </div>

                  <a
                    href={product.affiliateLink}
                    className="blog-detail-cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>

              <div className="blog-detail-why-section">
                <h3>Why {product.brand}</h3>
                {featureText && <p>{featureText}</p>}
                <p className="blog-detail-why-conclusion">
                  A top pick in our {categoryLabel.toLowerCase()} guide with strong ratings from verified buyers.
                </p>
              </div>

              <div className="blog-detail-pros-cons-grid">
                <div className="blog-detail-pros-card">
                  <h4>✓ Pros</h4>
                  <ul>
                    {product.pros.map((pro, idx) => (
                      <li key={idx}>
                        <span className="blog-detail-pro-icon">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog-detail-cons-card">
                  <h4>✗ Cons</h4>
                  <ul>
                    {product.cons.map((con, idx) => (
                      <li key={idx}>
                        <span className="blog-detail-con-icon">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="blog-detail-best-for-section">
                <h3>Best For</h3>
                <div className="blog-detail-best-for-grid">
                  {bestFor.map((category, idx) => (
                    <div key={idx} className="blog-detail-best-for-card">
                      {category}
                    </div>
                  ))}
                </div>
              </div>

              {index < products.length - 1 && <div className="blog-detail-product-divider" />}
            </div>
          );
        })}
      </section>

      {products.length > 0 && (
        <section className="blog-detail-comparison-section">
          <h2>Quick Comparison</h2>
          <div className="blog-detail-comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <strong>{product.title}</strong>
                    </td>
                    <td>{getCategoryLabel(product.category)}</td>
                    <td className="blog-detail-price-highlight">{product.price}</td>
                    <td>{product.rating} ⭐</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="blog-detail-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="blog-detail-faq-container">
          {(blog.faqs ?? []).map((faq, idx) => (
            <details key={idx} className="blog-detail-faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="blog-detail-conclusion-section">
        <h2>The Bottom Line</h2>
        <div className="blog-detail-conclusion-content">
          <p>
            The right choice depends on your budget, needs, and how you plan to use it. This guide —
            <strong> {blog.title}</strong> — gives you everything you need to decide with confidence.
          </p>
          <div className="blog-detail-conclusion-boxes">
            <div className="blog-detail-conclusion-box blog-detail-choose-airfryer">
              <h3>Choose a budget option if:</h3>
              <ul>
                <li>You want great value without overspending</li>
                <li>You are trying the category for the first time</li>
                <li>You need essential features only</li>
              </ul>
            </div>
            <div className="blog-detail-conclusion-box blog-detail-choose-convection">
              <h3>Choose a premium option if:</h3>
              <ul>
                <li>You want maximum performance and features</li>
                <li>You use it frequently or professionally</li>
                <li>You want the best long-term investment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
