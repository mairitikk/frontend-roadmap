//object literals

let user = {
    name: 'mairi',
    age: '33',
    email: 'mairi.tikk@gmail.com',
    location: 'darmstad',
    blogs: ['miks minu blogi on parim', 'minu nimin on']
};
console.log(user);

// dot notation
console.log(user.name);
user.age = 35;
console.log(user.age);

// squarebracet notation
console.log(user['email']);
user['name'] = 'mariin';
console.log(user['name']);

console.log(typeof user);