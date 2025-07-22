import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article8() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Caught Cheating at Perudo... Again</h1>
      <Image
        src="/images/articles/article_8.png"
        alt="Alice rolling dice suspiciously"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Despite her innocent smile, Alice once again shocked friends with an uncanny ability to win at Perudo.
        “She looked me in the eye and lied about having four fives,” said Jonathan Davidson. “She’s a dirty little liar.”
      </p>
      <p>
        Charlotte Badenoch added, “I genuinely thought she was trustworthy. I feel… duped.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>DiceWatcher7</strong> <em>· 4h ago</em>
          <p>She must be stopped before the national Perudo league suffers.</p>
        </div>
      </div>
    </div>
  );
}
