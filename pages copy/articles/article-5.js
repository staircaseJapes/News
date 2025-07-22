import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article5() {
  return (
    <div className={styles.articleContainer}>
      <h1>Truffle and Alice: Who’s Naughtier? A Scientific Showdown</h1>
      <Image
        src="/images/articles/article_5.png"
        alt="Alice and Truffle in a staring contest"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        In a groundbreaking comparative study, experts compared Alice Tusa’s antics with those of her dog Truffle.
        Categories included: food theft, strategic deception, and nap frequency.
      </p>
      <p>
        “It’s close,” said Prof. Nadine Woofstein. “But Alice edges out Truffle in diplomatic incidents by at least 3 events.”
      </p>
      <p>
        Alice’s parents, Sash and Lucy, declined comment but sent a joint emoji: 😩
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>DogJournalist42</strong> <em>· 3h ago</em>
          <p>Justice for Truffle. He’s a very good boy.</p>
        </div>
      </div>
    </div>
  );
}
