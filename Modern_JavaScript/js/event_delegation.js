const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    //console.log('you cliked me');
   // ul.innerHTML += '<li>something new</li>';
   // teine moodus
   const li = document.createElement('li');
   li.textContent = 'someting new to do';
   // lisab listi l6ppu
   //ul.append(li);
   // kui ylesse taseme lisada
   ul.prepend(li);
});

ul.addEventListener('click', e => {
   // console.log('event in UL');
    //console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});