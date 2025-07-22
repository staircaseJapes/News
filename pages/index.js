import Link from 'next/link';
import styles from '../styles/globals.module.css';

const articles = [
  { id: 1, title: "Alice Tusa Linked to Global Pillow Theft Ring", slug: "article-1" },
  { id: 2, title: "Alice Found Swapping Zoom Backgrounds to Subvert Authority", slug: "article-2" },
  { id: 3, title: "Alice Declares ‘Naughty Hour’ on All Dalberg Calendars", slug: "article-3" },
  { id: 4, title: "Alice Trains Truffle to Steal Sandwiches from Park-Goers", slug: "article-4" },
  { id: 5, title: "Alice Applies for Non-Existent Role: Chief Mischief Officer", slug: "article-5" },
  { id: 6, title: "Alice Redesigns Oxford Robes with Sequins and Glitter", slug: "article-6" },
  { id: 7, title: "Alice Wins Local Mayoral Election by Accident", slug: "article-7" },
  { id: 8, title: "Why Is Alice So Naughty? (An Op-Ed)", slug: "article-8" },
  { id: 9, title: "Alice Banned from Pret for Suspiciously Frequent Loyalty Card Use", slug: "article-9" },
  { id: 10, title: "Alice Uses Fake Name ‘Alisha T’ to Win Perudo Tournaments", slug: "article-10" },
  { id: 11, title: "Alice Outsmarts UN Diplomats with Perudo Bluff, Chaos Ensues", slug: "article-11" },
  { id: 12, title: "Alice Found Gifting Truffle to Unsuspecting Foreign Leaders", slug: "article-12" },
  { id: 13, title: "Alice Bribes French Bakers to Rename Croissants ‘Tusas’", slug: "article-13" },
  { id: 14, title: "Alice Secretly Rewrites Wikipedia Pages for Fun", slug: "article-14" },
  { id: 15, title: "Alice Seen Conducting Symphony of Ducklings in Hyde Park", slug: "article-15" },
  { id: 16, title: "Alice Sends Cryptic Messages via Dalberg’s Office Plants", slug: "article-16" },
  { id: 17, title: "Alice Reprograms Office Coffee Machine to Only Brew ‘Mischief Macchiatos’", slug: "article-17" },
  { id: 18, title: "Alice Sets World Record for Longest Perudo Standoff", slug: "article-18" },
  { id: 19, title: "Alice vs. Truffle: Who Is Naughtier? (Nature vs. Nurture)", slug: "article-19" },
  { id: 20, title: "Charlotte & Jonathan Declare Alice a ‘Dirty Little Liar’ — Here’s Why", slug: "article-20" },
];

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
