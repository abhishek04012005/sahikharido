import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';
import Image from 'next/image';
import LogoImage from '../../public/assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>

          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <Image src={LogoImage} alt="SahiKharido" width={60} height={40} />
            </Link>
            <p className={styles.description}>
              Expert product reviews, comparisons, and buying guides to help you shop smarter.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={20} /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Explore</h3>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Newsletter</h3>
            <p className={styles.description}>
              Subscribe to get the latest reviews and deals delivered to your inbox.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>Subscribe</button>
            </form>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.affiliate}>
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases. This means if you click on an affiliate link and purchase the item, we will receive an affiliate commission at no extra cost to you.
          </p>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} SahiKharido. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
