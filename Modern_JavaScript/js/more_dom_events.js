// et teksti kopeeria ei saaks
const copy =document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI! my content is copyright');
});

//annab kordinaadid kui hiir boxi sees liigub
const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);

    // kuvab kordinaadid boxi peale
    box.textContent = `x pos - ${e.offsetX}   y pos -${e.offsetY}`;
});
// kui lehekylge kerida annab kordinaadid kus hiir on
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});