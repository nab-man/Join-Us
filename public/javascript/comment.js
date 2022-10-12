import getUrl from "./config.js"
var comment = document.getElementById('commentform');
comment.addEventListener('submit', submitCommentForm);

const comment_rm_btn = document.getElementById('comment-rm-btn');
comment_rm_btn.addEventListener('click', removeCommentbyid);

function submitCommentForm(event) {

    event.preventDefault()
    var url = getUrl()
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
    fetch(url + "/api/comments", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => { location.reload() })
}

function removeCommentbyid(event) {

    event.preventDefault()
    console.log("hello comment delete")
    let comment_id = comment_rm_btn.dataset.commentid;
    let creator_id = comment_rm_btn.dataset.creatorid;
    console.log("creator_id ", creator_id);
    console.log("comment_id ", comment_id);
    var data = {
        creator_id: creator_id,
    }
    fetch(`http://localhost:3000/api/comments/${comment_id}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => { })
}