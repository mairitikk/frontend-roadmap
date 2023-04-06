// callbacks and foreach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc (value => {
    //do sommething
    console.log(value);
});

let people = ['mairi' , 'mario', 'maarja', 'mirjam' , 'minni'];

const logPerson = (person, index) => {
    console.log(`${index} -heelo ${person}`);
}

people.forEach((person, index) => {
    console.log(index, person);
});