import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article3() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Declares Herself "Minister of Naughtiness" at Family Dinner</h1>
      <Image
        src="/images/articles/article_3.png"
        alt="Alice standing on a chair at dinner"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        During a routine family roast, Alice Tusa stood on her chair, clinked a glass, and declared herself the “Minister of Naughtiness.”  
        Her parents, Sash and Lucy, reportedly groaned in unison. Truffle barked twice in approval.
      </p>
      <p>
        “We tried so hard,” said Lucy, sipping wine. “But she was born this way.”
        Sash added, “Honestly, Truffle’s easier to train.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>Dalberg HR Bot</strong> <em>· 1h ago</em>
          <p>This is not an official position… yet.</p>
        </div>
      </div>
    </div>
  );
}
