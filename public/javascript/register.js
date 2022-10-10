var register = document.getElementById('registerform');
register.addEventListener('submit', submitRegister);

function submitRegister(event) {

    console.log("hello event form")
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var data = {
        user_name: email,
        password: password
    }
    fetch("http://localhost:3000/api/users", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
}