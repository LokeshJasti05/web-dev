function checkCount() {
    var text = document.getElementById("string").value.toLowerCase();
    var char = document.getElementById("char").value.toLowerCase();

    
    var highest = 0;
    var mostRepeatedChars = [];
    var nonRepeating = [];

    var repeating = find_repeating(text); 

    for (let ch in repeating) {
        if (repeating[ch] > highest) {
            highest = repeating[ch];
        }
    }


    for (let ch in repeating) {
        if (repeating[ch] == highest ) {
            mostRepeatedChars.push(ch);
        }
    }

    for (let ch in repeating) {
        if (repeating[ch] < 2) {
            nonRepeating.push(ch);
        }
    }

    if(repeating[char] == undefined){
        repeating[char] = "not found";
    }

    document.getElementById("output-most-repeating").innerHTML =
        "Most repeated: [" + mostRepeatedChars.join(", ") + "] (" + highest + " times)";
    document.getElementById("output-non-repeating").innerHTML =
        "Non-repeating: " + nonRepeating.join(", ");
        document.getElementById("given-repeating").innerHTML = char + ": " + repeating[char];
}

function find_repeating(text) {
    const repeating = {};  

    for (let char of text) {
        if (char in repeating) {
            repeating[char] += 1;
        } else {
            repeating[char] = 1;
        }
    }

    return repeating;
}

