// et teksti kopeeria ei saaks
const copy =document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI! my content is copyright');
});

//annab kordinaadid kui hiir boxi sees liigub
const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
    //console.log(e);
    console.log(e.offsetX, e.offsetY);
});