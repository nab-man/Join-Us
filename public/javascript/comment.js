
var comment = document.getElementById('commentform');
comment.addEventListener('submit', submitCommentForm);

function submitCommentForm(event) {

    event.preventDefault()
    console.log("hello event form")
    var comment = document.getElementById("comment").value
    var id = window.location.href.split("/")
    id = id[4]
    if (id.includes("?")) {
        id = id.split("?")
        id = id[0]
    }


    var data = {
        content: comment,
        post_id: id
    }
    fetch("http://localhost:3000/api/comments", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => { location.reload() })
}