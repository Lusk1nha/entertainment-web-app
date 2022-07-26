interface IThumbnail {
   trending?: ITrending;
   regular: IRegular;
}

interface ITrending {
   small: string | undefined;
   large: string | undefined;
}

interface IRegular {
   small: string | undefined;
   medium: string | undefined;
   large: string | undefined;
}

export interface IDataRepo {
   title: string;
   thumbnail: IThumbnail;
   year: number;
   category: string;
   rating: string;
   isBookmarked: boolean,
   isTrending: boolean
}
