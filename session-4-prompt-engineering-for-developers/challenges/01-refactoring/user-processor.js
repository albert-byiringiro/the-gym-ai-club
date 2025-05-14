const transformAndFilterActiveItems = (originalData) => {
  if (!Array.isArray(originalData)) {
    throw new TypeError("Input must be an array of items");
  }

  // Early return for empty input
  if (originalData.length === 0) return [];

  return originalData.flatMap((currentItem) => {
    // Modern nullish checks with optional chaining
    if (!isValidItem(currentItem)) return [];

    // Using modern Number methods and property checks
    if (shouldProcessItem(currentItem)) {
      return [createProcessedItem(currentItem)];
    }

    return [];
  });
};

// Arrow functions with proper type checking
const isValidItem = (item) => 
  item?.constructor === Object && 
  Object.hasOwn(item, 'a') && 
  Object.hasOwn(item, 'b') && 
  Object.hasOwn(item, 'id');

const shouldProcessItem = (item) => {
  // Modern number validation and type safety
  const isNumeric = Number.isFinite(item.b);
  const isValidId = typeof item.id === 'number' || typeof item.id === 'string';
  
  return (
    item.a === true &&
    isValidId &&
    isNumeric &&
    // Protect against prototype pollution
    Object.hasOwn(item, 'id') &&
    Object.hasOwn(item, 'a') &&
    Object.hasOwn(item, 'b')
  );
};

const createProcessedItem = (item) => ({
  id: item.id,
  val: item.b * 2,
  // Added metadata for debugging
  _source: { 
    b: item.b, 
    calculatedAt: new Date().toISOString() 
  }
});

// Example usage with additional edge cases
const userData = [
  {id: 1, a: true, b: 10, name: "John", active: true},
  {id: 2, a: false, b: 20, name: "Alice", active: false},
  {id: 3, a: true, b: 15, name: "Bob", active: true},
  {id: 4, a: true, b: null, name: "Sarah", active: true},
  {id: NaN, a: true, b: 5}, // New edge case
  {id: '5', a: true, b: 25}, // String ID case
  Object.create({prototypePollution: true}), // Prototype check
  {a: true, b: 30}, // Missing ID
  {id: 6, b: 35}, // Missing 'a'
  {id: 7, a: true, b: Infinity} // Infinite value
];