import React from 'react';
import { createRoot } from 'react-dom/client';

import '../public/styles.css';
import '../public/index.scss';

import './babel';
import WebpackIcon from './assets/webpack-icon.svg';
import MyDate from './MyDate.js';

const post = new MyDate('My title!', WebpackIcon);
console.log(post.toString());

const App = () => (
  <div className="container">
    <h1 className="container2">
      Hi there! I'm your first webpack build, Sergo!
    </h1>
    <div className="test">Test!</div>

    <hr />

    <div className="icon"></div>

    <hr />

    <div className="scss_test">
      <h2>I AM THE SCSS</h2>
    </div>
  </div>
);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);
