function findShortestString(arr) {
  let webLength = []
  for (const string of arr){
    webLength.push(string.length)
  }
  const smolString = Math.min(...webLength)
  const indx = webLength.indexOf(smolString)
  return arr[indx]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function takes in array of strings
// calculates the .length of each string and puts that in an array
// then gets the shortest number and returns the index of that number, then returning the same index of the original array
