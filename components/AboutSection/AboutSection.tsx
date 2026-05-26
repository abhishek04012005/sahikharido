import Link from 'next/link';
import styles from './AboutSection.module.css';

const highlights = [
  { icon: '🔍', value: '500+', label: 'Products Reviewed' },
  { icon: '⭐', value: '4.8★', label: 'Average Rating' },
  { icon: '📖', value: '100+', label: 'Buying Guides' },
  { icon: '✅', value: '50K+', label: 'Happy Readers' },
];

const points = [
  'Honest pros & cons on every recommendation',
  'Expert research — we compare before you buy',
  'Transparent affiliate disclosure, always',
];

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.inner}>
          <div>
            <span className={styles.badge}>About SahiKharido</span>
            <h2 className={styles.title}>
              Buy Smart. <span className="text-gradient">Buy Right.</span>
            </h2>
            <p className={styles.text}>
              SahiKharido helps you make better purchase decisions with expert reviews,
              side-by-side comparisons, and honest buying guides — so you never waste money
              on the wrong product.
            </p>
            <ul className={styles.list}>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link href="/about" className={styles.btn}>
              Learn More About Us
            </Link>
          </div>

          <div className={styles.cards}>
            {highlights.map((item) => (
              <article key={item.label} className={styles.card}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <span className={styles.cardValue}>{item.value}</span>
                <span className={styles.cardLabel}>{item.label}</span>
              </article>
            ))}
            <article className={`${styles.card} ${styles.highlight}`}>
              <span className={styles.cardIcon}>🛒</span>
              <span className={styles.cardValue}>Your Trusted Guide</span>
              <span className={styles.cardLabel}>
                Reviews you can trust, picks you can afford
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
