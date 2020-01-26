import { ObjectId, Collection } from 'mongodb';
 
export interface Quote {
  _id: ObjectId,
  quote: string,
  author: string,
  category: string,
  period: number,
  image: string 
}

export interface Database {
  quotes: Collection<Quote>;
}