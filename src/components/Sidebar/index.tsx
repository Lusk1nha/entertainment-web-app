import { Link } from 'react-router-dom';
import { AvatarMockupIcon } from '../Icons/AvatarMockup';
import { BookmarkIcon } from '../Icons/BookmarkIcon';
import { HomeIcon } from '../Icons/HomeIcon';
import { LogoIcon } from '../Icons/LogoIcon';
import { MoviesIcon } from '../Icons/MoviesIcon';
import { TVSeriesIcon } from '../Icons/TVSeriesIcon';

import styles from '../../styles/sidebar.module.scss';

export function Sidebar() {
   return (
      <nav className={styles.sidebarContainer}>
         <div className={styles.logoContainer}>
            <LogoIcon className={styles.logoIcon} />
         </div>

         <div className={styles.navLinksContainer}>
            <Link to={'general'} className={styles.navIcon} >
               <HomeIcon />
            </Link>
            <Link to={'movies'} className={styles.navIcon}>
               <MoviesIcon />
            </Link>
            <Link to={'series'} className={styles.navIcon}>
               <TVSeriesIcon />
            </Link>
            <Link to={'bookmarked'} className={styles.navIcon}>
               <BookmarkIcon />
            </Link>
         </div>

         <div className={styles.avatarContainer}>
            <AvatarMockupIcon className={styles.userphoto} />
         </div>
      </nav>
   );
}