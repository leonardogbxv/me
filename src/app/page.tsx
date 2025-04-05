import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getPosts } from '@/utils/blogFetchers';
import Article from '@/components/Article/Article';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Leonardo Gomes',
  description: 'leonardogbxv\'s portfolio & blog'
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <section className={styles.headliner}>
        <Link href="https://github.com/leonardogbxv" target="_blank">
          <Image
            src="https://github.com/leonardogbxv.png"
            alt="Leonardo's GitHub Profile"
            width={300}
            height={300}
          />
        </Link>

        <p>
          <span>Olá! Meu nome é Leonardo.&nbsp;</span>
          <span>Sou um desenvolvedor mobile apaixonado por tecnologia.</span>
        </p>

        <SocialMedia />
      </section>

      <section>
        <header>
          <h3>
            <Link href="/blog">ARTIGOS RECENTES</Link>
          </h3>
        </header>

        <div className={styles.articles}>
          {posts.map((post) => (
            <Article
              key={post.slug}
              title={post.metadata.title}
              date={post.metadata.publish_date}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </section>

      <section className={styles.wip}>
        <h3>🚧 Em Contrução 🚧</h3>
      </section>
    </>
  );
}
