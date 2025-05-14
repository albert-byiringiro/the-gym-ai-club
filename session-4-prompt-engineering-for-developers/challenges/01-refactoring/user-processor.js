function processData(data) {
  // Input validation
  if (!Array.isArray(data)) {
    throw new TypeError("Input must be an array");
  }

  const result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    // Skip invalid items (optional: could throw error instead)
    if (typeof item !== 'object' || item === null) {
      continue;
    }

    // Validate required fields exist and have correct types
    if (
      item.a === true &&
      typeof item.id !== 'undefined' &&
      typeof item.b === 'number' &&
      !isNaN(item.b)
    ) {
      const doubledValue = item.b * 2;
      result.push({ 
        id: item.id, 
        val: doubledValue 
      });
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