function login() {
    // Get the values from the input fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log("before the if statementusername:  " + username + " password: " + password);
   
    // Check if the username and password are correct (you would replace this with your authentication logic)
    if (username === "admin" && password === "admin") {
        console.log("username: " + username + " password: " + password);
        window.location.replace ("adminPage.html");
        // Redirect to another page or do something else after successful login
    } else if (username === "staff" && password === "staff") {
        window.location.replace ("staffPage.html");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}


