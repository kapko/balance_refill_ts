export interface IList {
  image: string;
  title: string;
  description: string;
}

export interface IProviders {
  fetched: boolean;
  items: IList[];
}

