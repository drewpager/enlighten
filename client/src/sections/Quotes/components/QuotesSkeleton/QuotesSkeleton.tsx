import React from 'react';
import { Divider, Skeleton, Alert } from 'antd';
import './QuotesSkeleton.css';

interface Props {
  title: String;
  error?: boolean;
}

export const QuotesSkeleton = ({ title }: Props, error: false) => {
  const errorAlert = error ? (
    <div>
      <Alert 
        type="error" 
        message="Oopsy something went wrong"
        className="quotes-skeleton__alert"
      />
    </div>
  ) : null;
  return (
    <div className="quotes-skeleton">
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
    </div>
  )
}