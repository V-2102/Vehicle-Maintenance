function validateForm() {
    var email = document.forms["forgetPasswordForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    // You can add more validation here, such as checking if the email format is valid
    // or if the email exists in your database

    // If the form is valid, you can send an AJAX request to your server to handle the forget password logic
}
