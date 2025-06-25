// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the forms
    const inputForm = document.getElementById("inputForm");
    const displayForm = document.getElementById("displayForm");

    // Get references to input fields
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const ageInput = document.getElementById("ageInput");
    const cityInput = document.getElementById("cityInput");
    const genderInput = document.getElementById("genderInput");
    const resumeInput = document.getElementById("resumeInput");

    // Get references to display elements
    const displayName = document.getElementById("displayName");
    const displayEmail = document.getElementById("displayEmail");
    const displayAge = document.getElementById("displayAge");
    const displayCity = document.getElementById("displayCity");
    const displayGender = document.getElementById("displayGender");
    const displayFileType = document.getElementById("displayFileType");

    // Get references to text elements
    const displayNameText = document.getElementById("displayNameText");
    const displayEmailText = document.getElementById("displayEmailText");
    const displayAgeText = document.getElementById("displayAgeText");
    const displayCityText = document.getElementById("displayCityText");
    const displayGenderText = document.getElementById("displayGenderText");
    const displayFileTypeText = document.getElementById("displayFileTypeText");

    // Get reference to the buttons
    const editBtn = document.getElementById("editBtn");
    const saveBtn = document.getElementById("saveBtn");

    // Function to toggle between text and input fields
    function toggleEditMode(isEditing) {
        const textElements = [
            displayNameText, displayEmailText, displayAgeText,
            displayCityText, displayGenderText, displayFileTypeText
        ];
        const inputElements = [
            displayName, displayEmail, displayAge,
            displayCity, displayGender, displayFileType
        ];

        textElements.forEach((el, index) => {
            el.style.display = isEditing ? 'none' : 'block';
            inputElements[index].style.display = isEditing ? 'block' : 'none';
        });

        if (isEditing) {
            inputElements.forEach(input => {
                input.readOnly = false;
                if (input.tagName === 'SELECT') {
                    input.disabled = false;
                }
            });
        } else {
            inputElements.forEach(input => {
                input.readOnly = true;
                if (input.tagName === 'SELECT') {
                    input.disabled = true;
                }
            });
        }
    }

    // Handle form submission
    inputForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get values from input fields
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const age = ageInput.value.trim();
        const city = cityInput.value.trim();
        const gender = genderInput.value;
        const file = resumeInput.files[0];

        // Validate that all fields are filled
        if (!name || !email || !age || !city || !gender || !file) {
            alert("Please fill in all fields and upload a resume");
            return;
        }

        // Get file type
        const fileType = file.type;

        // Update display elements with input values
        displayName.value = name;
        displayEmail.value = email;
        displayAge.value = age;
        displayCity.value = city;
        displayGender.value = gender;
        displayFileType.value = fileType;

        // Update text elements
        displayNameText.textContent = name;
        displayEmailText.textContent = email;
        displayAgeText.textContent = age;
        displayCityText.textContent = city;
        displayGenderText.textContent = gender;
        displayFileTypeText.textContent = fileType;

        // Show display form and hide input form
        inputForm.style.display = 'none';
        displayForm.style.display = 'block';

        // Ensure we're in view mode
        toggleEditMode(false);
    });

    // Handle edit button click
    editBtn.addEventListener("click", function() {
        toggleEditMode(true);
        editBtn.style.display = "none";
        saveBtn.style.display = "block";
    });

    // Handle save button click
    saveBtn.addEventListener("click", function() {
        // Validate the edited values
        const name = displayName.value.trim();
        const email = displayEmail.value.trim();
        const age = displayAge.value.trim();
        const city = displayCity.value.trim();
        const gender = displayGender.value;

        if (!name || !email || !age || !city || !gender) {
            alert("Please fill in all fields");
            return;
        }

        // Update text elements with new values
        displayNameText.textContent = name;
        displayEmailText.textContent = email;
        displayAgeText.textContent = age;
        displayCityText.textContent = city;
        displayGenderText.textContent = gender;

        // Update input form fields with display form values
        nameInput.value = name;
        emailInput.value = email;
        ageInput.value = age;
        cityInput.value = city;
        genderInput.value = gender;

        // Switch back to view mode
        toggleEditMode(false);
        editBtn.style.display = "block";
        saveBtn.style.display = "none";
    });
});