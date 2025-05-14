function processData(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].a === true) {  // Strict equality check
      const doubledValue = data[i].b * 2;
      result.push({ id: data[i].id, val: doubledValue });
    }
  }
  return result;
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