// way 1: using split, sort and join()

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;

    const sortStr1 = str1.split('').sort().join('');
    const sortStr2 = str2.split('').sort().join('');

    return sortStr1 === sortStr2;
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false


// way 2: 
const isAnagram1 = (a, b) => {
    if(a.length !== b.length) return false;
    
    return [...a].sort().join('') === [...b].sort().join("")
}

console.log(isAnagram1('listen', 'silent')); // true 
console.log(isAnagram1('hello', "world")); // false


// Way 3: Frequency Counter 
function isAnagram2(str1, str2) {
  if(str1.length !== str2.length) return false; 

  const count = {};

  for(let char of str1) {
    count[char] = (count[char] || 0) + 1
    // { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
  }

  for(let char of str2) {
    if(!count[char]) return false;
    count[char]--; 
  }

  return true;

}

console.log(isAnagram2('listen', 'silent')); // true 
console.log(isAnagram2('hello', "world")); // false