const form_container = (event) => {
    event.preventDefault();

    let username = document.getElementById("name");
    let password = document.getElementById("password");
    let error = document.getElementById("error");

    if (username.value.trim() === "") {
        error.innerHTML = "Please enter user name";
        username.style.borderColor = "red";
        return;
    }

    error.innerHTML = "";
    username.style.borderColor = "";

    alert("Form submitted successfully");
};