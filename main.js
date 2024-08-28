function findMatches(pattern, testString, flags) {
  const regex = new RegExp(pattern, flags);
  
  const matchesArray = [];
  let matchesFound = false;
  
  let match;
  while ((match = regex.exec(testString)) !== null) {
    matchesFound = true;
    
    const start = match.index;
    const end = regex.lastIndex;
    const matchedText = match[0];
    
    const matchObject = {
      matchedText: matchedText,
      startIndex: start,
      endIndex: end
    };
    
    matchesArray.push(matchObject);
  }
  
  const result = {
    pattern: pattern,
    testString: testString,
    flags: flags,  // Include the flags used
    matchesFound: matchesFound,
    matches: matchesArray
  };
  
  return JSON.stringify(result, null, 2);
}

const pattern = "gray|grey";
const testString = "there is a grey fox in the gray building";
const flags = "gi";

const jsonResult = findMatches(pattern, testString, flags);
console.log(jsonResult);
