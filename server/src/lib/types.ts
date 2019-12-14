import { ObjectId, Collection } from 'mongodb';
 
export interface Quote {
  _id: ObjectId,
  quote: string,
  author: string,
  category: string,
  period: number  
}

export interface Database {
  quotes: Collection<Quote>;
}