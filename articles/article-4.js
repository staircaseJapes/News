import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article4() {
  return (
    <div className={styles.articleContainer}>
      <h1>G7 Summit Disrupted as Alice Unplugs Macron’s Charging Cable</h1>
      <Image
        src="/images/articles/article_4.png"
        alt="Macron looking furious"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        In a minor diplomatic incident, Alice Tusa reportedly unplugged Emmanuel Macron’s phone charger to juice her own iPad “for Perudo scorekeeping.”  
        Macron was not amused. “Ce n’est pas drôle,” he tweeted.
      </p>
      <p>
        Alice’s iPad background was later revealed to be a photoshopped image of Truffle in a beret.
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>G7 Translator</strong> <em>· 7h ago</em>
          <p>“Pas drôle” is the harshest insult we’ve ever had to translate.</p>
        </div>
      </div>
    </div>
  );
}
