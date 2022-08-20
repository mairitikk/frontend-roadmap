var myArray= [];
var webCatecory= ["Front End Developer", "Back End Developer", "Fullstack Developer"];
var mixedArray= [10, "string", true];

var myObject={
  name: "Mairi"
};

var mixedArray= [10, "string", true, myObject];
mixedArray[3].name= "Mati";


//cocatane 2 arrys
webCatecory.concat(mixedArray);

//look for a value an array
mixedArray.indexOf(true);

//add new element in array, push adds in the end of array
mixedArray.push("another string");

//removel last element
mixedArray.pop();
//remove first element in array
mixedArray.shift();

var uppercasedCategories= [];

function uppercaseElement(element, index, array){
  uppercasedCategories.push(element.toUpperCase())
}


webCatecory.forEach(uppercaseElement);