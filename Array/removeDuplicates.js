// Way 1 - using set method

let numbers = [10, 20, 30, 20, 10, 40];
let uniqueNums = [...new Set(numbers)]
console.log(uniqueNums) // [ 10, 20, 30, 40 ]

// Way 2 - using reduce() method
function removeDuplicates(nums) {
    const uniqueNums = nums.reduce((acc, curr) => {
        if(!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc;
    }, [])
    console.log(uniqueNums) // [ 10, 20, 30, 40 ]
}
removeDuplicates(numbers)

// Way 3 - for of loop
function findUniqueElements(nums) {
  let result = [];
  for(let num of nums) {
    if(!result.includes(num)) {
        result.push(num)
    }
  }
  return result
}
console.log(findUniqueElements(numbers)) // [ 10, 20, 30, 40 ]

// Way 4 - Using filter and index
function findUniqueElements1(nums) {
    return nums.filter((item, index)=> nums.indexOf(item) === index)
}
console.log(findUniqueElements1(numbers))