//variáveis usadas
let email = document.getElementById("email");
let textEmail = document.getElementById("textEmail");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");

//caso não preencha o campo do email
form.addEventListener("submit", (e) => {
    if (email.value == "") {
        textForm.textContent = 'Preencha o campo do Email'
    } else {
        console.log(email.value)
    }

    e.preventDefault()
})

//caso o email esteja errado
email.addEventListener("keyup", () => {
    if (validatorEmail(email.value) !== true) {
        textEmail.textContent = "Email inválido. O formato deve ser Ex: abc@email.com"
    } else {
        textEmail.textContent = ""
    }
})

//para verificar o formato do email
function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

//bleh