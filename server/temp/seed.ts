require('dotenv').config();

import { connectDatabase } from '../src/database/index';
import { Quote } from '../src/lib/types';
import { ObjectId } from 'mongodb';

const seed = async () => {
  try {
    console.log(`[seed]: running...`);

    const db = await connectDatabase();
    const quotes: Quote[] = [
      {
        _id: new ObjectId,
        quote: "I think therefore I am",
        author: "René Descartes",
        category: "philosophy",
        period: 1500 
      },
      {
        _id: new ObjectId, 
        quote: "Do, or do not. There is no try.",
        author: "Yoda",
        category: "philosophy",
        period: 1980
      },
      {
        _id: new ObjectId,
        quote: "Goals are the fuel in the furnace of achievement.",
        author: "Brian Tracy",
        category: "motivation",
        period: 2000
      }
    ];

    for (const quote of quotes) {
      await db.quotes.insertOne(quote);
    }
    console.log(`[seed]: success`);
  } catch (error) {
    throw new Error('failed to seed server');
  }
};

seed();