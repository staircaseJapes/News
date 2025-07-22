import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article14() {
  return (
    <div className={styles.articleContainer}>
      <h1>Truffle vs. Alice: Who’s Naughtier?</h1>
      <Image
        src="/images/articles/article_14.png"
        alt="Alice and Truffle in a face-off"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        In a shocking twist, Alice Tusa is tied with her dog Truffle in the 2025 Naughty Rankings.
        Truffle has chewed four wedding shoes and once stole a charcuterie board. Alice, however, hacked a karaoke machine to only play songs with “bad” in the title.
      </p>
      <p>
        “We raised them both,” sighed Lucy. “Maybe it’s genetic.” Sash declined to comment, muttering something about “raisins and chaos.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>VetAnon</strong> <em>· 2h ago</em>
          <p>Truffle has never committed whiteboard sabotage. Case closed.</p>
        </div>
      </div>
    </div>
  );
}
