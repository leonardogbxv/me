import React from 'react';
import Link from 'next/link';
import type { UrlObject } from 'url';
import { formatDate } from '@/utils/date';
import styles from './Article.module.css';

type Url = string | UrlObject;

interface ArticleProps {
  title: string
  date: number | string | Date
  href: Url
}

export default function Article({
  title,
  date,
  href,
}: ArticleProps) {
  const formattedDate = formatDate(new Date(date), 'd \'de\' MMMM, yyyy');

  return (
    <article className={styles['post-item']}>
      <Link href={href}>
        <h3>{title}</h3>
      </Link>

      <pre>
        <time>{formattedDate}</time>
      </pre>
    </article>
  );
}
