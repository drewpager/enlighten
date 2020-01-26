/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Quote
// ====================================================

export interface Quote_quotes {
  __typename: "Quote";
  id: string;
  quote: string;
  author: string;
  category: string;
  period: number;
  image: string;
}

export interface Quote {
  quotes: Quote_quotes[];
}
