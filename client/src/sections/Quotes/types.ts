interface Quotes {
  id: string;
  quote: string;
  author: string;
  category: string;
  period: number;
}

export type QuotesData = {
  quotes: Quotes[];
};

export interface DeleteQuoteData {
  deleteQuote: Quotes;
}

export interface DeleteQuoteVariables {
  id: string;
}