//kui nii siis kirjutab eelneva style  yle

const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;');


// kui nii panna siis ei kirjuta yle
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'gray'; 
title.style.fontSize = '20px';

//kustutada, paned tyhja stringi
title.style.margin = '';