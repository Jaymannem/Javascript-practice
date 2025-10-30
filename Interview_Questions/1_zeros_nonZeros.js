let arr = [1, 2, 0, 1, 0, 3, 1, 0, 4, 5];

// 1. using filter method
let temp = [];
temp.push(arr.filter((num) => num === 0));
temp.push(arr.filter((num) => num !== 0 && num !== 1));
temp.push(arr.filter((num) => num === 1));
console.log(temp.flat()); // [0, 0, 0, 2, 3, 4, 5, 1, 1, 1]

// 2. using spread operator instead of flat() method
let temp1 = [];
temp1.push(...arr.filter((num) => num === 0));
temp1.push(...arr.filter((num) => num !== 0 && num !== 1));
temp1.push(...arr.filter((num) => num === 1));
console.log(temp1); // [0, 0, 0, 2, 3, 4, 5, 1, 1, 1]


// 3. using reduce() method
let result = arr.reduce(
  (acc, val) => {
    if (val === 0) acc.zeros.push(val);
    else if (val === 1) acc.ones.push(val);
    else acc.others.push(val);
    return acc;
  },
  { zeros: [], others: [], ones: [] }
);
console.log([...result.zeros, ...result.others, ...result.ones]);


// 4. using concat method
let temp2 = [].concat(...arr.filter(val=> val === 0))
            .concat(...arr.filter(val => val !== 0 && val !== 1))
            .concat(...arr.filter(val => val === 1))
console.log(temp2)
