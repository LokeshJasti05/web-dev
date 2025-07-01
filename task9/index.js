var string = "Hello, World!";

function display(){
    document.getElementById("stringName").innerHTML = string;
}
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
    document.getElementById("Lower_case").innerHTML = string.toLowerCase();
}   

function substring(){
    let start = document.getElementById("startIndex").value;
    let end = document.getElementById("endIndex").value;
    document.getElementById("substringResult").innerHTML = string.substring(start,end);
}
function slice(){
    let start = document.getElementById("startIndex1").value;
    let end = document.getElementById("endIndex1").value;
    document.getElementById("sliceResult").innerHTML = string.slice(start,end);
}

function padStart(){
    var length = document.getElementById("lenght").value;

    document.getElementById("padStartResult").innerHTML = string.padStart(length, '0');
}

function padEnd(){
    var length = document.getElementById("lenght1").value;

    document.getElementById("padEndResult").innerHTML = string.padEnd(length, '0');
}

function concat(){
    var str = document.getElementById("concatString").value;
    var result = string.concat(" ", str);
    document.getElementById("concatResult").innerHTML = result;
}
function repeater(){
    var count = document.getElementById("repeatCount").value;
    var result = string.repeat(count);
    document.getElementById("repeatResult").innerHTML = result;
}

function change(){
    var newString = document.getElementById("replace_text").value;
    document.getElementById("replacedText").innerHTML = string.replace("World!",  newString);;
}

function indexOf1(){
    var searchString = document.getElementById("searchText").value;
    var index = string.indexOf(searchString);
   if(index != -1){
        document.getElementById("indexOfResult").innerHTML = index;
   }
   else{
    document.getElementById("indexOfResult").innerHTML = "String not found";
   }
}

function includess(){
    var searchString = document.getElementById("includesText").value;
    var result = string.includes(searchString);
    if(result){
        document.getElementById("output").innerHTML = "String contains " + searchString;
    }
    else{
        document.getElementById("output").innerHTML = "String does not contai " + searchString;
    }
}