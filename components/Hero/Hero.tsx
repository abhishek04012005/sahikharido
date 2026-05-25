import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Find The Best Products <br />
            <span className="text-gradient">Before You Buy</span>
          </h1>
          <p className={styles.subtitle}>
            Expert product reviews, comparisons, and buying guides to help you shop smarter.
          </p>
          <div className={styles.actions}>
            <Link href="/blog" className={styles.primaryBtn}>
              Read Buying Guides
            </Link>
            <Link href="/blog" className={styles.secondaryBtn}>
              Latest Blogs
            </Link>
          </div>
        </div>
        
        <div className={styles.illustration}>
          <div className={styles.imageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" 
              alt="Online Shopping Illustration" 
              fill
              priority
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating Elements */}
          <div className={`${styles.floatingCard} ${styles.floatTopRight}`}>
            <span className={styles.badge}>★ 4.9</span>
            <p>Top Rated</p>
          </div>
          <div className={`${styles.floatingCard} ${styles.floatBottomLeft}`}>
            <span className={styles.badge}>%</span>
            <p>Best Deals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
