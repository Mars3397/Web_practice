// alert("Hello world");

// for the browser's dev tool
document.write("Mars");
console.log("Mars");


// this comment one line
/* this 
comment 
multiple 
lines */

// varible declaration : 不用宣告型態，賦值的時候就會知道了
var a; a = 10;
var b = 10;
// we can change type of a varible : dynamic type
var c = "string";
c = 5; 

// mathematics operations 
var value = 1 + 1;
value += 3;
value *= 2;
value++;
value = "hello" + " mars" // value = "hello mars"
value = 5 + "hello" // value = "5hello"
5 * "string" // return NaN 
"7" * 5 // return 35
5 / "string" // return NaN 
5 - "string" // return NaN 

// boolean
var flag = true;
7 > 5 // return true
7 == 7 // return true 
7 == "7" // return true
7 === "7" // return false 
Boolean("string"); // return true
Boolean(""); // return false

// if, else if, else
var age = 2;
if (age < 30 && age > 10) { // false
    document.write("you are over 10 and under 30!");
}else if (age >= 5) {
    document.write("you are greater or equal to 5!");
}else if (age == 4 || age == 3) {
    document.write("you are 4 or 3!");
}else {
    document.write("you are not over 3!");
}

// while loop
var number = 0;
while (number < 20) {
    console.log(number);
    if (number === 10) {
        break; 
    }
    number++;
}
document.write("the number are now 10");

// for loop : there do not need var for number = 0, 
var link = document.getElementsByTagName("a"); // get all the elements are tag "a"
for (i = 0; i < link.length; i++) { // there is no need () for length
    if (i == 5) continue;
    console.log("this is link number" + i);
    link[i].className = "link-" + i; // give each link a class name
}
document.write("all links now looped");

// function
function get_average (a, b, c, d, e) {
    var average = (a + b + c + d + e) / 5;
    console.log(average);
    return average;
}
var average1 = get_average(2, 3, 4, 5, 6);
var average2 = get_average(7, 8, 9, 10, 11, 12); // ignore extra input 12
console.log(average1, average2); // print 2.5 7.5

// variable scope
var foo = 20; // global variable
function my_function () {
    var bar = 10; // local variable
}

// number -> Math
console.log(typeof("1"+1)); // string
console.log(typeof(1+1)); // number
console.log(Math.round(7.3));
console.log(Math.floor(7.3));
console.log(Math.ceil(7.3));
console.log(Math.max(7, 8, 9));
console.log(Math.PI);

// NaN = Not a Number
var a = "string";
var b = 5;
if (!isNaN(b)) {
    console.log(isNaN(a));
}

// string
var string = '"i am \'a " fun "string"';
console.log(string);
console.log(string.length);
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.indexOf("string"));
console.log(string.indexOf("e"));

if (string.indexOf("a") === -1) {
    console.log('"aa" is not in the string');
}else {
    console.log("the word a starts at the position " + string.indexOf("a"));
}

var string1 = "abc";
var string2 = "bcd";
console.log(string1 === string2.toLowerCase());
console.log(string < string2); // in JavaScript "abc" < "Bcd"

// slice and split string
var str = "hello, world";
var str2 = str.slice(2);
var tags = "meat, ham, salami, pork, brrf, chicken";
var tags_array = tags.split(","); 
console.log(tags_array);

// array []
var my_array = []; // same as in python
my_array[0] = 25;
my_array[1] = 35;
my_array[2] = true;
my_array[3] = "string";
console.log(my_array);
var array3 = new Array(2, 3);
console.log(array3);
my_array[4] = array3;
my_array.sort();
console.log(my_array);
my_array.reverse();
console.log(my_array);

// creating an object
// method 1
var car = new Object();
car.max_speed = 50;
car.driver = "Mars";
car.drive = function () {
    console.log("now driving");
};
car.drive();
// method 2
var car2 = {
    max_speed: 70, 
    driver: "Mars", 
    drive: function (speed, time) { 
        console.log(speed * time); 
    } 
};
console.log(car2.max_speed);
car2.drive(50, 3);

// keyword : this
var car1 = {
    car : "car1",
    test : function () {
        console.log("car : " + this.car); // return car2
    }
};
var car3 = {
    car : "car3",
    test : function () {
        console.log(this); // return car3
    }
};
console.log(this); // return the whole window page
car1.test();
car3.test();

// constructor function : first letter usually in upper case
var Cars = function (max_speed, driver) {
    this.max_speed = max_speed;
    this.driver = driver;
    this.drive = function (speed, time) { 
        console.log(speed * time); 
    };
    this.log_diver = function () { 
        console.log("driver name is " + this.driver); 
    };
}

var my_car1 = new Cars(70, "Mars1");
var my_car2 = new Cars(30, "Mars2");

my_car1.drive(30, 5);
my_car2.log_diver();


// date object
var my_date = new Date(), my_past_date = new Date(2002, 2, 4);
console.log(my_date); // print the cuurent time
console.log(my_past_date); // defalt : hour minute second are all 0 if no input

var birthday = new Date(2002, 2, 4, 6, 7, 8);
var birthday2 = new Date(2002, 2, 4, 6, 7, 8);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay()); // return 星期幾 0~6
console.log(birthday.getHours());
console.log(birthday.getTime()); // return the number of time since 1970/1/1 -> used to comparse 2 date
if (birthday == birthday2) { // false -> birthday and birthday2 are not technically equal
    console.log("birthday are equal"); 
}
if (birthday.getTime() == birthday2.getTime()) { // true
    console.log("birthday are equal");
}

// ------------------------------------------------------------------------//
// DOM

// get elements
var my_content = document.getElementById("content");
var my_h2 = my_content.getElementsByTagName("h2");
var my_p = document.getElementById("p");
console.log(my_content);
console.log(my_h2); 
console.log(my_p);

// get the inner HTML and change the content display on website
my_h2[0].innerHTML = "change the h2"; 
// get the text content and change it
my_p.textContent = "change the p content";

// change the element attribute
var my_link0 = document.getElementById("link0");
console.log(my_link0.getAttribute("href"));
console.log(my_link0.getAttribute("class"));
my_link0.setAttribute("class", "pie"); // set class to pie
my_link0.setAttribute("alt", "hello"); // set alt to hello
my_link0.className = "hello";
console.log(my_link0.className);
console.log(my_link0.style);

// change the CSS style
var my_p = document.getElementById("p");
my_p.setAttribute("style", "position: relative; left: 10px"); // add CSS style
my_p.style.left = "20px"; // better way than the above
my_p.style.color = "red";
my_p.style.top = "10px";
my_p.style.backgroundColor = "blue"; // CSS : background-color -> Javascript : backgroundColor

// adding elements to the dom
var new_li = document.createElement("li");
var new_a = document.createElement("a");
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
// insert at the end
menu.appendChild(new_li); 
new_li.appendChild(new_a);
new_a.innerHTML = "new link";
new_a.setAttribute("href", "new link haha");
// insert in the front : (insert element, to the front of where)
menu.insertBefore(new_li, menu.getElementsByTagName("li")[0]); 

// delete the element from the dom
var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[0];
var removed = parent.removeChild(child); // remove the elements
parent.appendChild(removed); // append it back

// JavaScript event
var title = document.getElementById("h2");
title.onclick = function () { // do something when clicking (keyword : on-doing -> on click)
    alert("you clicked me");
};
title.onmouseover = function () { // on-doing -> on mouse over
    alert("you hovered your mouse on me");
};

// onclick event
var content = document.getElementById("content");
var button = document.getElementById("show_more");

button.onclick = function () {
    if (content.className == "open") {
        // shrink the box
        content.className = "";
        button.innerHTML = "show more";
        alert("close");
    }else {
        // expend the box
        content.className = "open";
        button.innerHTML = "show less";
        alert("open");
    }
}

// window onload event -> can put <script> in front of the HTML content
function set_up_events () {
    var content = document.getElementById("content");
    var button = document.getElementById("show_more");

    button.onclick = function () {
        if (content.className == "open") {
            // shrink the box
            content.className = "";
            button.innerHTML = "show more";
            alert("close");
        }else {
            // expend the box
            content.className = "open";
            button.innerHTML = "show less";
            alert("open");
        }
    }
}
window.onload = function () { // when all the content of page are loaded
    set_up_events();
}

// timer
var content = document.getElementById("content");
function show_up () {
    alert("I show up");
}
setTimeout(show_up, 3000); // (the function, 延遲 ms)

var color_changer = document.getElementById("p");
var colors = ["grey", "blue", "green", "pink"];
var counter = 0;
function change_color () {
    color_changer.style.backgroundColor = colors[counter];
    counter = (counter + 1) % 4;
}
var timer = setInterval(change_color, 3000); // (the function, 間隔 ms)
color_changer.onclick = function () {
    clearInterval(timer); // clear the timer
    color_changer.innerHTML = "stop because you click!"
}

// jQuery
var myP = document.getElementById("content").getElementsByTagName("p")[1];
var myP2 = $("#content p"); // much shorter than the above
console.log(myP2);
myP2.addClass("test");
myP2.removeClass("test");
myP2.fadeOut();
myP2.fadeIn();
myP2.css({position:"relative", color: "red"});
myP2.animate({left: "50px"});
