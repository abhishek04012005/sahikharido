import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    slug: string;
    price: string;
    rating: number;
    reviewsCount: number;
    image: string;
    description: string;
    pros: string[];
    cons: string[];
    affiliateLink: string;
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Simple rating stars renderer
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} fill="#ffb400" color="#ffb400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} fill="#ffb400" color="#ffb400" />);
    }
    return stars;
  };

  return (
    <div className={styles.card}>
      <Link href={`/reviews/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image 
            src={product.image} 
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      </Link>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <Link href={`/reviews/${product.slug}`}>{product.title}</Link>
          </h3>
          <div className={styles.rating}>
            <div className={styles.stars}>{renderStars(product.rating)}</div>
            <span className={styles.reviewsCount}>({product.reviewsCount})</span>
          </div>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.price}>{product.price}</span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.prosCons}>
          <div className={styles.pros}>
            <strong>Pros:</strong>
            <ul>
              {product.pros.slice(0, 2).map((pro, idx) => <li key={idx}>{pro}</li>)}
            </ul>
          </div>
        </div>

        <div className={styles.actions}>
          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className={styles.buyBtn}>
            Buy on Amazon
          </a>
          <Link href={`/reviews/${product.slug}`} className={styles.reviewBtn}>
            Read Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
