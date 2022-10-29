import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import WebpackIcon from './assets/webpack-icon.svg';
import MyDate from './MyDate';
import { store } from './store';

// --- styles and packages --- //
import '../public/styles.css';
import '../public/index.scss';

import './babel';
import { Provider } from 'react-redux';

const post = new MyDate('My title!', WebpackIcon);
console.log(post.toString());

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
