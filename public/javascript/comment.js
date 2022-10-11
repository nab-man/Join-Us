
var comment = document.getElementById('commentform');
comment.addEventListener('submit', submitCommentForm);

function submitCommentForm(event) {

    event.preventDefault()
    console.log("hello event form")
    var comment = document.getElementById("comment").value
    var id = window.location.split("/")
    console.log(id)

    // var data = {
    //     content: comment,
    //     post_id: id
    // }
    // fetch("http://localhost:3000/api/comments", {
    //     credentials: "include",
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // }).then(() => {
    //     window.location.href = "/dashboard"
    // })
}