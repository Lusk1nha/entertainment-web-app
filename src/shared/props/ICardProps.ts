interface IThumbnail {
   trending: ITrending;
   regular: IRegular;
}

interface ITrending {
   small: string | File;
   large: string | File;
}

interface IRegular {
   small: string | File;
   medium: string | File;
   large: string | File;
}

export interface ICardProps {
   title: string;
   thumbnail: IThumbnail;
   year: number;
   category: string;
   rating: string;
   isBookmarked: boolean,
   isTrending: boolean
}
