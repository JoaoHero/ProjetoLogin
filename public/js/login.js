const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEmail = document.querySelector("#inputEmail").value;
    const inputPassword = document.querySelector("#inputPassword").value;

    const formData = {
        email: inputEmail,
        password: inputPassword
    }

    fetch("/loginUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((response) => response.json()).then((jsonBody) => {
        const error = jsonBody.error;
        const message = jsonBody.message;
        const div = document.querySelector(".alert");

        if(error === true) {
            div.style.display = "flex";
            div.innerHTML = `<p>${message}</p>`;

            setTimeout(() => {
                div.style.display = "none";
            }, 4000);
        }else {
            div.style.display = "flex";
            div.style.background = "green";
            div.innerHTML = `<p>${message}</p>`

            setTimeout(() => {
                window.location = "/home";
            }, 2000);
        }
    })
    .catch((err) => console.log("Erro ao tentar se conectar com a rota POST", err));
})