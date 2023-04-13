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
        e.target.style.textDecoration = 'line-through';
    });
});