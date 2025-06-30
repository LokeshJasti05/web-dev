
function submitForm(){
    var table = document.getElementById("tableBody");

    var name = document.getElementById("employeeName").value;
    var age = document.getElementById('employeeAge').value;
    var number = document.getElementById('employeeNumber').value;
    var email = document.getElementById('employeeEmail').value;
    var gender = document.getElementById("employeeGender").value;
    

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
    var email = row.cells[4].inner
    gender = row.cells[5].innerText;

    var new_row = document.createElement("tr");
    new_row.innerHTML=`
                        <td><p>${table.rows.length + 1}</p></td>
                        <td><p>${name}</p></td>
                        <td><p>${age}</p></td>
                        <td><p>${gender}</p></td>
                        <td><p>${number}</p></td>
                        <td><p>${email}</p></td>
                        <td class="action-buttons">
                            <button class="edit-btn" onclick="editRow(this)">Edit</button>
                            <button class="copy-btn" onclick="copyRow(this)">Copy</button>
                            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
                        </td>
    `

    table.appendChild(new_row);
}

function editRow(button) {
    var row = button.closest('tr');

    var name = row.cells[1].textContent;
    var age = row.cells[2].textContent
    
}