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

// how to toggel classes if has class we want to take it off ja kui ei ole klassi siis paneme
 const title = document.querySelector('.title');

 //anname classi test
 title.classList.toggle('test');
 // kui uuesti siis v6tab test claasi 2ra
 title.classList.toggle('test');