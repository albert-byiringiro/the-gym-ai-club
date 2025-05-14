function transformAndFilterActiveItems(originalData) {
  if (!Array.isArray(originalData)) {
    throw new TypeError("Input must be an array of items");
  }

  return originalData.reduce((accumulatedResults, currentItem) => {
    if (!isValidItem(currentItem)) {
      return accumulatedResults; // immutable return
    }

    if (shouldProcessItem(currentItem)) {
      const processedItem = createProcessedItem(currentItem);
      return [...accumulatedResults, processedItem]; // immutable update
    }

    return accumulatedResults;
  }, []);
}

// Pure helper functions with descriptive names
function isValidItem(item) {
  return typeof item === 'object' && item !== null;
}

function shouldProcessItem(item) {
  return (
    item.a === true &&
    typeof item.id !== 'undefined' &&
    typeof item.b === 'number' &&
    !isNaN(item.b)
  );
}

function createProcessedItem(item) {
  return {
    id: item.id,
    val: item.b * 2
  };
}

// Example usage remains the same
const userData = [
  {id: 1, a: true, b: 10, name: "John", active: true},
  {id: 2, a: false, b: 20, name: "Alice", active: false},
  {id: 3, a: true, b: 15, name: "Bob", active: true},
  {id: 4, a: true, b: null, name: "Sarah", active: true}
];