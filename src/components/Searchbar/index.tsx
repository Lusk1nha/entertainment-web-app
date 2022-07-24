import { useState, FormEvent } from 'react';
import styles from '../../styles/searchbar.module.scss';
import { SearchIcon } from '../Icons/SearchIcon';


export function Searchbar(props: React.InputHTMLAttributes<HTMLInputElement>) {
   const [searchValue, setSearchValue] = useState<string>('');

   const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
      setSearchValue(event.currentTarget.value);
   }

   return (
      <div className={styles.searchbarContainer}>
         <div className={styles.searchIcon}>
            <SearchIcon /> 
         </div>
         <input
            className={styles.searchInput}
            onChange={handleOnChange} 
            value={searchValue}
            placeholder={props.placeholder}
            name={props.name}
            aria-label={props['aria-label']}
         />
      </div> 
   );
}