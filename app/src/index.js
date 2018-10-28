import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

function time() {
  const display = (
    <div>
      <h1>Hello, DevMountain!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <button>I am a Button</button>
    </div>
  );
  ReactDOM.render(display, document.getElementById('root'));
}

setInterval(time, 1000);
