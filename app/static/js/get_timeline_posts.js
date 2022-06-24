async function getPosts () {
    res = await fetch('http://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'GET'
    });
	data = await res.json();
	console.log(data.timeline_posts);
	return data;
}

function printPosts(posts) {
	console.log("POSTS: ", posts);
	
	const timeline = document.getElementById('timeline');
	
	for(post in posts)
    {
        console.log(post);
        timeline.innerHTML +=
        `<div class="post" id="post-${post.id}>
            <span class="name>${post.name}</span>
            <span class="name>${post.email}</span>
            <span class="name>${post.created_at}</span>

            <p>${post.content}</p>
        </div>`;
    }
}

posts = getPosts().then(data => console.log(data));

printPosts(posts.timeline_posts);
