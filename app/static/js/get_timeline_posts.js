async function getPosts () {
    res = await fetch('http://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'GET'
    });
	data = await res.json();
    posts = data.timeline_posts;

    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ""
	
	for(i in posts)
    {
        post = posts[i];
        console.log(post);
        timeline.innerHTML +=
        `<div class="post" id="post-${post.id}>
            <h3>${post.name}</h3>
            <span class="email">${post.email}</span>
            <span class="created-at">${post.created_at}</span>

            <p>${post.content}</p>
        </div>`;
    }
}

posts = getPosts();
