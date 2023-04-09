//const para = document.querySelector('p');
//console.log(para.innerText);

//kirjutab teise teksti yle
//para.innerText = 'ninjas are awsom';

//lisab eelnevale tekstile
//para.innerText += ' ninjas are awsom';

//const paras = document.querySelectorAll('p');
// lisab iga teksti l6ppu uue teksti
//paras.forEach(para => {
   // console.log(para.innerText);
   // para.innerText += '  new text';
//});

// kuidas muuta p22seda ligi HTML tagile
const content = document.querySelector('.content');
//console.log(content.innerHTML);

// kuidas muuta HTML tagi sees sisu

//scontent.innerHTML = '<h2> THIS IS A NEW H2</h2>';

// kui tahad uue tag lisada

content.innerHTML += '<h2> THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
