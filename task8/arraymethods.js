var array = ["Arnav", "Saanvi", "Dev", "Tanvi", "Raj", "Priya", "Rohan", "Sneha"];


function arrayPush() {
    var newName = document.getElementById("push").value;
    if (newName === "") {
        alert("Please enter a name to add to the array.");
        return;
    }
    array.push(newName);
    document.getElementById("arrayName").innerHTML = array.toString();

}
function arrayPop() {
    array.pop();
    document.getElementById("arrayName").innerHTML = array.toString();
}
function getLength() {
    var length = array.length;
    document.getElementById("lengthResult").innerHTML = "Array Length: " + length;
}

function findIndex(){
    var nameToFind = document.getElementById("index").value;
    var index = array.indexOf(nameToFind);
    if(index !== -1) {
        document.getElementById("findResult").innerHTML = "Index of " + nameToFind + ": " + index;
    }
    else if (index === -1) {
        document.getElementById("findResult").innerHTML = nameToFind + " not found";
    }
}

function join(){
    var joinedArray = array.join(" ** ");

    document.getElementById("arrayName").innerHTML = joinedArray;
}
function shift(){
    array.shift();
    document.getElementById("arrayName").innerHTML = array.toString();
}
function unshift(){
    var nameToUnshift = document.getElementById("unshift").value;
    array.unshift(nameToUnshift);
    document.getElementById("arrayName").innerHTML = array.toString();
}

function concat(){
    var concatValue = document.getElementById("concat").value;
    if (concatValue === "") {
        alert("Please enter a value to concatenate.");
        return;
    }
    var newArray = array.concat(concatValue);
    document.getElementById("arrayName").innerHTML = newArray.toString();
}




function slice(){
    var slicedArray = array.slice(2, 5);
    document.getElementById("slicedArray").innerHTML = slicedArray.toString();
}
function splice() {
    var splicer = document.getElementById("splicer").value;

    array.splice(2, 0, splicer);
    document.getElementById("arrayName").innerHTML = array.toString();
}



function findLastIndex(){
    var nameToFind = document.getElementById("findLastIndex").value;
    
    var index = array.lastIndexOf(nameToFind);
    if(index !== -1) {
        document.getElementById("output").innerHTML = "Last index of " + nameToFind + ": " + index;
    } else {
        document.getElementById("output").innerHTML = nameToFind + " not found";
    }
}

function includes(){
    var nameToCheck = document.getElementById("includes").value;
    
    var isIncluded = array.includes(nameToCheck);
    if(isIncluded){
        
    document.getElementById("output").innerHTML = nameToCheck + " is included in the array";
    }
    else{
        
    document.getElementById("output").innerHTML = nameToCheck + " is not included in the array";
    }
}

function find(){
    var nameToFind = document.getElementById("finder").value;
    var foundName = array.find(name => name == nameToFind);

    if (foundName != undefined) {
        document.getElementById("output").innerHTML = "Found: " + foundName;
    } else {
        document.getElementById("output").innerHTML = nameToFind + " not found";
    }
}