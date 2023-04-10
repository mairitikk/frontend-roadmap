
//muuta link elamenti ja teksti
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'TheNet Ninja Website'; 

// kuidas muuta klassi
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');

//lisada css style elemente isegi kui neid enne pole
mssg.setAttribute('style', 'color:green;');