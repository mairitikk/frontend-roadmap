// callbacks and foreach
//const myFunc = (callbackFunc) => {
    //do something
  //  let value = 50;
   // callbackFunc(value);
//};

//myFunc (value => {
    //do sommething
  //  console.log(value);
//});



//const logPerson = (person, index) => {
  //  console.log(`${index} -hello ${person}`);
//}

//people.forEach(logPerson);

// get a reference to the 'ul'


const ul = document.querySelector('.people');


const people = ['mairi' , 'mario', 'maarja', 'mirjam' , 'minni'];


let html = ``;
people.forEach(person => {

    //create html template

    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;