import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article1() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Caught Red-Handed in Late-Night Biscuit Raid</h1>
      <Image
        src="/images/articles/article_1.png"
        alt="Alice caught during a biscuit raid"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        In a shocking turn of events, Alice Tusa was discovered at 2:13 AM last night rifling through a diplomatic snack reserve during a UN summit.
        Eyewitnesses report a “crinkle of foil” followed by muffled giggling and suspicious crumbs on her blazer.
      </p>
      <p>
        The Secretary General issued a formal complaint, citing “irregular biscuit displacement.” Alice, unrepentant, responded with a single word: “Worth it.”
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
          <strong>Angela Merkel</strong> <em>· 3h ago</em>
          <p>We trusted her with the Hobnobs. This betrayal cuts deep.</p>
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
          <strong>ObamaFan33</strong> <em>· 2h ago</em>
          <p>She’s not the hero we wanted… but maybe the snacker we deserve.</p>
        </div>
      </div>
    </div>
  );
}
