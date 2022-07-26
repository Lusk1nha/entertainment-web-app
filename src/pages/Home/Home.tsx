import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Searchbar } from "../../components/Searchbar";
import { Sidebar } from "../../components/Sidebar";
import { IDataRepo } from "../../shared/models/IDataRepo";
import { DataRepo } from "../../shared/services/DataRepo";
import styles from './styles.module.scss';

export function Home() {
   const [data, setData] = useState<IDataRepo[]>([]);
   const dataRepo = new DataRepo('data.json');

   useEffect(() => {
      const getAsyncData = async (): Promise<void> => {
         const response = await dataRepo.getJSON();
         setData(response)
         localStorage.setItem('data', JSON.stringify(response));
      }

      try {
         const cache = localStorage.getItem('data');
         
         if(cache !== null) {
            setData(JSON.parse(cache));
         } else {
            getAsyncData();
         }
      } catch(err) {
         console.error(err);
      }
   }, [])

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
               {data.slice(0, 16).map((value) => {  
                  return (
                     <Card {...value} />
                  )
               })}
            </div>
         </main>
      </section>
   )
}