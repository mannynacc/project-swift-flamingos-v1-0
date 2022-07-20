async function delete_post(postID) {
    if(confirm("Are you sure you want to delete this post?")) {
        post = await fetch(`https://mlhportofolio.duckdns.org/api/timeline_post/${postID}`, {
        method: 'DELETE'
        });
        
        txt = await post.text();
        alert(txt);
        // post = document.getElementById('post-' + postID);
        location.reload()
    }
    // else {

    // }
}