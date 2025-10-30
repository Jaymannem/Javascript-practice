
// Way:1 for of
const text = "Welcome to Javascript programming";

function findLongestWord(text) {
  const words = text.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(text)); // programming



// Way2: Using split() and reduce() 
function findLongestWord1(text) {
    const words = text.split(" ");
    return words.reduce((current, longest) => {
        return current.length > longest.length ? current : longest
    }, "")
}
console.log(findLongestWord1(text)) // programming



// Way3: Using split() and sort()
function findLongestWord2(text) {
  const words = text.split(" ");
  const sortWords = words.sort((a, b) => b.length - a.length); // [ 'programming', 'Javascript', 'Welcome', 'to' ]
  return sortWords[0] // programming

}
console.log(findLongestWord2(text))