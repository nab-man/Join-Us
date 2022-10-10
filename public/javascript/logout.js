var signoutEl = document.getElementById("signout")
signoutEl.addEventListener("click", signout);

function signout() {
    console.log("i was clicked")
    fetch("http://localhost:3000/api/users/logout", {
        credentials: "include",
        method: "POST"
    }).then(() => {
        window.location.href = "/"
    })
}