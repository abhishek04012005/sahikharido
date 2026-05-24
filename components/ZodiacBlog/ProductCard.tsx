'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  brand: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  discount?: string;
  affiliateLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  brand,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  description,
  discount,
  affiliateLink,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < Math.floor(rating) ? '#d4af37' : '#666' }}>
        ★
      </span>
    ));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: 'cover' }}
        />
        {discount && <div className="product-discount">{discount}</div>}
      </div>

      <div className="product-info">
        <div className="product-brand">{brand}</div>
        <h3 className="product-title">{title}</h3>

        <div className="product-rating">
          <div className="stars">{renderStars(rating)}</div>
          <span className="rating-count">({reviewCount.toLocaleString()})</span>
        </div>

        <div>
          <span className="product-price">{price}</span>
          {originalPrice && <span className="product-original-price">{originalPrice}</span>}
        </div>

        <p className="product-description">{description}</p>

        <div className="product-actions">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-buy-btn"
          >
            Buy Now on Amazon
          </a>
          <button
            className="product-wishlist-btn"
            onClick={() => setIsWishlisted(!isWishlisted)}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
