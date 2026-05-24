'use client';

import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
      }));
      setStars(starArray);
    };
    generateStars();
  }, []);

  const scrollToContent = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-stars">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          ✨ Best Watches for Every Zodiac Sign in 2026 ✨
        </h1>
        <p className="hero-subtitle">
          Discover the perfect timepiece that aligns with your cosmic energy and personal style. 
          From bold Aries to mysterious Scorpio, find the watch that truly represents you.
        </p>
        <button className="hero-cta" onClick={scrollToContent}>
          Explore Watches →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
