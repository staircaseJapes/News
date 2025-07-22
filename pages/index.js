import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Naughty Times</title>
        <meta name="description" content="Breaking news: Alice Tusa's naughtiness knows no bounds." />
      </Head>
      <header className={styles.header}>
        <h1>The Naughty Times</h1>
        <p className={styles.subtitle}>Exposing global mischief one Alice at a time.</p>
      </header>
      <main className={styles.main}>
        {[...Array(10).keys()].map(i => (
          <article key={i} className={styles.article}>
            <h2>Scandal #{i + 1}: Alice Tusa Strikes Again</h2>
            <p>Authorities baffled after Alice was caught replacing UN meeting water pitchers with mimosas. More at 11.</p>
          </article>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 The Naughty Times. All satire, all sass.</p>
      </footer>
    </>
  );
}
