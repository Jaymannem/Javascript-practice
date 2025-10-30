const nestedArray = [1, [2, [3, 4,[8]], [5,6]], 7];

// Way 1: Using built-in functions

const flatArray = nestedArray.flat(Infinity);
console.log(flatArray) // [ 1, 2, 3, 4, 5, 6, 7 ]

// Way 2: Without built-in functions
function flattenArray(arr) {
    let result = [];
    for(let nums of arr) {
        if(Array.isArray(nums)) {
            result = result.concat(flattenArray(nums))
        } else {
            result.push(nums)
        }
    }
    return result;
}
console.log(flattenArray(nestedArray)) // [ 1, 2, 3, 4, 5, 6, 7 ]