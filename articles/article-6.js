import Image from 'next/image';
import styles from '../../styles/article.module.css';

export default function Article6() {
  return (
    <div className={styles.articleContainer}>
      <h1>Alice Found Guilty of Smuggling Snacks into Movie Theatre… Again</h1>
      <Image
        src="/images/articles/article_6.png"
        alt="Snack-stuffed handbag"
        width={800}
        height={450}
        className={styles.hero}
      />
      <p>
        For the third time this month, Alice Tusa was spotted at a cinema pulling out full-size hummus and crudités.
        “She makes no effort to hide it,” said a cinema worker. “It’s brazen.”
      </p>
      <p>
        Alice’s defense? “Cinemas never have baba ghanoush. That’s on them.”
      </p>
      <h2>Comments</h2>
      <div className={styles.comment}>
        <Image src="/images/avatars/default_avatar.png" alt="Avatar" width={40} height={40} />
        <div>
          <strong>SnackLawyer</strong> <em>· 1h ago</em>
          <p>Technically not illegal. Morally… complicated.</p>
        </div>
      </div>
    </div>
  );
}
