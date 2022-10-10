
var formEl1 = document.getElementById('form');
formEl1.addEventListener('submit', submitEventForm);

function submitEventForm(event) {

    event.preventDefault()
    console.log("hello event form")
    var title = document.getElementById("title").value
    console.log(title)
    var description = document.getElementById("description").value
    var datepicker = document.getElementById("datepicker").value
    var guests = document.getElementById('guests').value
    var data = {
        title: title,
        description: description,
        datepicker: datepicker,
        guests: guests
    }
    fetch("http://localhost:3000/api/posts/newpost", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
}