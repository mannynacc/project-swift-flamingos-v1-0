const form = document.getElementById('form');

async function submit_post() {
    // Create payload as new FormData object:
    const payload = new FormData(form);

    // Post the payload using Fetch:
    post = await fetch('https://mlhportofolio.duckdns.org/api/timeline_post', {
    method: 'POST',
    body: payload,
    });

    if (!post.ok) {
        if(post.status == 429) {
            const body = document.body;
            body.innerHTML = 
            `
                <center>
                    <h1>429 Too Many Requests</h1>
                    <p>Please wait 1 minute before trying to post again.</p>
                </center>
                <hr>
                <center>nginx/1.23.0</center>
            `;
        }
        else {
            const error = (data && data.message) || post.status;
            document.open();
            document.write(error);
            document.close();
        }
    }
    else {
        text = await post.text()
        console.log(text)
        location.reload()
    }
}
 
form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    submit_post();
})
