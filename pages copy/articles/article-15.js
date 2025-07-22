import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article15() {
  return (
    <div className={styles.articleContainer}>
      <h1>WhiteboardGate: Alice Draws Mustaches on Strategy Frameworks</h1>
      <Image
        src="/images/articles/article_15.png"
        alt="Whiteboard mischief"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        In an internal Dalberg investigation, Alice was linked to over 14 instances of strategic frameworks being defaced with cartoon mustaches, monocles, and “naughty points.”
        Her defense? “They looked too serious.”
      </p>
      <p>
        A peer added, “Honestly, the visuals improved.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>MiroLover</strong> <em>· 5h ago</em>
          <p>This is why we went digital.</p>
        </div>
      </div>
    </div>
  );
}
