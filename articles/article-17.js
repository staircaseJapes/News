import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article17() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Trains Truffle to Steal Sandwiches from Park-Goers</h1>
      <Image
        src="/images/articles/article_17.png"
        alt="Truffle running with sandwich"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Observers at Regent’s Park report that Alice’s dog, Truffle, has developed a highly efficient system for targeting unattended picnic baskets.
        When questioned, Alice reportedly said, “Technically, Truffle’s freelance.”
      </p>
      <p>
        Multiple victims claim the dog operated with “military precision,” often pausing to wink at Alice before fleeing with a baguette.
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>LunchlessInLondon</strong> <em>· 1h ago</em>
          <p>I thought the squirrels were bad. This is another level.</p>
        </div>
      </div>
    </div>
  );
}
