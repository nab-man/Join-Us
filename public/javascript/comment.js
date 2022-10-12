import getUrl from "./config.js"
var comment = document.getElementById('commentform');
comment.addEventListener('submit', submitCommentForm);

const commentsEl = document.getElementById("all-comments-1248");
commentsEl.addEventListener("click", commentSetting);

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

function commentSetting(event) {
    let url = getUrl()
    var optionSelected = event.target;

    if (optionSelected.matches(".comment-rm-btn-1248")) {

        let data = {
            creator_id: optionSelected.dataset.creatorid,
        };
        let comment_id = optionSelected.dataset.commentid;
        fetch(url + `/api/comments/${comment_id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data)

        }).then(() => { location.reload() })
    };

}