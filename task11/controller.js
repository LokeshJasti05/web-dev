function createButton() {
    var button = document.createElement("button");
    button.innerHTML = "Click Me!";
    button.onclick = showForm();
    document.body.appendChild(button);
}
document.addEventListener("DOMContentLoaded", createButton);


function showForm() {

    const gender = {
    "Male": false,
    "Female": false,
    "Other": false
}
    
    var form = document.createElement("form");


    //name input
    var name = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Enter name here";
    form.appendChild(name);
    document.body.appendChild(form);


    //age input
    var age = document.createElement("input"); 
    age.type = "number";
    age.placeholder = "Enter age here";
    form.appendChild(age);
    document.body.appendChild(form);

    

    
}
