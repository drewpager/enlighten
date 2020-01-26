import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Quotes } from './sections';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import './styles/index.css';
// var contentful = require('contentful');

// const client = contentful.createClient({
//   space: `${process.env.CONTENTFUL_SPACE_ID}`,
//   accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
// })

const client = new ApolloClient({
  uri: "/api"
});

// client.getEntry('5YmtDDS7h6CbNrLzJEX0Zn')
//   .then(function (entry: any) {
//     console.log(entry.sys);
//     console.log(entry.fields);
//   });
render(
<ApolloProvider client={client}>
  <Header />
  <Quotes title="Enlighten Me Daily Quotes"/>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
