import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App.jsx';

import WebpackIcon from './assets/webpack-icon.svg';
import MyDate from './MyDate.js';

// --- styles and packages
import '../public/styles.css';
import '../public/index.scss';

import './babel';

const post = new MyDate('My title!', WebpackIcon);
console.log(post.toString());

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);
