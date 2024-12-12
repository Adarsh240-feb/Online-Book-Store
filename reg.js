function validateForm() {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    let phone = document.getElementById("phone").value;
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    return true;
}
