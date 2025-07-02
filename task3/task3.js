
function submitForm(){
    var table = document.getElementById("tableBody");

    var nameInput = document.getElementById("employeeName");
    var ageInput = document.getElementById("employeeAge");
    var numberInput = document.getElementById("employeeNumber");
    var emailInput = document.getElementById("employeeEmail");
    var genderInput = document.getElementById("employeeGender");


    var name = document.getElementById("employeeName").value;
    var age = document.getElementById('employeeAge').value;
    var number = document.getElementById('employeeNumber').value;
    var email = document.getElementById('employeeEmail').value;
    var gender = document.getElementById("employeeGender").value;
    
    const emailRegex = /@.*\./;
    const phone_pattern = /^\d{10}$/;

    var flag=false;

    

    if(name === ""){
        nameInput.style.border = "2px solid red";
        
        flag=true
        
    }
    else{
        nameInput.style.border = "none";
    }
    
    if(age === ""){
        ageInput.style.border = "2px solid red";
        
        flag=true
    }
    else{
        ageInput.style.border = "none";
    }
    
    if(number === ""){
        numberInput.style.border = "2px solid red";
        
        flag=true
    }
    else{
        numberInput.style.border = "none";
    }
    
    if(!emailRegex.test(email) || email === ""){
        emailInput.style.border = "2px solid red";
        
        flag=true
    }
    else{
        emailInput.style.border = "none";
    }
    
    if(gender === ""){
        genderInput.style.border = "2px solid red";
        
        flag=true
    }
    else{
        genderInput.style.border = "none";
    }
    
    if (!phone_pattern.test(number)) {
        numberInput.style.border = "2px solid red"
        flag=true
        
    }

    if(flag == true){
        alert("fill all fields correctly");
        return;
    }
    
    var new_row = document.createElement("tr");
    new_row.innerHTML = `
                        <td><p>${table.rows.length + 1}</p></td>
                        <td><p>${name}</p></td>
                        <td><p>${age}</p></td>
                        <td><p>${number}</p></td>
                        <td><p>${email}</p></td>
                        <td><p>${gender}</p></td>
                        <td class="action-buttons">
                            <button class="edit-btn" onclick="editRow(this)">Edit</button>
                            <button class="copy-btn" onclick="copyRow(this)">Copy</button>
                            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
                        </td>
                         `;
     table.appendChild(new_row);
     clearRows();
     SerialNumber();
     
    document.getElementById('newSubmissionBtn').style.display = 'block';
}

function SerialNumber(){
     var table = document.getElementById("tableBody");
     for(let i =0;i<table.rows.length;i++){
            table.rows[i].cells[0].innerHTML = `<p>${i + 1}</p>`;
     }  
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove(); 
    SerialNumber();
}

function copyRow(button){
    var table = document.getElementById("tableBody");
    var row = button.closest('tr');
    var name = row.cells[1].innerText;
    var age = row.cells[2].innerText;
    var number = row.cells[3].innerText;
    var email = row.cells[4].innerText;
    var gender = row.cells[5].innerText;

    var new_row = document.createElement("tr");
    new_row.innerHTML=`
                        <td><p>${table.rows.length + 1}</p></td>
                        <td><p>${name}</p></td>
                        <td><p>${age}</p></td>
                        <td><p>${number}</p></td>
                        <td><p>${email}</p></td>
                        <td><p>${gender}</p></td>
                        <td class="action-buttons">
                            <button class="edit-btn" onclick="editRow(this)">Edit</button>
                            <button class="copy-btn" onclick="copyRow(this)">Copy</button>
                            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
                        </td>
    `
    SerialNumber();
    table.appendChild(new_row);
}

function editRow(button) {
    var row = button.closest('tr');

    button.innerText = "Save";
    button.setAttribute("onclick", "saveRow(this)");

    var initialValues = {
        name: row.cells[1].innerText,
        age: row.cells[2].innerText,
        number: row.cells[3].innerText,
        email: row.cells[4].innerText,
        gender: row.cells[5].innerText,
    };
    row.cells[1].innerHTML = `<input type="text" class="edit-input" value="${row.cells[1].innerText}">`;
    row.cells[2].innerHTML = `<input type="number" class="edit-input" value="${row.cells[2].innerText}">`;
    row.cells[3].innerHTML = `<input type="tel" class="edit-input" value="${row.cells[3].innerText}">`;
    row.cells[4].innerHTML = `<input type="email" class="edit-input" value="${row.cells[4].innerText}">`;
    row.cells[5].innerHTML = `<select id="employeeGender">
                                <option value="${row.cells[5].innerText}" disabled selected>${row.cells[5].innerText}</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>`;

    
    const cancelBtn = document.querySelector(".delete-btn");
    cancelBtn.addEventListener('click', function() {

            row.cells[1].innerHTML = `<p>${initialValues.name}</p>`;
            row.cells[2].innerHTML = `<p>${initialValues.age}</p>`;
            row.cells[3].innerHTML = `<p>${initialValues.number}</p>`;
            row.cells[4].innerHTML = `<p>${initialValues.email}</p>`;
            row.cells[5].innerHTML = `<p>${initialValues.gender}</p>`;
            row.cells[6].innerHTML = `<td class =:
                <button class="edit-btn" onclick="editRow(this)">Edit</button>
                <button class="copy-btn" onclick="copyRow(this)">Copy</button>
                <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
            `;
    })
    SerialNumber();

}




function showNewSubmissionForm() {
    const table = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    
    

    newRow.innerHTML = `
        <td>${table.rows.length+1}</td>
        <td><input type="text" class="edit-input"></td>
        <td><input type="number" class="edit-input"></td>
        <td><input type="tel" class="edit-input"></td>
        <td><input type="email" class="edit-input"></td>
        <td><select id="employeeGender" required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select></td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="saveRow(this)">Save</button>
            <button class="delete-btn" >Cancel</button>
        </td>
    `;


    const cancelBtn = newRow.querySelector(".delete-btn");
    cancelBtn.addEventListener('click', function () {
        newRow.remove();
        SerialNumber();
    });

    tableBody.appendChild(newRow);

    SerialNumber();
}

function saveRow(button){
    var table = document.getElementById('tableBody');
    var row = button.closest('tr');
    var name = row.cells[1].querySelector('input').value;
   
    var age = row.cells[2].querySelector('input').value;
    var number = row.cells[3].querySelector('input').value;
    var email = row.cells[4].querySelector('input').value;
    var gender = row.cells[5].querySelector('select').value;


    if(name == "" || age == "" || number == "" || email == "" ||gender == ""){
        alert("Please fill in all fields");
        return;
    }
    

    console.log(gender);
    row.innerHTML = `
        <td><p>${table.rows.length}</p></td>
        <td><p>${name}</p></td>
        <td><p>${age}</p></td>
        <td><p>${number}</p></td>
        <td><p>${email}</p></td>
        <td><p>${gender}</p></td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="copy-btn" onclick="copyRow(this)">Copy</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
}

function clearRows(){
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeAge").value = "";
    document.getElementById("employeeNumber").value = "";
    document.getElementById("employeeEmail").value = "";
    document.getElementById("employeeGender").value = "";
}