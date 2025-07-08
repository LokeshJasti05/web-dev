var object = {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Developer",
    hobbies: ["coding", "reading", "gaming"]
};

function displayObject(){
    document.getElementById("objectDisplay").innerHTML = JSON.stringify(object, null, 2);
}

function getKeys(){
    var keys = Object.keys(object);
    document.getElementById("keysResult").innerHTML = keys.join('<br>');
}

function getValues(){
    var objects = Object.values(object);
    document.getElementById("valuesResult").innerHTML = objects.join('<br>');
}

function getEntries(){
    var entries = Object.entries(object);
    document.getElementById("entriesResult").innerHTML = entries.join('<br>');
}
function assignProperty(){
    var new_Property = document.getElementById("newProperty").value;
    var new_value=document.getElementById("newValue").value;
    object[new_Property]=new_value;
    document.getElementById("assignResult").innerHTML = "Property added";
}
function stringifyObject(){
    console.log(JSON.stringify(object, null, 10));
    document.getElementById("stringifyResult").innerHTML = `check console`;
}

var groupbyobject = [
    {name: "John", age: 25, city: "NYC"},
    {name: "Jane", age: 30, city: "LA"},
    {name: "Bob", age: 25, city: "NYC"},
    {name: "Alice", age: 30, city: "LA"}
];

function groupByObject(){
    
    var groupedByAge = Object.groupBy(groupbyobject, ({age}) => age);
    document.getElementById("obj").innerHTML = "Original array: <br/>" + JSON.stringify(groupbyobject);
    document.getElementById("groupby").innerHTML = "Grouped by age: <br/>" + JSON.stringify(groupedByAge);
}