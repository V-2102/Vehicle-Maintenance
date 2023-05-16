function validateLoginForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    document.getElementById("btn").addEventListener("click", check());
}

function check() {
    if (username == "") {
        alert("Please enter your username");
        return false;
    }

    if (password == "") {
        alert("Please enter your password");
        return false;
    }
}

//console.log(document.getElementsByClassName("cls"))