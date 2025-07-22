import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article20() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Accidentally Elected Mayor of Small Town After Mischievous Prank</h1>
      <Image
        src="/images/articles/article_20.png"
        alt="Mayoral sash and confused face"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        A joke campaign titled “Vote for Naughty” took an unexpected turn when Alice Tusa was officially elected mayor of the village of Much Bungling.
        Her only campaign promise? “More biscuits, less meetings.”
      </p>
      <p>
        When reached for comment, Alice replied: “Wait, I won? I thought this was a vibe check.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>MuchBunglingLocal</strong> <em>· 6h ago</em>
          <p>She’s already replaced all town signs with ‘The Naughty Borough.’ Help.</p>
        </div>
      </div>
    </div>
  );
}
