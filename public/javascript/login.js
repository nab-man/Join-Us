var login = document.getElementById('loginform');
login.addEventListener('submit', submitLogin);

function submitLogin(event) {
    event.preventDefault()
    var url = getUrl()
    console.log("hello event form")
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var data = {
        user_name: email,
        password: password
    }
    fetch(url + "/api/users/login", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => {
        window.location.href = "/dashboard"
    })
}