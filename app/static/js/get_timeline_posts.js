async function getPosts () {
    res = await fetch('https://mlhportofolio.duckdns.org/api/timeline_post');
	data = await res.json();
    posts = data.timeline_posts;

    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ""
	
	for(i in posts)
    {
        post = posts[i];
        console.log(post);
        timeline.innerHTML +=
        `<div class="post" id="post-${post.id}">
            <h3>${post.name}</h3>
            <span class="created-at">${post.created_at}</span>
            <i class="fa fa-trash" onclick=delete_post(${post.id})></i>
            <br>
            <span class="email">${post.email}</span>

            <p>${post.content}</p>
        </div>`;
    }
}

posts = getPosts();
