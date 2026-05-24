import React from 'react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  showTrustBadges?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  showTrustBadges = true,
}) => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">{title}</h2>
      <p className="cta-subtitle">{subtitle}</p>
      <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="cta-button">
        {ctaText}
      </a>

      {showTrustBadges && (
        <div className="trust-badges">
          <div className="trust-badge">
            <span className="trust-badge-icon">✓</span>
            <span>100% Authentic</span>
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon">🔒</span>
            <span>Secure Checkout</span>
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon">📦</span>
            <span>Fast Delivery</span>
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon">↩️</span>
            <span>Easy Returns</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
