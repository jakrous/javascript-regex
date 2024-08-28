function findMatches(pattern, testString) {
  // Compile the regex pattern
  const regex = new RegExp(pattern, 'g');
  
  // Initialize an empty array to hold match details
  const matchesArray = [];
  let matchesFound = false;
  
  // Use exec to find all matches
  let match;
  while ((match = regex.exec(testString)) !== null) {
    matchesFound = true; // Set to true as soon as a match is found
    
    const start = match.index;
    const end = regex.lastIndex;
    const matchedText = match[0];
    
    // Create a match object
    const matchObject = {
      matchedText: matchedText,
      startIndex: start,
      endIndex: end
    };
    
    // Add the match object to the array
    matchesArray.push(matchObject);
  }
  
  // Create the final result object
  const result = {
    pattern: pattern,
    testString: testString,
    matchesFound: matchesFound,
    matches: matchesArray
  };
  
  // Convert the result object to a JSON string
  return JSON.stringify(result, null, 2); // Pretty print with an indent of 2 spaces
}

// Example usage
const pattern = "gray|grey";
const testString = "there is a grey fox in the gray building";
const jsonResult = findMatches(pattern, testString);
console.log(jsonResult);
