// user-processor.js
function processData(d) {
  var res = [];
  for(var i=0; i<d.length; i++) {
    if(d[i].a == true) {
      var x = d[i].b * 2;
      res.push({id: d[i].id, val: x});
    }
  }
  return res;
}

// Example usage
const userData = [
  {id: 1, a: true, b: 10, name: "John", active: true},
  {id: 2, a: false, b: 20, name: "Alice", active: false},
  {id: 3, a: true, b: 15, name: "Bob", active: true},
  {id: 4, a: true, b: null, name: "Sarah", active: true}
];

// This function is used in multiple places in a larger codebase
// and other developers have complained about it being difficult to understand
// and prone to errors.