import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Quote as QuotesData } from './__generated__/Quote';
import { DeleteQuote as DeleteQuoteData, DeleteQuoteVariables } from './__generated__/DeleteQuote';
import { List, Spin, Button, Alert } from 'antd';
import { QuotesSkeleton } from './components';
import './styles/Quotes.css';

export const QUOTES = gql`
  query Quote {
    quotes {
      id
      quote
      author
      category
      period
      image
    }
  }
`;

const DELETE_QUOTE = gql`
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
  
  const { data, loading, error, refetch } = useQuery<QuotesData>(QUOTES);

  const [ deleteQuote, {loading: deleteQuoteLoading, error: deleteQuoteError }] = useMutation<DeleteQuoteData, DeleteQuoteVariables>(DELETE_QUOTE);

  const handleDeleteQuote = async (id: string) => {
    try {
      await deleteQuote({ variables: { id }});
      refetch();
    } catch (error) {
      throw Error(`${error.message}: Error in handle Delete`)
    }
  };

  const quotes = data ? data.quotes : null;
  
  const quoteList = quotes ? (
  //   <List
  //     itemLayout="horizontal"
  //     dataSource={quotes}
  //     renderItem={quote => (
  //       <List.Item
  //         actions={[
  //           <Button type="primary" onClick={() => handleDeleteQuote(quote.id)}>Delete</Button>
  //         ]}>
  //         <List.Item.Meta 
  //           title={quote.quote}
  //           description={quote.author} />
  //       </List.Item>
  //     )} 
  //   />
  // ) : null;
  <List 
      itemLayout="vertical"
      size="large"
      dataSource={quotes}
      pagination={{
        onChange: page => {
          console.log(page)
        }, 
        pageSize: 3
      }}
      footer={
        <div>
          <p>EnlightenMeDaily ©</p>
        </div>
      }
      renderItem={quote => (
        <List.Item
          key={quote.quote}
          extra={
            <img
              width={272}
              alt="logo"
              src={quote.image && quote.image.length ? quote.image : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" }
            />
          }
        >
          <List.Item.Meta 
            title={<p>{quote.quote}</p>}
            description={<p>{quote.author} | {quote.category}</p>}
          />
          <Button type="primary" onClick={() => handleDeleteQuote(quote.id)}>Delete</Button>
        </List.Item>
      )}
    />
  ) : null;
  
  if (loading) {
    return (
      <div className="quotes">
        <QuotesSkeleton title={title} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="quotes">
        <QuotesSkeleton title={title} error />
      </div>
    )
  }
  
  const deleteQuoteErrorAlert = deleteQuoteError ? (
     <Alert 
      type="error"    
      message="Deletion failed."
      className="quotes__alert"
     />
  ) : null; 

  return (
    <div className="quotes">
      {deleteQuoteErrorAlert}
      <Spin spinning={deleteQuoteLoading}>
        <h2>{title}</h2>
        {quoteList}
      </Spin>
    </div>
  )
};
