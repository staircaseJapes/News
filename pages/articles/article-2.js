import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article2() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Allegedly Reprograms Office Printer to Say “Be Naughty”</h1>
      <Image
        src="/images/articles/article_2.png"
        alt="Corrupted office printer"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Strategy consultant Alice Tusa has come under scrutiny after every printer in Dalberg’s London office began issuing papers with a faint watermark reading “BE NAUGHTY, STAY NAUGHTY.”
        IT insists no hack occurred. Alice insists “coincidences happen.”
      </p>
      <p>
        The incident led to unexpected morale boosts — and several client proposals signed off with smiley faces.
        “I don’t know if I should be angry or inspired,” said a confused managing partner.
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image
          src="/images/avatars/default_avatar.png"
          alt="Avatar"
          width={40}
          height={40}
        />
        <div>
          <strong>Jonathan Davidson</strong> <em>· 4h ago</em>
          <p>I knew she was a “dirty little liar” at Perudo… but this? Wow.</p>
        </div>
      </div>
      <div className={styles.comment}>
        <Image
          src="/images/avatars/default_avatar.png"
          alt="Avatar"
          width={40}
          height={40}
        />
        <div>
          <strong>Charlotte Badenoch</strong> <em>· 3h ago</em>
          <p>She looks so honest! I’m honestly shaken.</p>
        </div>
      </div>
    </div>
  );
}
