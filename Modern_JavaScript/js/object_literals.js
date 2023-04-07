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