// simple object example
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};
var prop = 'name'

// update the property
userOne.email = 'ryu2k18@ninjas.com'; 
userOne['email'] = 'ryu2k18@ninjas.com'; 
userOne[prop] = 'Ryuke';
console.log(userOne);
/* [] is more convenient because we only need to change the value of prop, we
can get the different property dynamicly */ 

// create new properties, but not the preferred method
userOne.age = 25;
userOne.logInfo = function(){
    console.log(this.name, this.age, this.email);
};

// implement the class method
userOne.logInfo();
userOne.login();
userOne.logout();

// ---------------------------------------------------------------------------
// class example
class User {
    // no need to predeclare the properties (email, name)
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // class method
    login(){
        // combine the string after and before ","
        console.log(this.email, 'just logged in'); 
        return this; 
        // return the object user -> implement method on it : chaining
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

// admin inherit the property of User
class Admin extends User {
    // method only for Admin 
    deleteUser(user){
        // users : the array declare in line 82
        users = users.filter(u => { 
            // u is the object before . : admin in this example
            // filter function : delete elements which return true
            return u.email != user.email
        });
    }
}

// creating new object for class User
var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

// method chaining
userOne.login().updateScore().updateScore().logout();
console.log(userOne);

var admin = new Admin('shaun@ninjas.com', 'Shaun');
var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users);

// ---------------------------------------------------------------------------
// prototype : definition
// implement the constuctor function without using class (under the hood)
function Users(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

// prototype function definition
Users.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

Users.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

var userOne = new Users('ryu@ninjas.com', 'Ryu');
var userTwo = new Users('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();

// ---------------------------------------------------------------------------
// prototype : inheritance
function Userss(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

Userss.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

Userss.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

// ...args -> capture the input as an array : args = [email, name]
function Admins(...args){
    // calling the constructor function of Userss
    Userss.apply(this, args); // "this" means the new create object
    this.role = "super admin"; // property only for Admin
}

// inherit the prototype from the Userss
Admins.prototype = Object.create(Userss.prototype);

// create protopyte function only for Admins
Admins.prototype.deleteUser = function(user){
    // userss : the array declare in line 153
    userss = userss.filter(u => {
        return user.email != u.email;
    });
};

var userOne = new Userss('ryu@ninjas.com', 'Ryu');
var userTwo = new Userss('yoshi@mariokorp.com', 'Yoshi');
var admins = new Admins('shaun@ninjas.com', 'Shaun');

var userss = [userOne, userTwo, admin];
console.log(userss);
admins.deleteUser(userss[1]);
console.log(userss);