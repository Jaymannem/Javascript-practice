const arr = [1,2,3,2,4,1,5]

// 1. using filter and index
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates) // [2, 1]

// 2. using object
function findDuplicates(nums) {
    let duplicatesCount = {};
    let duplicateElements = [];

    for(let num of nums) {
        duplicatesCount[num] = (duplicatesCount[num] || 0) + 1
        if(duplicatesCount[num] === 2) {
            duplicateElements.push(num)
        }
    }
    return duplicateElements
}
console.log(findDuplicates(arr))