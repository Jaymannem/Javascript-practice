// 1. using reverse() method.

let numbers = [1, 2, 3, 4, 5];
let reverse = [...numbers].reverse();
console.log(reverse) // [ 5, 4, 3, 2, 1 ]
console.log(numbers) // [1, 2, 3, 4, 5]

// 2. using for loop 
function reverseArray(nums) {
    let result = [];
    for(let i = nums.length-1; i>=0; i--) {
        result.push(nums[i])
    }
    return result;
}
console.log(reverseArray([10, 20, 30])) // [ 30, 20, 10 ]

// 3. using reduce method
const reversed = [1, 2, 3].reduce((acc, val) => [val, ...acc], []);
console.log(reversed) // [ 3, 2, 1 ]

//4. toReverse() method:
const originalArray = [10,20, 30, 40];
const reversedArray = originalArray.toReversed();
console.log(reversedArray) // [ 40, 30, 20, 10 ]
console.log(originalArray) // [ 10, 20, 30, 40 ]


