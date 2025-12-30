function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
      alert("Please enter a username and password.");
    } else {
      alert("Login successful!");
      // Redirect to the dashboard page
      window.location.href = "dashboard.html";
    }
  }
  
  