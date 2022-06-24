const form = document.getElementById('form');
 
form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create payload as new FormData object:
    const payload = new FormData(form);

    // Post the payload using Fetch:
    fetch('http://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.text())
    .then(data => console.log(data))
})

async function getPosts () {
    res = await fetch('http://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'GET'
    });
	data = await res.json();
    posts = data.timeline_posts;

    const timeline = document.getElementById('timeline');
	
	for(i in posts)
    {
        post = posts[i];
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

posts = getPosts();