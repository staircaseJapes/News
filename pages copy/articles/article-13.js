import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article13() {
  return (
    <div className={styles.articleContainer}>
      <h1>Nature or Nurture: Was Alice Born Naughty?</h1>
      <Image
        src="/images/articles/article_13.png"
        alt="Baby Alice pulling mischievous face"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        Psychologists are divided: is Alice Tusa’s naughtiness innate or a result of upbringing?  
        Her mother Lucy commented, “She once tricked a babysitter at age three. The signs were there.”  
        Sash added, “She trained Truffle to bring her biscuits. And only her.”
      </p>
      <p>
        A peer-reviewed paper concluded, “She’s simply Alice.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>Truffle</strong> <em>· 3h ago</em>
          <p>woof 🐾 (translation: nurture)</p>
        </div>
      </div>
    </div>
  );
}
