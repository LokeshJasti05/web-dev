var string = "Hello, World!";

function stringLength(){
    document.getElementById("lengthResult").innerHTML = "String Length: " + string.length;
}

function charAtIndex(){
    
    var index = document.getElementById("charAtIndex").value;
    
    var char = string.charAt(index);
    document.getElementById("charAtResult").innerHTML =  char;

    if(index < 0 || index >= string.length){
        document.getElementById("charAtResult").innerHTML = "Index out of bounds <br/>" + "Give index between 0 and " + (string.length - 1);
    }
    
}
function at(){
    
    var index = document.getElementById("at").value;
    
    var char = string.charAt(index);
    document.getElementById("at1").innerHTML =  char;

    if(index < 0 || index >= string.length){
        document.getElementById("at1").innerHTML = "Index out of bounds <br/>" + "Give index between 0 and " + (string.length - 1);
    }
    
}
function charCodeAtIndex(){
    
    var index = document.getElementById("charCodeAtIndex").value;
    
    var char = string.charCodeAt(index);
    document.getElementById("charCodeAtResult").innerHTML =  char;

    if(index < 0 || index >= string.length){
        document.getElementById("charCodeAtResult").innerHTML = "Index out of bounds <br/>" + "Give index between 0 and " + (string.length - 1);
    }
    
}

function ToUpperCase(){
    document.getElementById("upperr_case").innerHTML = string.toUpperCase();
}   
function ToLowerCase(){
    document.getElementById("lower_case").innerHTML = string.toUpperCase();
}   
