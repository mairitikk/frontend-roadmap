let person= {
    name: 'Mairi',
    age: 32
};

// Dot Notation
person.name= 'Mirju';

//Bracket Notation
let selection= 'name';

person['name']= 'Mary'

person.age = person.age + 1

let edad = document.getElementById('edad')
edad.innerText = person.name + ' has the age of ' + person.age

//console.log (edad);