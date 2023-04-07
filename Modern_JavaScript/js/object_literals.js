
//object literals
// object oin arrey
const blogs = [
    { title: 'miks ma olen nii laje', likes: 30 },
    { title: ' 10 pohjust miks ma olen lahe', likes: 50 }
];
console.log(blogs);


//object literals

let user = {
    // variables or properties
    name: 'mairi',
    age: '33',
    email: 'mairi.tikk@gmail.com',
    location: 'darmstad',
    blogs: ['miks minu blogi on parim', 'minu nimin on'],
    
    // methods or functions
    // more shorter function
    login(){
        console.log('the user logged in');
    },

    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();
console.log(this);
//user.login();


//console.log(user);

// dot notation
//console.log(user.name);
//user.age = 35;
//console.log(user.age);

// squarebracet notation
//console.log(user['email']);
//user['name'] = 'mariin';
//console.log(user['name']);

//console.log(typeof user);