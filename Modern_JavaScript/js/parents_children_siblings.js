const article = document.querySelector('article');

//console.log(article.children);
//console.log(Array.from(article.children));
//console.log(article.children);

// lisad lapse elemendile classi

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

//finding parent element

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);

//finding sibling element
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);