
// kuidas selektorit kuvada, milliseid tag kasutada, kui nii siis v6tab esimese
//const para = document.querySelector('div.error');

//console.log(para);

// kui tahan k6iki p tag valida

const paras = document.querySelectorAll('p');
//console.log(paras);
// kui tahan valida, mitmendar p tag tahan valida
console.log(paras[1]);
// funktsioon arrow function kui tahame kuvada node list
paras.forEach(para => {
    console.log(para);
});

// select elemets from html dokument