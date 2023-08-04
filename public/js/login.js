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

        if(error === true) {
            console.log("Com erro")
        }
    })
    .catch((err) => console.log("Erro ao tentar se conectar com a rota POST", err));
})