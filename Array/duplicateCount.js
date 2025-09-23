function countDuplicates(arr) {
    const countMap = {};
    const duplicates = {};

    for (let item of arr) {
        countMap[item] = (countMap[item] || 0) + 1;
    }

    for (let key in countMap) {
        if (countMap[key] > 1) {
            duplicates[key] = countMap[key];
        }
    }

    console.log("Duplicate elements and their counts:", duplicates);
}

const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3, 3];
countDuplicates(numbers); // { '1': 2, '2': 2, '3': 3 }