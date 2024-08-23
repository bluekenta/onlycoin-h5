export interface ICard {
  symbol: React.ReactNode;
  title: string;
  card?: React.ReactNode[];
  desc?: string;
  alarm?: boolean;
}

export interface ICurrency {
  icon: React.ReactNode;
  name: string;
  desc: string;
}
export interface IMethodChildren {
  desc?: string;
  cards: ICard[];
}

export interface ICurrencyChildren {
  searchBox?: boolean;
  listTitle: string;
  currencies: ICurrency[];
}

export enum EType {
  METHOD,
  CURRENCY,
  OTHER,
}
