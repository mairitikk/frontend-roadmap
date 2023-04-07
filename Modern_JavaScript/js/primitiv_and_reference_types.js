//primitive values, kui muuda yhe v22rtust ei muutu teine automaatselt
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);


// refrence values

userOne = { name: 'mairi', age: 32};
console.log(userOne);

userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);

//userOne = {name: 'mairi', age: 33};
//console.log (userOne, userTwo);