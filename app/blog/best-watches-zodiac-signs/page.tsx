'use client';

import React, { useEffect, useState } from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/ZodiacBlog/HeroSection';
import ProductCard from '@/components/ZodiacBlog/ProductCard';
import ZodiacBadge from '@/components/ZodiacBlog/ZodiacBadge';
import ProsCons from '@/components/ZodiacBlog/ProsCons';
import ComparisonTable from '@/components/ZodiacBlog/ComparisonTable';
import FAQSection from '@/components/ZodiacBlog/FAQSection';
import CTASection from '@/components/ZodiacBlog/CTASection';
import '@/styles/zodiac/zodiac-blog.css';

const ZodiacWatchesBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const zodiacData = [
    {
      name: 'Aries',
      symbol: '♈',
      dates: 'March 21 - April 19',
      description: [
        'Aries, the bold and fearless ram, demands a watch that matches your energetic and adventurous spirit. You\'re a natural leader who thrives on excitement and challenge. The perfect watch for Aries needs to be powerful, reliable, and ready for action—just like you.',
        'This sports watch with its striking red accents and robust build speaks to your confident nature. The chronograph function represents your goal-oriented mindset, while the water resistance ensures it can keep up with your active lifestyle, whether you\'re hitting the gym or conquering new challenges.',
        'Aries natives appreciate watches that make a statement. This timepiece combines performance with style, reflecting your bold personality and determination to succeed in everything you do.',
      ],
      product: {
        brand: 'Garmin',
        title: 'Garmin Instinct 2 Solar Sports Watch',
        price: '$499',
        originalPrice: '$599',
        rating: 4.8,
        reviewCount: 3250,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
        description: 'Rugged sports watch with GPS, solar charging, and tactical design. Perfect for outdoor adventures.',
        discount: '17% OFF',
        affiliateLink: 'https://amazon.in/s?k=Garmin+Instinct+2',
      },
      pros: [
        'Extremely durable and rugged',
        'Solar charging technology',
        'Excellent GPS tracking',
        'Military-grade design',
        'Great battery life',
      ],
      cons: [
        'Bulky for everyday wear',
        'Steeper learning curve',
        'Premium price point',
      ],
      bestFor: ['🏃 Gym & Sports', '🏕️ Outdoor Adventures', '💼 Professional Athletes', '🎁 Bold Gift'],
    },
    {
      name: 'Taurus',
      symbol: '♉',
      dates: 'April 20 - May 20',
      description: [
        'Taurus, the steadfast and luxurious bull, appreciates the finer things in life. You have a refined taste and an eye for quality that won\'t compromise. Your watch must be a timeless investment—something that tells the world you value excellence and authenticity.',
        'This luxury timepiece embodies sophistication with its leather strap and premium materials. Taurus natives are known for their loyalty and consistency, and this watch reflects that commitment to enduring quality. The classic design ensures it never goes out of style.',
        'As someone who appreciates the best, you understand that a great watch is both a fashion statement and a personal treasure. This piece will serve you faithfully for decades, growing more distinguished with age.',
      ],
      product: {
        brand: 'Fossil',
        title: 'Fossil Townsman Automatic Watch',
        price: '$295',
        originalPrice: '$395',
        rating: 4.6,
        reviewCount: 2890,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
        description: 'Elegant automatic watch with brown leather strap and timeless design. A true luxury investment.',
        discount: '25% OFF',
        affiliateLink: 'https://amazon.in/s?k=Fossil+Townsman',
      },
      pros: [
        'Genuine leather strap',
        'Automatic movement',
        'Classic timeless design',
        'Excellent craftsmanship',
        'Water-resistant',
      ],
      cons: [
        'Manual winding required',
        'Leather needs maintenance',
        'Not suitable for intense sports',
      ],
      bestFor: ['💼 Office & Business', '🎩 Formal Events', '👔 Classic Style', '💎 Luxury Lovers'],
    },
    {
      name: 'Gemini',
      symbol: '♊',
      dates: 'May 21 - June 20',
      description: [
        'Gemini, the versatile and adaptable twin, needs a watch that\'s as multifaceted as you are. You\'re always on the move, juggling multiple interests and staying connected. Your ideal watch combines cutting-edge technology with style, ready for whatever adventure awaits.',
        'This smartwatch is the ultimate companion for your dynamic lifestyle. It tracks fitness, sends notifications, runs apps, and helps you stay organized—all while looking sleek and modern. Gemini natives appreciate gadgets that enhance their productivity and social connectivity.',
        'With its intuitive interface and endless customization options, this watch adapts to your changing needs throughout the day. Whether you\'re in a meeting, at the gym, or exploring a new city, this watch keeps up with your restless spirit.',
      ],
      product: {
        brand: 'Apple',
        title: 'Apple Watch Series 9 45mm',
        price: '$429',
        originalPrice: '$549',
        rating: 4.9,
        reviewCount: 5420,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
        description: 'Advanced smartwatch with fitness tracking, health monitoring, and seamless iOS integration.',
        discount: '22% OFF',
        affiliateLink: 'https://amazon.in/s?k=Apple+Watch+Series+9',
      },
      pros: [
        'Seamless iOS integration',
        'Advanced health monitoring',
        'Always-on display',
        'Cellular option available',
        'Multiple band options',
      ],
      cons: [
        'iOS only (not Android)',
        'Battery life needs daily charging',
        'Premium price',
        'Expensive repairs',
      ],
      bestFor: ['📱 Tech Enthusiasts', '💪 Fitness Trackers', '🏢 Busy Professionals', '📍 Always Connected'],
    },
    {
      name: 'Cancer',
      symbol: '♋',
      dates: 'June 21 - July 22',
      description: [
        'Cancer, the sensitive and nurturing crab, seeks comfort and reliability in everything you wear. You\'re deeply emotional and value things that feel personal and meaningful. Your watch should be elegant yet understated, reflecting your introspective nature and appreciation for subtlety.',
        'This minimalist watch is a work of art—clean lines, timeless design, and a soothing aesthetic that speaks to your refined sensibilities. Cancer natives appreciate beauty that doesn\'t shout but whispers sophistication. This watch is both comfortable to wear daily and stunning enough for special occasions.',
        'The neutral tones and delicate craftsmanship make this timepiece a personal treasure you\'ll cherish for years. It\'s the kind of watch that makes you feel peaceful and grounded, reflecting your need for emotional stability and harmony.',
      ],
      product: {
        brand: 'Movado',
        title: 'Movado Museum Classic Minimalist Watch',
        price: '$595',
        originalPrice: '$795',
        rating: 4.7,
        reviewCount: 3120,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
        description: 'Iconic minimalist design with signature Museum dial. Timeless elegance in simplicity.',
        discount: '25% OFF',
        affiliateLink: 'https://amazon.in/s?k=Movado+Museum+Classic',
      },
      pros: [
        'Iconic minimalist design',
        'Comfortable all-day wear',
        'Versatile for any occasion',
        'Swiss-made quality',
        'Elegant appearance',
      ],
      cons: [
        'No date window',
        'Battery replacement needed',
        'Higher price point',
      ],
      bestFor: ['🎨 Minimalist Lovers', '👗 Fashion-Forward', '🎭 Artistic Types', '💑 Romantic Gift'],
    },
    {
      name: 'Leo',
      symbol: '♌',
      dates: 'July 23 - August 22',
      description: [
        'Leo, the regal and confident lion, demands a watch that commands attention and respect. You\'re a natural star who lives life in the spotlight. Your timepiece must be luxurious, golden, and absolutely magnificent—a crown jewel for your wrist that tells the world you\'re born to lead.',
        'This stunning gold watch is pure royalty. With its gleaming case, diamond accents, and prestigious brand heritage, it\'s the ultimate status symbol for a Leo. You don\'t just wear this watch; you wear confidence, success, and undeniable style.',
        'Every glance at your wrist reminds you of your power and magnificence. This is the watch of champions, celebrities, and leaders. It\'s not just an accessory; it\'s a declaration of your Leo essence and your refusal to settle for anything less than extraordinary.',
      ],
      product: {
        brand: 'Invicta',
        title: 'Invicta Pro Diver Gold Plated Watch',
        price: '$189',
        originalPrice: '$299',
        rating: 4.5,
        reviewCount: 4560,
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
        description: 'Bold gold-plated watch with Swiss movement and luxury aesthetic. Perfect for standing out.',
        discount: '37% OFF',
        affiliateLink: 'https://amazon.in/s?k=Invicta+Pro+Diver+Gold',
      },
      pros: [
        'Stunning gold appearance',
        'Bold statement watch',
        'Excellent value',
        'Water-resistant',
        'Impressive presence',
      ],
      cons: [
        'Gold plating may wear over time',
        'Heavier on wrist',
        'Requires regular polishing',
      ],
      bestFor: ['👑 Luxury Lovers', '✨ Status Symbol', '🎉 Party & Events', '💎 Bold Personalities'],
    },
    {
      name: 'Virgo',
      symbol: '♍',
      dates: 'August 23 - September 22',
      description: [
        'Virgo, the meticulous and analytical virgin, appreciates precision and practicality above all else. You notice every detail and expect your possessions to meet the highest standards. Your watch must be perfectly calibrated, reliable, and serve a clear purpose without unnecessary frills.',
        'This professional business watch is a Virgo\'s dream. Its clean design, accurate movement, and practical features make it the perfect companion for your detail-oriented life. Every element serves a function; nothing is wasted. This is the watch of professionals, engineers, and perfectionists.',
        'Built to last and engineered for accuracy, this timepiece respects your intelligence and your appreciation for quality. It\'s understated yet impressive, the kind of watch that discerning people recognize and respect.',
      ],
      product: {
        brand: 'Seiko',
        title: 'Seiko Prospex Fieldmaster Automatic Watch',
        price: '$349',
        originalPrice: '$449',
        rating: 4.8,
        reviewCount: 3890,
        image: 'https://images.unsplash.com/photo-1526055368857-f3d7b44fac37?q=80&w=800&auto=format&fit=crop',
        description: 'Professional-grade automatic watch with precision engineering and reliable movement.',
        discount: '22% OFF',
        affiliateLink: 'https://amazon.in/s?k=Seiko+Prospex+Fieldmaster',
      },
      pros: [
        'Precise automatic movement',
        'Professional appearance',
        'Excellent durability',
        'Japanese engineering',
        'Great value for quality',
      ],
      cons: [
        'Requires winding',
        'Limited flashiness',
        'May feel plain to some',
      ],
      bestFor: ['💼 Corporate & Office', '📊 Engineers & Analysts', '🎯 Perfectionists', '👨‍💼 Professionals'],
    },
    {
      name: 'Scorpio',
      symbol: '♏',
      dates: 'October 23 - November 21',
      description: [
        'Scorpio, the mysterious and powerful scorpion, needs a watch as intense and captivating as you are. Dark, mysterious, and undeniably powerful—your timepiece should reflect your depth, intensity, and magnetic presence. This is a watch that hints at secrets and inner strength.',
        'This tactical black watch is your perfect match. Sleek, intimidating, and incredibly capable, it\'s designed for those who live on the edge. With its robust build and technical features, it\'s a watch that works as hard as you do, whether in boardrooms or extreme conditions.',
        'This is not a watch for the faint-hearted. It\'s for the ambitious, the determined, and the unafraid. Every wear of this watch affirms your Scorpio nature—mysterious, powerful, and absolutely unstoppable.',
      ],
      product: {
        brand: 'MTM',
        title: 'MTM Black Tactical Military Watch',
        price: '$379',
        originalPrice: '$499',
        rating: 4.7,
        reviewCount: 2340,
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
        description: 'Tactical military-grade watch with black finish and advanced features for serious users.',
        discount: '24% OFF',
        affiliateLink: 'https://amazon.in/s?k=MTM+Black+Tactical+Watch',
      },
      pros: [
        'Aggressive tactical design',
        'Extremely durable',
        'Water & shock resistant',
        'Unique presence',
        'Powerful aesthetic',
      ],
      cons: [
        'Very heavy',
        'Not suitable for formal wear',
        'Intimidating for some',
      ],
      bestFor: ['🖤 Mysterious Types', '⚡ Intense Personalities', '🎖️ Tactical Enthusiasts', '🌙 Night Style Lovers'],
    },
  ];

  const comparisonTableData = [
    {
      watch: 'Garmin Instinct 2 Solar',
      zodiac: 'Aries',
      price: '$499',
      rating: 4.8,
      battery: '14+ Days',
      bestFeature: 'Solar Charging',
    },
    {
      watch: 'Fossil Townsman Automatic',
      zodiac: 'Taurus',
      price: '$295',
      rating: 4.6,
      battery: 'Automatic',
      bestFeature: 'Luxury Design',
    },
    {
      watch: 'Apple Watch Series 9',
      zodiac: 'Gemini',
      price: '$429',
      rating: 4.9,
      battery: '18 Hours',
      bestFeature: 'Smart Features',
    },
    {
      watch: 'Movado Museum',
      zodiac: 'Cancer',
      price: '$595',
      rating: 4.7,
      battery: '2 Years',
      bestFeature: 'Minimalist Design',
    },
    {
      watch: 'Invicta Pro Diver Gold',
      zodiac: 'Leo',
      price: '$189',
      rating: 4.5,
      battery: '3 Years',
      bestFeature: 'Gold Plating',
    },
    {
      watch: 'Seiko Prospex Fieldmaster',
      zodiac: 'Virgo',
      price: '$349',
      rating: 4.8,
      battery: 'Automatic',
      bestFeature: 'Precision',
    },
    {
      watch: 'MTM Black Tactical',
      zodiac: 'Scorpio',
      price: '$379',
      rating: 4.7,
      battery: '5 Years',
      bestFeature: 'Tactical Design',
    },
  ];

  const faqData = [
    {
      question: 'Which watch is best for Aries?',
      answer: 'The Garmin Instinct 2 Solar is perfect for Aries natives. Its bold design, rugged construction, and advanced features align with the Arian need for action, adventure, and reliability. The solar charging technology matches their dynamic energy.',
    },
    {
      question: 'Are zodiac watches scientifically accurate?',
      answer: 'While astrology itself is not scientifically proven, this guide matches watches to zodiac personality traits based on traditional astrological characteristics. The watch recommendations are based on lifestyle compatibility rather than cosmic influence.',
    },
    {
      question: 'Which is the best luxury watch for Leo?',
      answer: 'The Invicta Pro Diver Gold Plated watch offers a stunning gold aesthetic that speaks to Leo\'s love of luxury and prestige. For even more premium options, consider high-end brands like Rolex or Omega.',
    },
    {
      question: 'Can I wear a watch from a different zodiac sign?',
      answer: 'Absolutely! These recommendations are based on astrology for fun. Choose a watch based on your personal preference, lifestyle needs, and budget. If you love a watch from another sign\'s section, wear it with confidence!',
    },
    {
      question: 'What\'s the best budget watch for zodiac lovers?',
      answer: 'The Fossil Townsman and Invicta Pro Diver offer excellent value. If you\'re looking for even better prices, check Amazon for seasonal sales and discounts on these recommended models.',
    },
    {
      question: 'Are these watches suitable for gifting?',
      answer: 'Yes! These watches make excellent gifts when you know someone\'s zodiac sign. Each one is thoughtfully selected to match personality traits, making it a meaningful and personalized present.',
    },
    {
      question: 'How often should I clean and maintain zodiac watches?',
      answer: 'Most watches should be cleaned monthly with a soft cloth. Leather straps need regular conditioning, automatic watches need occasional servicing, and smartwatches need firmware updates. Follow the specific care instructions for each brand.',
    },
    {
      question: 'Where can I buy these watches?',
      answer: 'All recommended watches are available on Amazon, the official brand websites, and authorized retailers. Click the "Buy Now" buttons throughout this article for direct links to current prices and deals.',
    },
  ];

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <HeroSection />

      <section id="intro" className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Why Your Zodiac Sign Matters in Watch Selection</h2>
            <p>
              Every zodiac sign carries unique personality traits, values, and lifestyle preferences. From the bold and adventurous Aries to the mysterious and intense Scorpio, your astrological sign reflects how you approach life, what you value, and what makes you feel authentic.
            </p>
            <p>
              A watch is more than just a timekeeping device—it\'s a personal statement, a reflection of your style, and a companion through life\'s moments. By choosing a watch that aligns with your zodiac\'s inherent characteristics, you\'re not just accessorizing; you\'re expressing your true self.
            </p>
            <p>
              This comprehensive guide explores seven premium watches, each specially selected to match the personality, lifestyle, and aesthetic of different zodiac signs. Whether you\'re shopping for yourself or a meaningful gift, you\'ll find the perfect timepiece that captures the essence of the zodiac sign.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <div className="main-content">
          <div style={{ flex: 1 }}>
            {zodiacData.map((zodiac, idx) => (
              <section key={idx} className="zodiac-section">
                <ZodiacBadge name={zodiac.name} symbol={zodiac.symbol} dates={zodiac.dates} />

                <div className="product-card-container">
                  <ProductCard
                    brand={zodiac.product.brand}
                    title={zodiac.product.title}
                    price={zodiac.product.price}
                    originalPrice={zodiac.product.originalPrice}
                    rating={zodiac.product.rating}
                    reviewCount={zodiac.product.reviewCount}
                    image={zodiac.product.image}
                    description={zodiac.product.description}
                    discount={zodiac.product.discount}
                    affiliateLink={zodiac.product.affiliateLink}
                  />

                  <div className="zodiac-description">
                    <h4>Why This Watch Matches {zodiac.name}</h4>
                    {zodiac.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <h4 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Pros & Cons</h4>
                <ProsCons pros={zodiac.pros} cons={zodiac.cons} />

                <h4 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Best For</h4>
                <div className="best-for-wrapper">
                  {zodiac.bestFor.map((item, bIdx) => {
                    const [emoji, label] = item.split(' ');
                    return (
                      <div key={bIdx} className="best-for-item">
                        <div className="best-for-icon">{emoji}</div>
                        <div className="best-for-label">{label}</div>
                      </div>
                    );
                  })}
                </div>

                <CTASection
                  title={`${zodiac.name}'s Perfect Timepiece Awaits`}
                  subtitle={`Don't miss out on this premium watch designed specifically for ${zodiac.name} natives.`}
                  ctaText={`Check Latest Price on Amazon`}
                  ctaLink={zodiac.product.affiliateLink}
                  showTrustBadges={false}
                />
              </section>
            ))}

            <section style={{ margin: '3rem 0' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
                Quick Comparison Table
              </h2>
              <ComparisonTable data={comparisonTableData} />
            </section>

            <FAQSection items={faqData} />

            <section className="conclusion-section">
              <h2>Final Thoughts: Your Perfect Zodiac Watch Awaits</h2>
              <p>
                Choosing the right watch is a personal journey, and your zodiac sign offers wonderful insights into what might resonate with your unique personality and lifestyle. Whether you\'re an adventurous Aries seeking a rugged sports watch, a luxury-loving Taurus craving timeless elegance, or a mysterious Scorpio drawn to tactical sophistication, there\'s a perfect timepiece waiting for you.
              </p>
              <p>
                These watches represent more than just accurate timekeeping—they\'re investments in yourself, expressions of your identity, and companions for life\'s beautiful moments. Each recommendation has been carefully selected to match not just astrological traits, but real lifestyle needs and preferences.
              </p>
              <p>
                Remember, while astrology is entertaining and insightful, the most important factor is choosing a watch that makes YOU feel confident, comfortable, and authentic. If a watch from a different zodiac section speaks to your heart, embrace it! True style is about wearing what makes you happy.
              </p>
              <p>
                Ready to find your perfect watch? Use the links throughout this guide to explore current prices, read customer reviews, and make your purchase. Whether you\'re treating yourself or shopping for someone special, these carefully curated watches promise years of reliable service and timeless style.
              </p>
            </section>

            <section style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid var(--border-color)', marginTop: '3rem' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Share This Article</h3>
              <div className="social-share">
                <a href="#" className="share-button" title="Share on Facebook">f</a>
                <a href="#" className="share-button" title="Share on Twitter">𝕏</a>
                <a href="#" className="share-button" title="Share on LinkedIn">in</a>
                <a href="#" className="share-button" title="Share on Pinterest">P</a>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '0.9rem' }}>
                <strong>Affiliate Disclosure:</strong> This article contains affiliate links. If you purchase through these links, we may earn a small commission at no extra cost to you. We only recommend products we believe in and use ourselves.
              </p>
            </section>
          </div>

          <aside className="toc-wrapper">
            <div className="toc-content">
              <h3>Quick Links</h3>
              <ul>
                {zodiacData.map((zodiac, idx) => (
                  <li key={idx}>
                    <a href={`#zodiac-${idx}`}>{zodiac.name} ♦ {zodiac.product.price}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ZodiacWatchesBlog;
