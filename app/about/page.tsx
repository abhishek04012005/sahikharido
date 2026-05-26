import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About Us | SahiKharido',
  description:
    'Learn about SahiKharido — expert product reviews, honest comparisons, and buying guides to help you shop smarter.',
};

const stats = [
  { value: '500+', label: 'Products Reviewed' },
  { value: '50K+', label: 'Happy Readers' },
  { value: '100+', label: 'Buying Guides' },
  { value: '4.8★', label: 'Average Rating' },
];

const features = [
  {
    icon: '🔍',
    title: 'In-Depth Research',
    text: 'We compare specs, real user reviews, and expert opinions before recommending any product.',
  },
  {
    icon: '⚖️',
    title: 'Honest Comparisons',
    text: 'Clear pros and cons for every pick — no fluff, so you can decide with confidence.',
  },
  {
    icon: '💰',
    title: 'Best Value Picks',
    text: 'Options for every budget, from affordable starters to premium long-term investments.',
  },
  {
    icon: '📱',
    title: 'Easy to Read',
    text: 'Mobile-friendly guides designed for quick scanning on any device.',
  },
];

const values = [
  'Transparent affiliate disclosures on every guide',
  'Unbiased reviews — brands do not pay for placement',
  'Regular updates when products and prices change',
  'Reader-first recommendations, always',
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroBadge}>About SahiKharido</span>
          <h1 className={styles.heroTitle}>
            Buy Smart. <span className="text-gradient">Buy Right.</span>
          </h1>
          <p className={styles.heroText}>
            SahiKharido helps you make better purchase decisions with expert reviews, side-by-side
            comparisons, and honest buying guides — so you never waste money on the wrong product.
          </p>
        </div>
      </section>

      <div className="container">
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to shop with confidence, in one place.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.gridThree}`}>
            {features.map((item) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                Online shopping offers endless choices — but too many options make it hard to pick
                the right product. SahiKharido was built to cut through the noise.
              </p>
              <p>
                Our team tests and researches products across electronics, kitchen, fitness, and
                more, then publishes detailed guides you can trust.
              </p>
              <ul className={styles.storyList}>
                {values.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.storyVisual}>
              <h3>Your Trusted Shopping Guide</h3>
              <p>
                We earn a small commission from qualifying purchases at no extra cost to you —
                and only recommend products we believe in.
              </p>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>Ready to find your next perfect buy?</h2>
            <p>Browse our latest expert buying guides and product comparisons.</p>
            <Link href="/blog" className={styles.ctaBtn}>
              Explore Buying Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
