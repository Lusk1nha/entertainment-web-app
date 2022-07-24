import { Searchbar } from "../../components/Searchbar";
import { Sidebar } from "../../components/Sidebar";
import styles from './styles.module.scss';

export function Home() {
   return (
      <section className={styles.page}>
         <header className={styles.pageHeader}>
            <Sidebar />
         </header>
         <main className={styles.content}>
            <Searchbar 
               name={'Movies placeholder'}
               aria-label={'Input to search for movies or TV series'}
               placeholder={'Search for movies or TV series'}
            />
            <div className={styles.cardsContainer}>

            </div>
         </main>
      </section>
   )
}