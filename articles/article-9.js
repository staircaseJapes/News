import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article9() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Allegedly Replaced Entire Group Chat Names with “Naught Club”</h1>
      <Image
        src="/images/articles/article_9.png"
        alt="Phone screen with renamed group chats"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Several WhatsApp groups reported being mysteriously renamed to variations of “The Naughty Bunch”, “Secretly Naughty”, and “Naught Club (Don’t Tell HR)”.
        The culprit? A silent member named Alice.
      </p>
      <p>
        “We didn’t even know she had admin rights,” said one friend. “We do now.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>WhatsAdmin89</strong> <em>· 2h ago</em>
          <p>This is why you audit your admin list annually.</p>
        </div>
      </div>
    </div>
  );
}
