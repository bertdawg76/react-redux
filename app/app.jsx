let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

// app css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <p>I love donuts</p>,
  document.getElementById('app')
);

require('./redux-example.jsx');