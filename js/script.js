//Objects in js are like objects in real life
//Objects have methods and properties

var names = ['marto', 'kevo', 'oreezy'];
console.log(names);//console returns an array with three items.

//it has a property of length.
console.log(names.length);//console returns 3

//the object names has various methods attached to it such as slice, shift sort etc

console.log(names.sort());//console returns ['kevo', 'marto', 'oreezy'], sorts the items alphabetically

//The browser has a global object called window

console.log(window);

//accessing different methods on the window object


console.log(window.innerWidth);//returns a number, 375 px the value of windth of the window browser

//GOING FORWARD WE WILL LEARN;
//CREATE OBJECTS USING OBJECT LITERAL NOTATION
//JAVASCRIPT CLASSES & CONSTRUCTORS
//INHERUTANCE
//METHOD CHAINING 
//PROTOTYPES AND PROTOTYPE INHERITANCE

//OBJECT LITERALS..AN object is created using curly brackets {}

//UserOne
var userOne ={
    email:"kahwaigmail.com",//object property
    name:"kahwai",//object property
    login(){//object method
        console.log(this.email, 'has logged in')//keyword this refers to the object name
    },
    logout(){//object method
        console.log(this.email, 'has logged out')
    }
};

console.log(userOne);//console returns the userOne object


//calling the object property
console.log(userOne.email);//console returns the kahwaigmail.com


//calling the object method
console.log(userOne.login());//console returns kahwaigmail.com has logged in


//calling the object method
console.log(userOne.logout());//console returns kahwaigmail.com has logged out

//UPDATING PROPERTIES INSIDE OF AN OBJECT FROM OUTSIDE


userOne.name = "kevin";

console.log(userOne)//console returns kevin and not kahwai, we have changed the name property of our object

//CREATING NEW PROPERTIES INSIDE OF AN OBJECT FROM OUTSIDE

userOne.age = 25;

console.log(userOne);//console returns an array with and added property of age

//objects are efficient for systems with one object having different methods and properties, it is however not good where we have very many users hence the need to create each object for each user.

//We make use of es6 javascript classes



class User {
//we have just created an ampty class
};

//the first thing we need to do is to create a constructor function inside of the class, it is responsible for actually creagting new objects inside of our class

class Users {
    constructor(){

    }
};

//Whenever there is an instance in the future for us to create a new object(user) we will make use of the 'new' keyword

var anotherUser = new Users();

//the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object,whenever we refer to this inside of the class,its the new object that this just created
// - calls the constructor method


//Note to update properties of our formed objects we make use of arguements that are passed inside of the constructor function parenthesis

class UsersA {
    constructor(email,name){
        this.userEmail = email;
        this.userName = name;
    }
};

var user1= new UsersA("kawai@.com", 'kawai');
var user2= new UsersA("kagwima@.com", 'kagwima');

console.log(user1);//console returns an array 
//UsersA {userEmail: 'kawai@.com', userName: 'kawai'}
//userEmail: "kawai@.com"
//userName: "kawai"[[Prototype]]: Object

console.log(user2);
//UsersA {userEmail: 'kagwima@.com', userName: 'kagwima'}
//userEmail: "kagwima@.com"
//userName: "kagwima"
//[[Prototype]]: Object

//CLAS  METHODS
//In a case where there are object methods to be included in the class, we do this outside of the constructor function


class UsersAa {
    constructor(email,name){
        this.userEmail = email;
        this.userName = name;
    }
    login(){
        console.log(this.userEmail, 'just logged in')
    }
    logout(){
        console.log(this.userName, 'just logged out')
    }
};

var user1= new UsersAa("kawai@.com", 'kawai');
var user2= new UsersAa("kagwima@.com", 'kagwima');

console.log(user1);//console returns UsersAa {userEmail: 'kawai@.com', userName: 'kawai'}


console.log(user1.login());//console returns kawai@.com just logged in

console.log(user2.userEmail);//console returns UsersAa {userEmail: 'kagwima@.com', userName: 'kagwima'}

console.log(user2.logout());//console returns kagwima just logged out


//METHOD CHAINING
//we will demo this by adding another method called updateScore

class UsersAaB {
    constructor(email,name){
        this.userEmail = email;
        this.userName = name;
        this.score = 0
    }
    login(){
        console.log(this.userEmail, 'just logged in')
    }
    logout(){
        console.log(this.userName, 'just logged out')
    }
    updateScore(){
        this.score ++;
        console.log(this.userName, 'score is now', this.score)
    }
};

var user1= new UsersAaB("kawai@.com", 'kawai');
var user2= new UsersAaB("kagwima@.com", 'kagwima');

console.log(user1.updateScore());//console returns kawai score is now 1

console.log(user1.updateScore());//console returns kawai score is now 2
console.log(user1.updateScore());//console returns kawai score is now 3

//as shown, we would need to call the updateScore function everytime, to avoid this we could chain this method by having the return keyword followed by this after every function

class UsersAaBb {
    constructor(email,name){
        this.userEmail = email;
        this.userName = name;
        this.score = 0
    }
    login(){
        console.log(this.userEmail, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.userName, 'just logged out');
        return this;
    }
    updateScore(){
        this.score ++;
        console.log(this.userName, 'score is now', this.score);
        return this;
    }
};

var user1= new UsersAaBb("kawai@.com", 'kawai');
var user2= new UsersAaBb("kagwima@.com", 'kagwima');


console.log(user1.userEmail);

console.log(user1.updateScore().login().updateScore().logout());//console returns 
//kawai score is now 1
//kawai@.com just logged in
//kawai score is now 2
//kawai just logged out

//CLASS INHERITANCE

//Lets say we have like 200 users, with just 3 users who are admins, they have the same functionality as other users however, they could have extra methods and properties above the normal users, we would create a new class and use the keyword extends. We would also not need another constructor function

class Admin extends UsersAaBb {
    deleteUser(user){
        users = users.filter( u =>{
            return u.userEmail != user.userEmail
        })
    }
}

var user1= new UsersAaBb("kawai@.com", 'kawai');
var user2= new UsersAaBb("kagwima@.com", 'kagwima');
var admin = new Admin("jonte@.com", "jonte");




var users = [user1,user2]

console.log(users);

console.log(admin);
console.log(admin.deleteUser(user2));//this deletes user2

console.log(users);//console returns only one array having user1

//OVERVIEW OF OBJECTS

//Objects in javascript have properties and things they can do(methods),,

/* eg a user object  could have properties(nouns) such as email,username,gender,status. 
The same user object could have methods(verbs) this are things which it can do, login,logout,

Another example would be a blog object that could have properties such as title,content,author...its methods  would be,publish,unpublish,delete */

//creating objects using object literal notation


//its important to note that properties come in key-value pairs
//we use curly braces to make object literals


let userr = {
    name:"crystal",
    age:30,
    email:"cyrstal@.com",
    location: 'denver',
    blogs: ['chees & burger rules','10 things to make']
};

console.log(userr);
console.log(userr.name);
console.log(userr.email);

//changing the value of a property

userr.age = 35;

console.log(userr);//console returns the new array with the age property now changed to 35 from 30

console.log(typeof userr);//console returns object




