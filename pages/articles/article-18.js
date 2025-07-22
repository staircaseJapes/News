import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article18() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Applies for Non-Existent Role: Chief Mischief Officer</h1>
      <Image
        src="/images/articles/article_18.png"
        alt="Job application stamped ‘approved’"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Dalberg’s HR portal was stunned by an internal job application from Alice for the role of “Chief Mischief Officer” — a position that does not exist.
        The attached CV listed skills such as “strategic chaos,” “Perudo dominance,” and “Zoom background sabotage.”
      </p>
      <p>
        Inexplicably, the application received two approvals and a note from a partner saying “Honestly? She’s already doing the job.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>HRPanicked</strong> <em>· 3h ago</em>
          <p>We're going to need a Chief Anti-Mischief Officer now.</p>
        </div>
      </div>
    </div>
  );
}
