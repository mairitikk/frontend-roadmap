
//string
let age = 25;
let year = 2023;

let email = 'mairi.tikk@gmail.com';
console.log(email);

console.log(age, year);
age= 30;
console.log(age);

let firstName = 'Mairi';
let lastName = 'Tikk';
let fullName = firstName + ' ' + lastName;

console.log(firstName, lastName, fullName);

console.log(firstName[4]);
console.log(fullName.length);
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);
let index = email.indexOf('@');
console.log(index);
//common string methods leiad, mitmes on taht n
let email1 = 'martinchrisguzmantikk@gmail.com';
let result1 = email1.lastIndexOf('n'); 
console.log(result1);
// loikad ara mis koha pealt tahad
let email2 = 'mairi.tikk@mail.com';
let result2 = email2.slice(0,5);
console.log(result2);
// asendad yhe t2he teisega

let email3 = 'mairi.tikk@hotmail.com';
let result3 = email3.replace('m', 'w');
console.log(result3);

// number in js
let radius = 10;
let pi = 3.14;

console.log(radius, pi);

console.log(10 / 2);

let result4 = radius % 3;
console.log(result4);

let like = 10;

//like++;

//like +=10;
like -=5; 
console.log(like);

// NaN not a number
console.log(10 * 'hello');

//concatanation
 let result5 = 'the blog has ' + like + ' likes';
 console.log(result5);

 // concatanation ways

 const title = 'Mairi lemmikud raamatud';
 const author = 'Mairi';
 const likes = '500';
 let result6 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
 console.log(result6);

 // template string way
 let result7 = `The blog called ${title} by ${author} has ${likes} likes`;
 console.log(result7);

 // creating html tamplates
 let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
 
 `;
 console.log(html);

 // arrays

 let flovers = ['tulp', 'roos', 'nartsiss'];
 
flovers[2] = 'krysanteem';
 console.log(flovers[2]);

 let ages = [3, 4, 10, 13,16, 17];
 console.log(ages[4]);

 let random = [ 'mairi', 'n', 'ilus', 100, 200, 500];
 console.log(random);
 console.log(random.length);

 //array methods
 let result8 = flovers.join(',');
 console.log(result8);

 let result9 = flovers.indexOf('tulp');
 console.log(result9);

 let result10 = flovers.concat('paevalill', 'sinilill', 'ulane');
 console.log(result10);

 let result11 = flovers.push('krookus');
 console.log(result11);
 console.log(flovers);

 result11 = flovers.pop();
 console.log(flovers);
// number and undifined
 //let vanus;
 
 let vanus = 0;
console.log(vanus, vanus + 3,'vanus on ${vanus}');
// boolean and comparations
console.log(true, false, 'true', 'false');
//methods can return boolean
let email4 = 'minni.mause@gmail.com';
let result12 = email4.includes('@');
console.log(result12);

let names = ['Markus', 'Miky', 'Miriam'];
let result13 = names.includes('Miky');
console.log(result13);

 //comparison operators
 let age5 = 30;
 console.log(age == 30);
 console.log(age != 30);
 console.log(age > 25);

 let name5 = 'Mirri';
 console.log(name5 == 'mirri');

 //loose comparation (diffrent types can still be equal)

 //string '30'
 console.log(age5 == '30');

 //strict comparation (diffrent types can not be equal)
 console.log(age5 ===30);
 console.log(age5 ==='30');

 //type conversions
 let score = '100';
 //score = Number(score);
 console.log(score + 1);
 console.log(typeof score);
 let score1 = Boolean(100);
 console.log(score1, typeof score1);