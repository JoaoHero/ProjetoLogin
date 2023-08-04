const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputName = document.querySelector("#inputName").value;
    const inputEmail = document.querySelector("#inputEmail").value;
    const inputPassword = document.querySelector("#inputPassword").value;
    const inputCompany = document.querySelector("#inputCompany").value;

    const formData = {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        company: inputCompany
    };

    fetch("/registerPost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((response) => response.json()).then((jsonBody) => {
        if(jsonBody.error) {
            const div = document.querySelector(".alert");

            div.style.display = "flex";
            div.innerHTML = `<p>${jsonBody.message}</p>`;

            setTimeout(() => {
                div.style.display = "none";
            }, 2000);
        }else {
            const div = document.querySelector(".alert");

            div.style.display = "flex";
            div.style.background = "green";
            div.innerHTML = `<p>${jsonBody.message}</p>`;

            setTimeout(() => {
                window.location = "/login";
            }, 2000);
        }
    })
    .catch((err) => console.log("Erro ao tentar se conectar com a rota POST", err));
});