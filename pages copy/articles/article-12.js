import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article12() {
  return (
    <div className={styles.articleContainer}>
      <h1>BREAKING: Alice Adopts Alias “Miss Behave” in Secret Newsletter</h1>
      <Image
        src="/images/articles/article_12.png"
        alt="Anonymous newsletter reveal"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        A weekly “Naught Watch” newsletter circulated at Dalberg for months under the name “Miss Behave.”  
        This week, forensic font-matching revealed Alice as the author.
      </p>
      <p>
        “The footer literally says ‘Made with chaos by Alice,’” one analyst said. “We missed it.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>FontSnitch</strong> <em>· 1h ago</em>
          <p>Comic Sans never lies.</p>
        </div>
      </div>
    </div>
  );
}
