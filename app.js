const form = document.querySelector("form");
const nameInput = form.querySelector("#user-name");
const emailInput = form.querySelector("#mail");
const passwordInput = form.querySelector("#password");
const confrimpasswordInput = form.querySelector("#confirm-password");
const nameErr = form.querySelector("#name-err-element");
const emailErr = form.querySelector("#email-err-element");
const passwordErr = form.querySelector("#password-err-element");
const confrimpasswordErr = form.querySelector("#confirm-password-err-element");
const sumbitBTN = form.querySelector("#sumbit-btn");
form.reset();

NAME_REGEX = /^[A-Za-z0-9.\s]{1,50}$/
MAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]{2,}$/
// PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'/
CONFIRMPASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9.\d@$!%*?&]{8,}$'/


function isValidName(inputElement) {
    let value = inputElement.value;
    console.log(inputElement.value)
    if (value == "") {
        nameErr.innerText = "**name cannot be empty.."
        nameInput.style.border = "2px solid red"
    }
    else if (!NAME_REGEX.test(value)) {
        nameErr.innerText = "**Invalid name..."
        nameInput.style.border = "2px solid red"
    }
    else {
        nameErr.innerText = "";
        nameInput.style.border = "none";
    }

    return true;
}
nameInput.addEventListener("keyup", () => {
    isValidName(nameInput)
})

function isValidemail(emailElement) {
    console.log(emailElement.value)
    var emailvalue = emailElement.value;
    if (emailvalue == "") {
        emailErr.innerText = "**email connot be empty.."
        emailInput.style.border = "2px solid red"
    }
    else if (!MAIL_REGEX.test(emailvalue)) {
        emailErr.innerText = "**Invalid email"
        emailInput.innerText = "2px solid red"
    }
    else {
        emailErr.innerText = "";
        emailInput.style.border = "none"
    }
    return true;

}
emailInput.addEventListener("keyup", () => {
    isValidemail(emailInput)
})


function isValidpassword(inputElement) {
    console.log(inputElement.value)
    let value = inputElement.value;
    if (value == "") {
        passwordErr.innerText = "**password connot be empty.."
        passwordInput.style.border = "2px solid red"
    }
    else if (value.length < 8) {
        passwordErr.innerText = "write have only 8 charactor"
        passwordInput.style.border = "2px solid red"
    }
    else {
        passwordErr.innerText = "";
        passwordInput.style.border = "none"

    }
    return true;
}

passwordInput.addEventListener("keyup", () => {
    isValidpassword(passwordInput)
})


function isValidconfrimpassword(inputElement) {
    let value = inputElement.value;
    if (value == "") {
        confrimpasswordErr.innerText = "**password connot be empty.."
        confrimpasswordInput.style.border = "2px solid red"
    }
    else if (passwordInput.value !== confrimpasswordInput.value) {
        confrimpasswordErr.innerText = "not match password";
        confrimpasswordInput.style.border = "2px solid red"
    }
    else if (passwordInput.value == confrimpasswordInput.value) {
        confrimpasswordErr.innerText = "";
        confrimpasswordInput.style.border = "none";
    }
    else {
        confrimpasswordErr.innerText = "";
        confrimpasswordInput.style.border = "none";
    }

    return true;


}

confrimpasswordInput.addEventListener("keyup", () => {
    isValidconfrimpassword(confrimpasswordInput)

})

function handlesumbit(e) {
    e.preventDefault();

    let namevalid = isValidName(nameInput)
    let emailvalid = isValidemail(emailInput)
    let passwordvalid = isValidpassword(passwordInput)
    let confrimpasswordvalid = isValidconfrimpassword(confrimpasswordInput)

    let data = {};

    if (namevalid && emailvalid && passwordvalid && confrimpasswordvalid) {
        data.name = nameInput.value;
        data.email = emailInput.value;
        data.password = passwordInput.value;
        data.confrimpassword = confrimpasswordInput.value;
        console.log(data)

    }
}
sumbitBTN.addEventListener("click", handlesumbit)

function setType(element, oldType, newType) {
    if (element.type == oldType) {
        element.type = newType
    }
    else {
        element.type = oldType;
    }

}

function setIcon(element, oldPath, newPath) {
    if (element.scr.match(oldPath)) {
        element.scr = newPath;
    }
    else {
        element.src = oldPath;
    }
}


eyeIcon.addEventListener("c")