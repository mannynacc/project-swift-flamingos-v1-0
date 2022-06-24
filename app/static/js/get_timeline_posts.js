async function getPosts () {
    res = await fetch('http://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'GET'
    });
    data = await res.json();
    return data;
}

posts = getPosts().then(data => console.log(data));

for(post in posts)
{
    $('#timeline').append(
    `<div class="post" id="post-${post.id}>
        <span class="name>${post.name}</span>
        <span class="name>${post.email}</span>
        <span class="name>${post.created_at}</span>

        <p>${post.content}</p>
    </div>`
    );
}