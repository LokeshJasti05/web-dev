    var disablility = {
        "yes": false,
        "no": false
    }

    var gender = {
    "Male": false,
    "Female": false,
    "Other": false
}
    
    var form = document.createElement("form");
    
    //name input=> <input type=text id = name >
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Name: ";
    form.appendChild(nameLabel);
    var name1 = document.createElement("input");
    
    name1.type = "text";
    name1.id = "name";
    name1.placeholder = "Enter name here";
    form.appendChild(name1);
    form.appendChild(document.createElement("br"));



    //age input=><input type=number id = age >
    var ageLabel = document.createElement("label");
    ageLabel.textContent = "Age: ";
    form.appendChild(ageLabel);
    var age = document.createElement("input"); 
    age.type = "number";
    age.id="age"
    age.placeholder = "Enter age here";
    form.appendChild(age);
    form.appendChild(document.createElement("br"));




//gender start
    for (let key in gender) {
    var label = document.createElement("label");
    label.innerText = key;
    
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "gender";
    input.id = key;
    input.value = key;

    input.addEventListener("change",function(){
        Object.keys(gender).forEach(function(g){
            gender[g] = false;
        })
        gender[key]=true;
        console.log(gender);
    })
    label.appendChild(input);
    form.appendChild(label);
}
//gender end
form.appendChild(document.createElement("br"));


//disability start
var disabilityLabel = document.createElement("label");
disabilityLabel.textContent = "Disability: ";
form.appendChild(disabilityLabel);

for(let ket in disablility){
    var label = document.createElement("label");
    label.innerText = ket;
    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "disability";
    input.value = ket;
    input.addEventListener("change",function(){

        var checkboxes = document.querySelectorAll('input[name="disability"]');
        checkboxes.forEach(cb => {
            cb.checked = false;
        });

// for checking only theone that was clicked
        this.checked = true;


        Object.keys(disablility).forEach(function(d){
            disablility[d] = false;
            

        })
        disablility[ket] = true;
            console.log(disablility);


    })
    label.appendChild(input);
    form.appendChild(label);
}
//disability end
form.appendChild(document.createElement("br"));

    //location start
    var select_area = document.createElement("select");
    select_area.id = "select_area";
    //default option
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select City";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select_area.appendChild(defaultOption);
    //opt1
    var option1 = document.createElement("option");
    option1.value = "Hyderabad";
    option1.textContent = "Hyderabad";
    select_area.appendChild(option1);
    //opt2
    var option2= document.createElement("option");
    option2.value = "Bangalore";
    option2.textContent = "Bangalore";
    select_area.appendChild(option2);
    //opt3
    var option3 = document.createElement("option");
    option3.value = "Chennai";
    option3.textContent = "Chennai";
    select_area.appendChild(option3);

    form.appendChild(select_area);

//location end

    form.appendChild(document.createElement("br"));
    var submitButton = document.createElement("button");
    submitButton.id = "submit_Button";
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", createTable);
    form.appendChild(submitButton);

    document.body.appendChild(form);

    form.appendChild(document.createElement("br"));

    
    var table = document.createElement("table");
    table.style.border = "1px solid black";
    //headers created

    var header_container = document.createElement("thead");
    var si_head =document.createElement("th");
    si_head.textContent = "SI No";
    header_container.appendChild(si_head);
    var name_head = document.createElement("th");
    name_head.textContent = "Name";
    header_container.appendChild(name_head);
    var age_head = document.createElement("th");
    age_head.textContent = "Age";
    header_container.appendChild(age_head);
    var gender_head = document.createElement("th");
    gender_head.textContent= "Gender";
    header_container.appendChild(gender_head);
    var disability_head = document.createElement("th");
    disability_head.textContent = "Disability";
    header_container.appendChild(disability_head);
    var location_head = document.createElement("th");
    location_head.textContent = "Location";
    header_container.appendChild(location_head);
    var action_head = document.createElement("th");
    action_head.textContent = "Action";
    header_container.appendChild(action_head);
    table.appendChild(header_container);

    document.body.appendChild(table);


function createTable(event){
    event.preventDefault();

    name_regexp = /^[a-zA-Z\s]+$/;
    age_regexp = /^\d{1,3}$/;
    



    var si_no = document.querySelectorAll("table tr").length;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementsByName("gender");
    var disability = document.getElementsByName("disability");
    var location = document.getElementById("select_area").value;
    
   

   if(!name_regexp.test(name)){
        alert("Please enter a valid name");
        return;
    }

    if(!age_regexp.test(age)){
        alert("Please enter a valid age");
        return
    }

var selectedGender = "";
gender.forEach(g => {
    if (g.checked) {
        selectedGender = g.value;
    }
});

var selectedDisability = "";
disability.forEach(d => {
    if (d.checked) {
        selectedDisability = d.value; 
    }
});

     if("si_no" === "" || name === "" || age === "" || location === "" || selectedGender === "" || selectedDisability === ""){
        alert("Please fill all the fields");
        return;
    }

    console.log(si_no, name, age, selectedGender, selectedDisability, location);
    var row = document.createElement("tr");

    var si_no_cell = document.createElement("td");
    si_no_cell.textContent = si_no+1;
    row.appendChild(si_no_cell);

    var name_cell = document.createElement("td");
    name_cell.textContent = name;
    row.appendChild(name_cell);

    var age_cell = document.createElement("td");
    age_cell.textContent = age;
    row.appendChild(age_cell);

    var gender_cell = document.createElement("td");
    gender_cell.textContent = selectedGender;
    row.appendChild(gender_cell);

    var disability_cell = document.createElement("td");
    disability_cell.textContent = selectedDisability;
    row.appendChild(disability_cell);

    var location_cell = document.createElement("td");
    location_cell.textContent = location;
    row.appendChild(location_cell);
    table.appendChild(row);
    
 


    var action_cell = document.createElement("td");
    var delete_button = document.createElement("button");
    delete_button.id = "delete_button";
    delete_button.textContent = "Delete";
    delete_button.addEventListener("click", function() {
        if(confirm("Are you Sure you want to delete the row")){
        table.removeChild(row);


        for(let i = 0; i < table.rows.length; i++){
            table.rows[i].cells[0].innerHTML = `<p>${i + 1}</p>`;
        }
    }else{
        return;
    }
    }); 
    
    
    


// Update serial numbers after adding new row
    for(let i = 0; i < table.rows.length; i++){
        table.rows[i].cells[0].innerHTML = `<p>${i + 1}</p>`;
    }


    var edit_button = document.createElement("button");
    edit_button.textContent = "Edit";
    edit_button.addEventListener("click", function( ) {
        editRow(this);});


//appending the buttons
    action_cell.appendChild(edit_button);
    action_cell.appendChild(delete_button);
    row.appendChild(action_cell);
}


function editRow(button) {
    var row = button.closest('tr');
    row.id = "editing_row";


    var submitButton = document.getElementById("submit_Button");
    submitButton.disabled = true;

    document.getElementById("name").value = row.cells[1].textContent;
    document.getElementById("age").value = row.cells[2].textContent;

    // gender
    var genderValue = row.cells[3].textContent;
    document.getElementsByName("gender").forEach(g => {
        g.checked = (g.value === genderValue);
        gender[g.value] = (g.value === genderValue);
    });
//disability
    var disabilityValue = row.cells[4].textContent;
    document.getElementsByName("disability").forEach(d => {
        d.checked = (d.value === disabilityValue);
        disablility[d.value] = (d.value === disabilityValue);
    });

    document.getElementById("select_area").value = row.cells[5].textContent;

    if (!document.getElementById("save_button")) {
        var saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.id = "save_button";
        saveButton.addEventListener("click", saveRow);
        form.appendChild(saveButton);
    }
}


function saveRow(event) {
    event.preventDefault();


    var row = document.getElementById("editing_row");

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var selectedGender = "";
    document.getElementsByName("gender").forEach(g => {
        if (g.checked) selectedGender = g.value;
    });

    var selectedDisability = "";
    document.getElementsByName("disability").forEach(d => {
        if (d.checked) selectedDisability = d.value;
    });

    var location = document.getElementById("select_area").value;

    if (name === "" || age === "" || selectedGender === "" || selectedDisability === "" || location === "") {
        alert("Please fill all fields before saving.");
        return;
    }
    

    var submit_Button = document.getElementById("submit_Button");
    submit_Button.disabled = false;

    row.cells[1].textContent = name;
    row.cells[2].textContent = age;
    row.cells[3].textContent = selectedGender;
    row.cells[4].textContent = selectedDisability;
    row.cells[5].textContent = location;

    row.removeAttribute("id");

    

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementsByName("gender").forEach(g => g.checked = false);
    document.getElementsByName("disability").forEach(d => d.checked = false);
    document.getElementById("select_area").value = "";
    var saveButton = document.getElementById("save_button");
        if (saveButton) {
            form.removeChild(saveButton);
        }
}
