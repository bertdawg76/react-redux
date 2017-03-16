let redux = require('redux');

console.log('starting redux example');

function add (a, b) {
  return a + b;
}

function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen',
    age: 34
  }
}

var res = changeProp({
  name: 'Bert'
});
console.log(res);