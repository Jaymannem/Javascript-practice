const text = "mannem";

// way 1: using for loop
function stringReverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(stringReverse(text)); // mennam

// way 2: using split, reverse and join()

const textReverse = text.split("").reverse().join("");
console.log(textReverse); // mennam

// Way 3: Using reduce
const reverseString = text
  .split("")
  .reduce((reverse, char) => char + reverse, "");

console.log(reverseString); // mennam


// Way 4: Using spread operator 
const textreverse = [...text].reverse().join('');
console.log(textreverse); // mennam


// Way 5: Using Recursion

function stringText(str) {
    if(str === "") return "";

    return stringText(str.slice(1)) + str[0]
}
console.log(stringText(text)) // mennam