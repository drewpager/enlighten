import React from 'react';
import { render } from 'react-dom';
import { Quotes } from './sections';
import * as serviceWorker from './serviceWorker';

render(<Quotes title="Enlighten Me Daily Quotes"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
