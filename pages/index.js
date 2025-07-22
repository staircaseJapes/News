import Link from 'next/link';
import styles from '../styles/globals.module.css';

const articles = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Article ${i + 1}: Alice's Naughty Escapade #${i + 1}`,
  slug: `article-${i + 1}`
}));

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>The Naughty Times</h1>
      <p className={styles.subhead}>
        Editor’s Note: Alice Tusa continues to confound world expectations with her escalating mischief.
      </p>
      <ul className={styles.articleList}>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
