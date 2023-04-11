//const content = document.querySelector('p');
// get classes that element has
//console.log(content.classList);


// how to add classes
//content.classList.add('error');

//how to remove class
//content.classList.remove('error');
//content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});
