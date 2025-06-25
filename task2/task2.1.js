document.addEventListener("DOMContentLoaded", function() {
    const inputForm = document.getElementById("inputForm");
    const displayForm = document.getElementById("displayForm");
    const displayContent = document.getElementById("displayContent");
    const editForm = document.getElementById("editForm");
    const editBtn = document.getElementById("editBtn");
    const saveBtn = document.getElementById("saveBtn");
    const saveChangesBtn = document.getElementById("saveChangesBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Initially hide edit button and reset button
    editBtn.style.display = "none";
    resetBtn.style.display = "none";

    // Handle save button click
    saveBtn.addEventListener("click", function() {
        // Get values from input fields
        const companyName = document.getElementById("companyName").value;
        const companyEmail = document.getElementById("companyEmail").value;
        const joiningDate = document.getElementById("joiningDate").value;
        const city = document.getElementById("city").value;
        const file = document.getElementById("companyFile").files[0];

        if (!file) {
            alert("Please select a file");
            return;
        }

        // Show display content
        displayContent.style.display = "block";

        // Update display elements
        document.getElementById("displayCompanyName").textContent = companyName;
        document.getElementById("displayCompanyEmail").textContent = companyEmail;
        document.getElementById("displayJoiningDate").textContent = joiningDate;
        document.getElementById("displayCity").textContent = city;
        document.getElementById("displayFileType").textContent = file.type;

        // Show edit button
        editBtn.style.display = "block";
    });

    // Handle edit button click
    editBtn.addEventListener("click", function() {
        // Get current values
        const companyName = document.getElementById("displayCompanyName").textContent;
        const companyEmail = document.getElementById("displayCompanyEmail").textContent;
        const joiningDate = document.getElementById("displayJoiningDate").textContent;
        const city = document.getElementById("displayCity").textContent;

        // Set values in edit form
        document.getElementById("editCompanyName").value = companyName;
        document.getElementById("editCompanyEmail").value = companyEmail;
        document.getElementById("editJoiningDate").value = joiningDate;
        document.getElementById("editCity").value = city;

        // Hide display content and show edit form
        displayContent.style.display = "none";
        editForm.style.display = "block";
    });

    // Handle save changes button click
    saveChangesBtn.addEventListener("click", function() {
        const companyName = document.getElementById("editCompanyName").value;
        const companyEmail = document.getElementById("editCompanyEmail").value;
        const joiningDate = document.getElementById("editJoiningDate").value;
        const city = document.getElementById("editCity").value;

        // Update display text
        document.getElementById("displayCompanyName").textContent = companyName;
        document.getElementById("displayCompanyEmail").textContent = companyEmail;
        document.getElementById("displayJoiningDate").textContent = joiningDate;
        document.getElementById("displayCity").textContent = city;

        // Update input form
        document.getElementById("companyName").value = companyName;
        document.getElementById("companyEmail").value = companyEmail;
        document.getElementById("joiningDate").value = joiningDate;
        document.getElementById("city").value = city;
        

        // Hide edit form and show display content
        editForm.style.display = "none";
        displayContent.style.display = "block";

        // Show reset button
        resetBtn.style.display = "block";
    });

    // Handle reset button click
    resetBtn.addEventListener("click", function() {
        // Clear all input fields
        inputForm.reset();
        
        // Hide display content and edit form
        displayContent.style.display = "none";
        editForm.style.display = "none";

        // Reset display text to default
        document.getElementById("displayCompanyName").textContent = "-";
        document.getElementById("displayCompanyEmail").textContent = "-";
        document.getElementById("displayJoiningDate").textContent = "-";
        document.getElementById("displayCity").textContent = "-";
        document.getElementById("displayFileType").textContent = "-";

        // Hide buttons
        editBtn.style.display = "none";
        resetBtn.style.display = "none";
    });
});