import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article10() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Blamed for International Pillow Shortage</h1>
      <Image
        src="/images/articles/article_10.png"
        alt="Mountain of pillows in a flat"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        With demand for goose-down pillows at an all-time high, several airlines and hotels have reported inexplicable losses.
        A single London flat — Alice Tusa’s — was found to contain no fewer than 67 branded pillows.
      </p>
      <p>
        “I need them to think,” Alice explained. “Some people journal, I burrow.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>PillowUnion</strong> <em>· 1h ago</em>
          <p>This is an act of war.</p>
        </div>
      </div>
    </div>
  );
}
