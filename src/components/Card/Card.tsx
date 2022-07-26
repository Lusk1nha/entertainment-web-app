import { ICardProps } from '../../shared/props/ICardProps';
import styles from '../../styles/card.module.scss';
import { BookmarkEmptyIcon } from '../Icons/BookMarkEmptyIcon';

export function Card(props: ICardProps) {
   return(
      <section className={styles.cardContainer}>
         <div className={styles.card}>
            {/* <div className={styles.cardLinear}></div> */}
            <img className={styles.cardBanner} src={props.thumbnail.regular.large} alt={props.title} />
            <button type={'button'} className={styles.bookmarkBtn}>
               <BookmarkEmptyIcon width={14} height={16} />
            </button>
         </div>
         <div className={styles.infoContainer}>
            <p className={styles.info}>
               <span>
                  {props.year}
               </span>
               <span className={styles.cardInfoDot}></span>
               <span>
                  {props.category}
               </span>
               <span className={styles.cardInfoDot}></span>
               <span>
                  {props.rating}
               </span>
            </p>
            <h3 className={styles.name}>
               {props.title}
            </h3>
         </div>
      </section>
   );
} 