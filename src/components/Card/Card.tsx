import { ICardProps } from '../../shared/props/ICardProps';
import styles from '../../styles/card.module.scss';

export function Card() {
   return(
      <section className={styles.cardContainer}>
         <div className={styles.card}>
            <button type={'button'} className={styles.bookmarkBtn}>

            </button>
         </div>

         <div className={styles.infoContainer}>
            <p className={styles.info}>

            </p>
            <h3 className={styles.name}>

            </h3>
         </div>
      </section>
   );
} 