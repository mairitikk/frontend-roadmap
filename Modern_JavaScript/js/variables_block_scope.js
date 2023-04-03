// variables & block scope


//global scope

// same whit const
let age = 30;
if(true){

    // only inside can change outside can not over right, creating local scope
    let age = 40;
    let name = 'mairi';
    console.log('inside 1st code block:' , age, name);

if(true){
    let age = 50;
    console.log('inside 2nd code block', age);
}

}

// only global scope
console.log('outside code block:' , age, name);