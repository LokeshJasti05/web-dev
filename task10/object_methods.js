var object = {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Developer",
    hobbies: ["coding", "reading", "gaming"]
};

function displayObject() {
    document.getElementById("objectDisplay").innerHTML = JSON.stringify(object, null, 2);
}

function getKeys() {
    const keys = Object.keys(object);
    document.getElementById("keysResult").innerHTML = "Keys: " + keys.join(", ");
}

function getValues() {
    const values = Object.values(object);
    document.getElementById("valuesResult").innerHTML = "Values: " + JSON.stringify(values);
}

function getEntries() {
    const entries = Object.entries(object);
    document.getElementById("entriesResult").innerHTML = "Entries: " + JSON.stringify(entries);
}

function assignProperty() {
    const propertyName = document.getElementById("newProperty").value;
    const propertyValue = document.getElementById("newValue").value;
    
    if (propertyName && propertyValue) {
        const newObject = Object.assign({}, object, { [propertyName]: propertyValue });
        object = newObject;
        document.getElementById("assignResult").innerHTML = 
            `Added property "${propertyName}": "${propertyValue}". Updated object: ` + JSON.stringify(object);
    } else {
        document.getElementById("assignResult").innerHTML = "Please enter both property name and value";
    }
}


function stringifyObject() {
    const jsonString = JSON.stringify(object);
    document.getElementById("stringifyResult").innerHTML = "JSON String: " + jsonString;
}

window.onload = function() {
    displayObject();
};