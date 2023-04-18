const form = document.querySelector('.ssignup-form');
//const username = document.querySelector('#username');


//form.addEventListener('submit' , e => {
    //e.preventDefault();
    //console.log(username.value);
   // console.log(form.username.value)
//});

//testing RegEx 
const username = 'sha';
const pattern = /^[a-z]{6,}$/;
let result = pattern.test(username);

if(result){
    console.log('regex test passed');
}
else {
    console.log('regex test failed');
}
