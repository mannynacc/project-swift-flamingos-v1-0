const form = document.getElementById('form');
 
form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create payload as new FormData object:
    const payload = new FormData(form);

    // Post the payload using Fetch:
    fetch('https://mlhportofolio.duckdns.org:5000/api/timeline_post', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.text())
    .then(data => console.log(data))
    .then(location.reload());
})
