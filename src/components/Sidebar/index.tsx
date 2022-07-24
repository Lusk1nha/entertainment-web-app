import { Link } from 'react-router-dom';

export function Sidebar() {
   return (
      <nav>
         <div></div>

         <div>
            <Link to={'general'}>
               G
            </Link>
            <Link to={'movies'}>
               M
            </Link>
            <Link to={'tvSeries'}>
               TV
            </Link>
            <Link to={'bookmarked'}>
               B
            </Link>
         </div>

         <div></div>
      </nav>
   );
}