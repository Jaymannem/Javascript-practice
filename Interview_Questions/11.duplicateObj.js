const users = [
  { id: 1, name: "jaya" },
  { id: 2, name: "jaswik" },
  { id: 1, name: "jaya" },
];

// Way 1: Using Set with JSON.stringfy() and parse()

const uniqueUsers = Array.from(
  new Set(users.map((user) => JSON.stringify(user)))
).map((str) => JSON.parse(str));

console.log(uniqueUsers);
// [ { id: 1, name: 'jaya' }, { id: 2, name: 'jaswik' } ]


// Way 2: Using Object 

const obj = {};
const unique_users = [];

for(let user of users) {
    if(!obj[user.id]) {
        obj[user.id] = true;
        unique_users.push(user)
    }
}
console.log(unique_users);
// [ { id: 1, name: 'jaya' }, { id: 2, name: 'jaswik' } ]


// Way 3: Using reduce and map() 
const uniqueData = users.reduce((map, user)=>{
  if(!map.has(user.id)) 
  map.set(user.id, user);
  return map;
}, new Map());

console.log([...uniqueData.values()]);
// [ { id: 1, name: 'jaya' }, { id: 2, name: 'jaswik' } ]



// Way 4: Using for loop 
const unique = {};
const unique_data = [];

for(let i = 0; i< users.length; i++) {
  const user = users[i];

  if(!unique[user.id]) {
    unique[user.id] = true;
    unique_data.push(user)
  }
}
console.log(unique_data);
// [ { id: 1, name: 'jaya' }, { id: 2, name: 'jaswik' } ]