'use client';

import React, { useEffect, useState } from 'react';
import '@/styles/kitchen/kitchen-blog.css';

const AirFryerBlog = () => {
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

  const productsData = [
    {
      id: 'prod-3',
      type: 'Air Fryer',
      typeEmoji: '🔥',
      title: 'Ninja AF101 Air Fryer',
      brand: 'Ninja',
      price: '$89.95',
      originalPrice: '$129.99',
      rating: 4.7,
      reviewCount: 45000,
      image: 'https://images.unsplash.com/photo-1627308595229-783087095493?q=80&w=800&auto=format&fit=crop',
      description: [
        'The Ninja AF101 is the perfect entry-level air fryer for those just starting their air frying journey. With its compact 4-quart capacity, it\'s ideal for singles and small families who want quick, crispy meals without the guilt.',
        'This budget-friendly option offers exceptional value with its straightforward controls and reliable heating. The wide temperature range allows you to cook everything from frozen fries to whole chickens.',
        'Despite its affordable price, the Ninja AF101 doesn\'t compromise on performance. It delivers consistently crispy results in less time than traditional ovens.',
      ],
      pros: [
        'Affordable price',
        'Compact size',
        'Quick preheat',
        'Easy to clean',
        'Reliable performance',
      ],
      cons: [
        'Small capacity for large families',
        'Basic features',
        'Loud operation',
      ],
      bestFor: [
        '👤 Single/Couple',
        '🏠 Small Kitchen',
        '💰 Budget-Conscious',
        '⚡ Quick Meals',
      ],
    },
    {
      id: 'prod-8',
      type: 'Air Fryer',
      typeEmoji: '🔥',
      title: 'Philips Premium Air Fryer',
      brand: 'Philips',
      price: '$199.99',
      originalPrice: '$279.99',
      rating: 4.8,
      reviewCount: 28500,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      description: [
        'Philips brings premium engineering to the air fryer market with their advanced model featuring dual temperature zones. This is the choice for home cooks who demand consistent, professional-quality results.',
        'The dual temperature zones allow you to cook multiple foods at different temperatures simultaneously, perfect for preparing complete meals. The 6.2L capacity is substantial without being overwhelming.',
        'With Philips\' smart cooking technology and preset modes, even beginners can achieve restaurant-quality crispy exteriors and tender interiors every time.',
      ],
      pros: [
        'Dual temperature zones',
        'Large capacity',
        'Even cooking',
        'Smart presets',
        'Excellent results',
      ],
      cons: [
        'Higher price',
        'Takes counter space',
        'Learning curve for full features',
      ],
      bestFor: [
        '👨‍🍳 Home Chef',
        '👨‍👩‍👧 Family Meals',
        '🎯 Premium Quality',
        '🍽️ Entertaining',
      ],
    },
    {
      id: 'prod-9',
      type: 'Convection Oven',
      typeEmoji: '🌡️',
      title: 'Cuisinart Convection Oven',
      brand: 'Cuisinart',
      price: '$299.99',
      originalPrice: '$399.99',
      rating: 4.7,
      reviewCount: 19200,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
      description: [
        'The Cuisinart Convection Oven is the versatile powerhouse for cooks who want more than just frying. With rotisserie capability and multiple cooking modes, it\'s like having three appliances in one.',
        'Its larger interior (0.6 cu ft) handles bigger portions and whole chickens with ease. The convection heating ensures even browning and cooking, delivering professional bakery-quality results.',
        'This countertop oven is perfect for those who cook varied meals and appreciate precise temperature control and cooking versatility that air fryers simply cannot match.',
      ],
      pros: [
        'Versatile cooking',
        'Rotisserie function',
        'Large capacity',
        'Even heat distribution',
        'Professional results',
      ],
      cons: [
        'Heavier/bulkier',
        'Higher price point',
        'Takes more counter space',
      ],
      bestFor: [
        '👨‍🍳 Serious Home Cooks',
        '🎂 Baking Enthusiasts',
        '🍗 Whole Bird Cooking',
        '✨ Premium Cooking',
      ],
    },
    {
      id: 'prod-10',
      type: 'Air Fryer',
      typeEmoji: '🔥',
      title: 'COSORI Dual Blades Air Fryer',
      brand: 'COSORI',
      price: '$149.99',
      originalPrice: '$199.99',
      rating: 4.9,
      reviewCount: 34600,
      image: 'https://images.unsplash.com/photo-1578519691186-d6fd8c4ca9eb?q=80&w=800&auto=format&fit=crop',
      description: [
        'COSORI\'s dual blade technology sets this air fryer apart, delivering exceptional crispiness that rivals deep frying. The advanced fan design ensures nothing is left undercooked.',
        'With 11 preset modes and a 5.8L capacity, this compact powerhouse fits modern kitchens perfectly. At this price point, it offers the best balance of performance and affordability.',
        'The dual fan technology is the secret weapon here - it creates an optimal air circulation pattern that gives you restaurant-quality crispy results in your home.',
      ],
      pros: [
        'Dual fan technology',
        'Best-in-class crispiness',
        ' 11 presets',
        'Great price',
        'Compact design',
      ],
      cons: [
        'Medium capacity',
        'Smaller basket',
        'Limited warranty',
      ],
      bestFor: [
        '🍟 Crispy Food Lovers',
        '🏠 Modern Kitchen',
        '⭐ Best Value',
        '👨‍👩‍👧 Small Family',
      ],
    },
    {
      id: 'prod-11',
      type: 'Convection Oven',
      typeEmoji: '🌡️',
      title: 'Breville Smart Convection Oven',
      brand: 'Breville',
      price: '$399.99',
      originalPrice: '$499.99',
      rating: 4.8,
      reviewCount: 12800,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      description: [
        'Breville\'s premium Smart Convection Oven is for those who demand cutting-edge technology and exceptional cooking performance. WiFi connectivity and 13 cooking functions put the kitchen at your fingertips.',
        'With 1.1 cu ft capacity and smart controls, you can monitor and adjust cooking from your smartphone. The stainless steel construction ensures longevity and premium aesthetics.',
        'This is the choice for tech-savvy cooks who appreciate precision temperature control, smart programming, and the ability to save favorite cooking profiles.',
      ],
      pros: [
        'WiFi smart controls',
        '13 cooking functions',
        'Premium stainless steel',
        'App connectivity',
        'Precise temperature',
      ],
      cons: [
        'Premium pricing',
        'Requires WiFi setup',
        'Steeper learning curve',
      ],
      bestFor: [
        '📱 Tech Enthusiasts',
        '🏆 Premium Buyers',
        '👨‍🍳 Cooking Perfectionists',
        '✨ Smart Home',
      ],
    },
    {
      id: 'prod-12',
      type: 'Hybrid Cooker',
      typeEmoji: '⚙️',
      title: 'Instant Pot Duo Plus Air Fryer',
      brand: 'Instant Pot',
      price: '$179.99',
      originalPrice: '$249.99',
      rating: 4.6,
      reviewCount: 22100,
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop',
      description: [
        'The Instant Pot Duo Plus Air Fryer is the ultimate multi-use kitchen appliance for home cooks who want everything in one device. Pressure cooking, air frying, steaming, slow cooking - it does it all.',
        'With 8-quart capacity and 10 cooking functions, this powerhouse handles everything from quick weeknight dinners to batch cooking. The digital display and preset programs make cooking foolproof.',
        'If you\'re building your kitchen collection, this single device replaces multiple appliances, making it perfect for those with limited counter space who don\'t want to compromise on cooking capabilities.',
      ],
      pros: [
        'Multi-function (10-in-1)',
        'Large 8-quart capacity',
        'Fast cooking',
        'Great value',
        'Space-saving',
      ],
      cons: [
        'Complex controls',
        'Learning curve needed',
        'Heavy and bulky',
      ],
      bestFor: [
        '👨‍👩‍👧‍👦 Large Family',
        '⚡ Busy Professionals',
        '🏠 Small Kitchen',
        '💪 Batch Cooking',
      ],
    },
    {
      id: 'prod-13',
      type: 'Air Fryer Combo',
      typeEmoji: '🔥',
      title: 'Black+Decker Air Fryer Oven',
      brand: 'Black+Decker',
      price: '$129.99',
      originalPrice: '$179.99',
      rating: 4.5,
      reviewCount: 16700,
      image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop',
      description: [
        'Black+Decker brings affordability and functionality together in this 2-in-1 air fryer and toaster oven combo. Perfect for apartment dwellers and those with limited countertop real estate.',
        'The rapid air technology delivers crispy results, and the 6-slice capacity is perfect for small households. With 9 cooking presets and straightforward controls, breakfast to dinner is covered.',
        'This is the smart choice for budget-conscious cooks who want the benefits of air frying without taking up too much space. It\'s a genuine 2-in-1 that doesn\'t compromise on either function.',
      ],
      pros: [
        '2-in-1 design',
        'Budget-friendly',
        'Compact',
        'Rapid air tech',
        'Easy to use',
      ],
      cons: [
        'Small capacity',
        'Limited features',
        'Basic presets only',
      ],
      bestFor: [
        '👤 Solo Living',
        '🏢 Small Apartment',
        '💰 Budget',
        '⚡ Quick Breakfast',
      ],
    },
  ];

  return (
    <main className="kitchen-blog-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Hero Section */}
      <section className="kitchen-hero-section">
        <div className="kitchen-hero-stars">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="kitchen-star"></div>
          ))}
        </div>
        <h1 className="kitchen-hero-title">
          ✨ Air Fryer vs Convection Oven: Complete 2026 Guide ✨
        </h1>
        <p className="kitchen-hero-subtitle">
          Discover the Perfect Kitchen Appliance for Your Cooking Style
        </p>
      </section>

      {/* Intro Section */}
      <section className="kitchen-intro-section">
        <div className="kitchen-intro-content">
          <h2>Air Fryer or Convection Oven? Your Complete Buying Guide</h2>
          <p>
            The kitchen appliance market has exploded with options, and the choice between air fryers and convection ovens can be overwhelming. Both promise crispy, delicious results, but which one is right for your kitchen? Let's explore seven amazing options to help you make the perfect choice.
          </p>
          <div className="kitchen-quick-facts">
            <div className="kitchen-fact">
              <span className="kitchen-fact-icon">⏱️</span>
              <h3>Speed</h3>
              <p>Air fryers cook 20-30% faster than convection ovens</p>
            </div>
            <div className="kitchen-fact">
              <span className="kitchen-fact-icon">📏</span>
              <h3>Capacity</h3>
              <p>Convection ovens handle larger portions and whole birds</p>
            </div>
            <div className="kitchen-fact">
              <span className="kitchen-fact-icon">🎯</span>
              <h3>Versatility</h3>
              <p>Convection ovens offer more cooking modes and functions</p>
            </div>
            <div className="kitchen-fact">
              <span className="kitchen-fact-icon">💰</span>
              <h3>Price</h3>
              <p>Air fryers are generally more affordable to start</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="kitchen-why-matters-section">
        <div className="kitchen-why-matters-content">
          <h2>Why Choosing the Right Appliance Matters</h2>
          <p className="kitchen-why-matters-intro">
            Your kitchen appliance choice impacts your cooking efficiency, energy bills, and overall meal quality. Investing in the right tool can save you hundreds of hours and thousands of rupees each year while transforming how you cook.
          </p>
          
          <div className="kitchen-importance-grid">
            <div className="kitchen-importance-card">
              <span className="kitchen-importance-icon">⏰</span>
              <h3>Save Time</h3>
              <p>Cook meals 20-30% faster with the right appliance, giving you more time with family</p>
            </div>
            <div className="kitchen-importance-card">
              <span className="kitchen-importance-icon">💪</span>
              <h3>Healthier Cooking</h3>
              <p>Air fryers and convection ovens use little to no oil compared to deep frying</p>
            </div>
            <div className="kitchen-importance-card">
              <span className="kitchen-importance-icon">💵</span>
              <h3>Save Money</h3>
              <p>Energy-efficient cooking reduces electricity bills while ensuring consistent results</p>
            </div>
            <div className="kitchen-importance-card">
              <span className="kitchen-importance-icon">🎯</span>
              <h3>Perfect Results</h3>
              <p>Modern technology ensures even cooking and professional-quality crispy textures</p>
            </div>
          </div>
        </div>
      </section>

      {/* SahiKharido Section */}
      <section className="kitchen-sahikharido-section">
        <div className="kitchen-sahikharido-wrapper">
          <div className="kitchen-sahikharido-header">
            <h2>Why SahiKharido? 7 Premium Products Curated for You</h2>
            <p>
              At <strong>SahiKharido</strong> ("Buy Smart. Buy Right."), we believe in helping you make informed decisions. Our expert team has handpicked 7 of the best air fryers and convection ovens available in 2026, evaluated based on:
            </p>
          </div>

          <div className="kitchen-sahikharido-benefits">
            <div className="kitchen-benefit-column">
              <div className="kitchen-benefit-item">
                <span className="kitchen-benefit-number">✓</span>
                <h3>Performance & Reliability</h3>
                <p>Only appliances that deliver consistent, professional-quality results</p>
              </div>
              <div className="kitchen-benefit-item">
                <span className="kitchen-benefit-number">✓</span>
                <h3>Value for Money</h3>
                <p>Best price-to-performance ratio across all budget ranges</p>
              </div>
              <div className="kitchen-benefit-item">
                <span className="kitchen-benefit-number">✓</span>
                <h3>Customer Satisfaction</h3>
                <p>Products with 4.5+ star ratings and thousands of verified reviews</p>
              </div>
            </div>
            <div className="kitchen-benefit-column">
              <div className="kitchen-benefit-item">
                <span className="kitchen-benefit-number">✓</span>
                <h3>Durability & Warranty</h3>
                <p>Long-lasting products backed by excellent customer support</p>
              </div>
              <div className="kitchen-benefit-item">
                <span className="kitchen-benefit-number">✓</span>
                <h3>Variety of Options</h3>
                <p>From budget-friendly ($89) to premium ($399), we have it all</p>
              </div>
              <div className="kitchen-benefit-item">
                <span className="kitchen-benefit-number">✓</span>
                <h3>Transparent Reviews</h3>
                <p>Honest pros & cons for every product to help you decide</p>
              </div>
            </div>
          </div>

          <div className="kitchen-product-summary">
            <h3>Our 7 Handpicked Products</h3>
            <div className="kitchen-product-list">
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">🔥 Air Fryer</span>
                <span className="kitchen-list-name">Ninja AF101</span>
                <span className="kitchen-list-price">$89.95</span>
              </div>
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">🔥 Air Fryer</span>
                <span className="kitchen-list-name">Philips Premium</span>
                <span className="kitchen-list-price">$199.99</span>
              </div>
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">🌡️ Convection</span>
                <span className="kitchen-list-name">Cuisinart Oven</span>
                <span className="kitchen-list-price">$299.99</span>
              </div>
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">🔥 Air Fryer</span>
                <span className="kitchen-list-name">COSORI Dual Blades</span>
                <span className="kitchen-list-price">$149.99</span>
              </div>
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">🌡️ Convection</span>
                <span className="kitchen-list-name">Breville Smart</span>
                <span className="kitchen-list-price">$399.99</span>
              </div>
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">⚙️ Hybrid</span>
                <span className="kitchen-list-name">Instant Pot Duo Plus</span>
                <span className="kitchen-list-price">$179.99</span>
              </div>
              <div className="kitchen-product-list-item">
                <span className="kitchen-list-badge">🔥 Combo</span>
                <span className="kitchen-list-name">Black+Decker Oven</span>
                <span className="kitchen-list-price">$129.99</span>
              </div>
            </div>
          </div>

          <div className="kitchen-sahikharido-promise">
            <p>
              Whether you're looking for a budget-friendly option under $100 or willing to invest in a premium model with smart features, our curated list has something for everyone. Each product includes detailed pros & cons, "Best For" recommendations, and direct affiliate links to purchase with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="kitchen-products-section">
        {productsData.map((product, index) => (
          <div key={product.id} className="kitchen-product-item">
            <div className="kitchen-product-header">
              <div className="kitchen-product-number">
                #{index + 1}
              </div>
              <div className="kitchen-type-badge">
                {product.typeEmoji} {product.type}
              </div>
            </div>

            {/* Product Card */}
            <div className="kitchen-product-card">
              <div className="kitchen-product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="kitchen-product-image"
                />
                <div className="kitchen-discount-badge">{((parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))) / parseInt(product.originalPrice.replace('$', '')) * 100).toFixed(0)}% OFF</div>
              </div>

              <div className="kitchen-product-info">
                <h3 className="kitchen-product-title">{product.title}</h3>
                <p className="kitchen-product-brand">{product.brand}</p>
                
                <div className="kitchen-rating">
                  <span className="kitchen-stars">
                    {'⭐'.repeat(Math.round(product.rating))}
                  </span>
                  <span className="kitchen-rating-value">{product.rating}</span>
                  <span className="kitchen-review-count">({product.reviewCount.toLocaleString()} reviews)</span>
                </div>

                <p className="kitchen-product-description">
                  {product.description[0]}
                </p>

                <div className="kitchen-price-section">
                  <span className="kitchen-price">{product.price}</span>
                  <span className="kitchen-original-price">{product.originalPrice}</span>
                </div>

                <a href="#" className="kitchen-cta-button">
                  View on Amazon
                </a>
              </div>
            </div>

            {/* Why This Product */}
            <div className="kitchen-why-section">
              <h3>Why {product.title.split(' ').slice(-2).join(' ')}</h3>
              <p>{product.description[1]}</p>
              <p className="kitchen-why-conclusion">{product.description[2]}</p>
            </div>

            {/* Pros & Cons */}
            <div className="kitchen-pros-cons-grid">
              <div className="kitchen-pros-card">
                <h4>✓ Pros</h4>
                <ul>
                  {product.pros.map((pro, idx) => (
                    <li key={idx}>
                      <span className="kitchen-pro-icon">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="kitchen-cons-card">
                <h4>✗ Cons</h4>
                <ul>
                  {product.cons.map((con, idx) => (
                    <li key={idx}>
                      <span className="kitchen-con-icon">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="kitchen-best-for-section">
              <h3>Best For</h3>
              <div className="kitchen-best-for-grid">
                {product.bestFor.map((category, idx) => (
                  <div key={idx} className="kitchen-best-for-card">
                    {category}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            {index < productsData.length - 1 && <div className="kitchen-product-divider"></div>}
          </div>
        ))}
      </section>

      {/* Comparison Section */}
      <section className="kitchen-comparison-section">
        <h2>Quick Comparison</h2>
        <div className="kitchen-comparison-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Type</th>
                <th>Price</th>
                <th>Capacity</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product) => (
                <tr key={product.id}>
                  <td><strong>{product.title}</strong></td>
                  <td>{product.type}</td>
                  <td className="kitchen-price-highlight">{product.price}</td>
                  <td>{product.type === 'Convection Oven' ? 'Large (0.6-1.1 cu ft)' : product.type === 'Hybrid Cooker' ? 'Extra Large (8L)' : 'Medium (5.8-6.2L)'}</td>
                  <td>{product.rating} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="kitchen-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="kitchen-faq-container">
          <details className="kitchen-faq-item">
            <summary>Which is healthier: Air Fryer or Convection Oven?</summary>
            <p>Both are significantly healthier than deep frying since they use little to no oil. Air fryers use circulating hot air for speed, while convection ovens distribute heat evenly. Both reduce fat intake while maintaining taste.</p>
          </details>
          
          <details className="kitchen-faq-item">
            <summary>Are air fryers worth it?</summary>
            <p>Yes! Air fryers are worth it if you cook frequently, have limited space, want quick meals, or are health-conscious. They cook 20-30% faster than traditional ovens and use less electricity.</p>
          </details>
          
          <details className="kitchen-faq-item">
            <summary>Can I use my air fryer for baking?</summary>
            <p>Some air fryers can handle baking, but convection ovens are superior for baking tasks. If baking is your primary need, a convection oven is the better choice.</p>
          </details>
          
          <details className="kitchen-faq-item">
            <summary>Which takes up less counter space?</summary>
            <p>Air fryers are generally more compact, making them ideal for apartments and small kitchens. Convection ovens require more space but offer greater versatility in return.</p>
          </details>
          
          <details className="kitchen-faq-item">
            <summary>How do I choose between the options?</summary>
            <p>Consider: cooking volume (family size), cooking styles (baking, rotisserie, etc.), available space, and budget. Air fryers excel at quick, crispy meals. Convection ovens are better for variety and larger portions.</p>
          </details>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="kitchen-conclusion-section">
        <h2>The Bottom Line</h2>
        <div className="kitchen-conclusion-content">
          <p>
            Whether you choose an air fryer or convection oven depends on your unique needs, kitchen space, and cooking habits. 
          </p>
          <div className="kitchen-conclusion-boxes">
            <div className="kitchen-conclusion-box kitchen-choose-airfryer">
              <h3>Choose an Air Fryer if:</h3>
              <ul>
                <li>You want quick, crispy results</li>
                <li>Your kitchen space is limited</li>
                <li>You prefer easy cleanup</li>
                <li>You cook mostly fried foods</li>
              </ul>
            </div>
            <div className="kitchen-conclusion-box kitchen-choose-convection">
              <h3>Choose a Convection Oven if:</h3>
              <ul>
                <li>You want maximum versatility</li>
                <li>You cook for larger portions</li>
                <li>Baking is important to you</li>
                <li>You want more cooking modes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AirFryerBlog;
