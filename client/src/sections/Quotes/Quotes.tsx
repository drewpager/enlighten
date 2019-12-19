import React from 'react';
import { server } from '../../lib/api';
import { QuotesData, DeleteQuoteVariables, DeleteQuoteData } from './types';

const QUOTES = `
  query Quote {
    quotes {
      id
      quote
      author
      category
      period
    }
  }
`;

const DELETE_QUOTE = `
  mutation DeleteQuote($id: ID!) {
    deleteQuote(id: $id) {
      id
    }
  }
`;

interface Props {
  title: String;
}

export const Quotes = ({ title }: Props) => {
  const fetchQuotes = async () => {
    const { data } = await server.fetch<QuotesData>({ query: QUOTES })
    console.log(data);
  }
  const deleteQuote = async () => {
    const { data } = await server.fetch<DeleteQuoteData, DeleteQuoteVariables>({ 
      query: DELETE_QUOTE,
      variables: {
        id: "5df53a5ab880f0765989db94"
      }
     })
    console.log(data);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchQuotes}>Get Quotes</button>
      <button onClick={deleteQuote}>Delete Quote!</button>
    </div>
  )
};
