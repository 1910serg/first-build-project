import '../public/styles.css';
import '../public/index.scss';

import './babel';

import WebpackIcon from './assets/webpack-icon.svg';
import MyDate from './MyDate.js';

const post = new MyDate('My title!', WebpackIcon);
console.log(post.toString());
