async function getPosts () {

    fetch('http://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'GET'
    })
    .then(res => res.json())
    .then(
        (data) => {
            console.log(data);
            return data;
        }
    );
}

posts = getPosts();

for(post in post)
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