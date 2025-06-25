let serialCounter = 1;


function generateSerialNumber() {
    return serialCounter++;
}

function deleteSerialNumber(){
    return serialCounter--;
}

function submitForm() {
    const name = document.getElementById('employeeName').value;
    const age = document.getElementById('employeeAge').value;
    const number = document.getElementById('employeeNumber').value;
    const email = document.getElementById('employeeEmail').value;

    
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    const serialNumber = generateSerialNumber();

    newRow.innerHTML = `
        <td>${serialNumber}</td>
        <td><p>${name}</p></td>
        <td><p>${age}</p></td>
        <td><p>${number}</p></td>
        <td><p>${email}</p></td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="copy-btn" onclick="copyRow(this)">Copy</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(newRow);
    document.getElementById('newSubmissionBtn').style.display = 'block';

    clearInputFields();
}

function showNewSubmissionForm() {
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    const serialNumber = generateSerialNumber();

    newRow.innerHTML = `
        <td>${serialNumber}</td>
        <td><input type="text" class="edit-input"></td>
        <td><input type="number" class="edit-input"></td>
        <td><input type="tel" class="edit-input"></td>
        <td><input type="email" class="edit-input"></td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="saveNewRow(this)">Save</button>
            <button class="delete-btn" onclick="cancelNewRow(this)">Cancel</button>
        </td>
    `;

    tableBody.appendChild(newRow);
}

function saveNewRow(button) {
    const row = button.closest('tr');
    const inputs = row.querySelectorAll('.edit-input');
    const values = Array.from(inputs).map(input => input.value);

    if (values.some(value => !value)) {
        alert('Please fill in all fields');
        return;
    }

    row.innerHTML = `
        <td>${row.cells[0].textContent}</td>
        <td><p>${values[0]}</p></td>
        <td><p>${values[1]}</p></td>
        <td><p>${values[2]}</p></td>
        <td><p>${values[3]}</p></td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="copy-btn" onclick="copyRow(this)">Copy</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
}

function cancelNewRow(button) {
    const row = button.closest('tr');
    row.remove();
    deleteSerialNumber(); 
}

function editRow(button) {
    const row = button.closest('tr');
    const cells = row.cells;
    
    const originalValues = {
        name: cells[1].querySelector('p').textContent,
        age: cells[2].querySelector('p').textContent,
        number: cells[3].querySelector('p').textContent,
        email: cells[4].querySelector('p').textContent 
    };

    document.getElementById('employeeName').value = originalValues.name;
    document.getElementById('employeeAge').value = originalValues.age;
    document.getElementById('employeeNumber').value = originalValues.number;
    document.getElementById('employeeEmail').value = originalValues.email;

    document.querySelector('.submit').disabled = true;

    button.textContent = 'Save';
    button.onclick = function() {
        saveRow(this, originalValues);
    };
}

function saveRow(button, originalValues) {
    const row = button.closest('tr');
    const cells = row.cells;

    const name = document.getElementById('employeeName').value;
    const age = document.getElementById('employeeAge').value;
    const number = document.getElementById('employeeNumber').value;
    const email = document.getElementById('employeeEmail').value;

    if (!name || !age || !number || !email) {
        alert('Please fill in all fields');
        return;
    }

    cells[1].innerHTML = `<p>${name}</p>`;
    cells[2].innerHTML = `<p>${age}</p>`;
    cells[3].innerHTML = `<p>${number}</p>`;
    cells[4].innerHTML = `<p>${email}</p>`;

    document.querySelector('.submit').disabled = false;
    
    button.textContent = 'Edit';
    button.onclick = function() {
        editRow(this);
    };
    
    clearInputFields();
}

function copyRow(button) {
    const row = button.closest('tr');
    const tableBody = document.getElementById('tableBody');
    const newRow = row.cloneNode(true);

    const serialNumber = generateSerialNumber();
    newRow.cells[0].textContent = serialNumber;

    tableBody.appendChild(newRow);
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    deleteSerialNumber();
    
}

function clearInputFields() {
    document.getElementById('employeeName').value = '';
    document.getElementById('employeeAge').value = '';
    document.getElementById('employeeNumber').value = '';
    document.getElementById('employeeEmail').value = '';
}