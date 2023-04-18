const form = document.querySelector('.ssignup-form');
//const username = document.querySelector('#username');


//form.addEventListener('submit' , e => {
    //e.preventDefault();
    //console.log(username.value);
   // console.log(form.username.value)
//});

//testing RegEx 
const username = 'shaunas';
const pattern = /^[a-z]{6,}$/;
let result = pattern.test(username);
console.log(result);
