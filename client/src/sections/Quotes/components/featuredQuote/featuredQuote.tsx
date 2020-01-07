import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Quote as QuotesData } from '../../__generated__/Quote';
import { List, Button, Spin, Alert } from 'antd';
import { QuotesSkeleton } from '..';
import './styles/Quotes.css';

const QUOTES = gql`
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

interface Props {
  title: String
}

export const featuredQuote = ({title}: Props) => {
  const { data, loading, error, refetch } = useQuery<QuotesData>(QUOTES);
  
  const quotes = data ? data.quotes : null;
  
  const quoteFeature = quotes ? (
    quotes.map(i => i.id)
  ) : null

  if (loading) {
    return (
      <Spin />
    )
  }

  if (error) {
    return (
      <Alert
        type="warning" 
        message="Error in featured quote!"
      />
    )
  }

  return quoteFeature;
}
