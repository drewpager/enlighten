interface Quote {
  quote: string,
  author: string,
  category: string,
  period: number,
  id: string,
}

export const quotes: Quote[] = [
  {
    quote: "I think therefore I am",
    author: "René Descartes",
    category: "philosophy",
    period: 1500,
    id: "001" 
  },
  {
    quote: "Do, or do not. There is no try.",
    author: "Yoda",
    category: "philosophy",
    period: 1980,
    id: "002" 
  },
  {
    quote: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy",
    category: "motivation",
    period: 2000,
    id: "003" 
  }
]