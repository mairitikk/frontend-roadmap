const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('you cliked me');
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click' , e =>{
       // console.log('item clicked');
       // logib consoli millist vajutasid
       //console.log(e.target);
       // nii logib  ka mis vajutasid
        //console.log(item);

        // kui listile vajutab t6mbab joone peale
       // e.target.style.textDecoration = 'line-through';

       // kui tahame yks haaval peale vajutades eemaldada
       e.target.remove();
    });
});

// kui tahame tervet listi korraga kustutada

//const ul = document.querySelector('ul');
//ul.remove();