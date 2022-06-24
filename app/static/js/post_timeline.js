const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contentInput = document.getElementById("content");
const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const content = contentInput.value;

    let bodyFormData = new FormData();
    bodyFormData.append('name', name);
    bodyFormData.append('email', email);
    bodyFormData.append('content', content);

    axios({
        method: "post",
        url: "http://164.92.103.235:5000/api/timeline_post",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
});