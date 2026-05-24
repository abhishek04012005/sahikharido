import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>Home</Link>
          <ChevronRight size={14} className={styles.separator} />
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className={styles.item} aria-current={isLast ? 'page' : undefined}>
              {isLast || !item.href ? (
                <span className={styles.current}>{item.label}</span>
              ) : (
                <>
                  <Link href={item.href} className={styles.link}>{item.label}</Link>
                  <ChevronRight size={14} className={styles.separator} />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
