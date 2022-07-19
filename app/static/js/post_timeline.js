const form = document.getElementById('form');
 
form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create payload as new FormData object:
    const payload = new FormData(form);

    // Post the payload using Fetch:
    submit_post = await fetch('https://mlhportofolio.duckdns.org/api/timeline_post', {
    method: 'POST',
    body: payload,
    });

    if (submit_post.status == 429) {
        text = await res.text()

        document.open();
        document.write(text);
        document.close();
    }
    else {

        text = await res.text()
        console.log(text)
        location.reload()
    }
})
