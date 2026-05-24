import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    author: {
      name: string;
      avatar: string;
    };
    publishedAt: string;
    image: string;
    category: string;
    readTime: string;
  }
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${blog.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image 
            src={blog.image} 
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      </Link>
      
      <div className={styles.content}>
        <span className={styles.category}>{blog.category}</span>
        
        <h3 className={styles.title}>
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        
        <p className={styles.excerpt}>{blog.excerpt}</p>
        
        <div className={styles.meta}>
          <div className={styles.author}>
            <div className={styles.avatarWrapper}>
              <Image 
                src={blog.author.avatar} 
                alt={blog.author.name}
                fill
                sizes="40px"
                className={styles.avatar}
              />
            </div>
            <span className={styles.authorName}>{blog.author.name}</span>
          </div>
          <span className={styles.readTime}>{blog.readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
