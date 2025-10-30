const Input = [1, 2, 3, 5];

function findMissingNumber(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      return nums[i] + 1;
    }
  }
  return null;
}
console.log(findMissingNumber(Input)); // 4


// Way 2: 
function findMissingNumbers(nums) {
  let missingNums = [];
  for(let i=0; i<nums.length-1; i++) {
    for(let nextNumber = nums[i] + 1; nextNumber < nums[i+1]; nextNumber++) {
      missingNums.push(nextNumber)
    }
  }
  return missingNums.length ? missingNums : null
}

console.log(findMissingNumbers([1, 2, 4, 6])); // [3, 5]
console.log(findMissingNumbers([1, 2, 3, 5])); // [4]
