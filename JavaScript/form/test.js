// forms
var my_form = document.forms.myForm; // get the form
var message = document.getElementById("message");

my_form.name; // get the input tag
my_form.name.value; // get the value of the input tag
my_form.name.onfocus = function () { // 在打字的時候
    my_form.name.style.border = "4px solid pink";
}
my_form.name.onblur = function () { // 沒在打字的時候
    my_form.name.style.border = "1px solid black";
}

myForm.onsubmit = function () {
    if (myForm.name.value == "") {
        message.innerHTML = "Please enter a name";
        return false;
    }else {
        message.innerHTML = "";
        return true;
    }
}

