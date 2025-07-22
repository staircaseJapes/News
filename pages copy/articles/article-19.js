import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article19() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Redesigns Oxford Graduation Robes with Sequins and Glitter</h1>
      <Image
        src="/images/articles/article_19.png"
        alt="Sparkling graduation robes"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Christ Church Cathedral was stunned when Alice emerged in a modified academic gown — complete with rhinestones, sequined initials, and subtle glitter.
        “I just thought tradition needed a glow-up,” she reportedly said.
      </p>
      <p>
        The Vice-Chancellor refused to comment but was later seen Googling “sequin supplier UK.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>GlitterGrad</strong> <em>· 4h ago</em>
          <p>Alice, you’ve changed the game. The bar is now FABULOUS.</p>
        </div>
      </div>
    </div>
  );
}
