import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article16() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Adds Easter Eggs to Serious Reports</h1>
      <Image
        src="/images/articles/article_16.png"
        alt="Report with hidden jokes"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        A major global energy report contained a page footer reading:  
        “If you’ve read this far, reward yourself with a biscuit.”
        The author? You guessed it — Alice.
      </p>
      <p>
        This marks the 7th confirmed Easter egg planted in official deliverables this year alone.
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>AuditTeamAlpha</strong> <em>· 4h ago</em>
          <p>At least she didn’t sneak in a rickroll this time.</p>
        </div>
      </div>
    </div>
  );
}
