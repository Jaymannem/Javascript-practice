// Way 1: Using split, reverse and join()

function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Way 2: Using Recursion
function isPalindrome1(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome1(str.slice(1, -1));
}
console.log(isPalindrome1("madam")); // true
console.log(isPalindrome1("hello")); // false

// Way 3: Using every()
function isPalindrome2(str) {
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

console.log(isPalindrome2("madam")); // true
console.log(isPalindrome2("hello")); // false

// Way 4: Using for loop
function isPalindrome3(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome3("madam")); // true
console.log(isPalindrome3("hello")); // false
