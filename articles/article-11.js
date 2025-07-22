import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article11() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Rewrites Charity Quiz Questions to Include Herself</h1>
      <Image
        src="/images/articles/article_11.png"
        alt="Quiz night chaos"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Chaos erupted at a Dalberg charity pub quiz when question 4 read:  
        “Who is the naughtiest employee currently sitting in this room?”  
        The correct answer, apparently, was “Alice.”
      </p>
      <p>
        “It was her handwriting,” said one colleague. “And her grin.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>QuizMaster7</strong> <em>· 6h ago</em>
          <p>This is why we laminate answer sheets.</p>
        </div>
      </div>
    </div>
  );
}
