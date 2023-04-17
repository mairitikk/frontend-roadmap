const form = document.querySelector('.ssignup-form');
const username = document.querySelector('#username');


form.addEventListener('submit' , e => {
    e.preventDefault();
    console.log(username.value);
});