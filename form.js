const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "input error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add("success");
}


function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is required`);
    } 
    else {
        showSuccess(input);
    }
    });
}


function getFieldName(input) {
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkLenghth(input, min, max) {
    if (input.value.length < min) {
    showError(
    input,
    `${getFieldName(input)} must be at least ${min} characters `
    );
    } else if (input.value.length > max) {
    showError(
    input,
    `${getFieldName(input)} must be less than ${max} characters `
    );
    } else {
    showSuccess(input);
    }
}


function checkEmail(input) {
const re = /^[^\s@]+@[^\s@]+\.(com|in|org|edu|gov|xyz|ac|co|co.in)$/;
if (re.test(input.value.trim())) {
showSuccess(input);
} else {
showError(input, "E-mail is not Valid");
}
}


function checkPasswordMatch(input1, input2) {
if (input1.value !== input2.value) {
showError(input2, "Passwords do not match");
}
}

function resetForm() {
    const formControls = document.querySelectorAll(".input");
    formControls.forEach((formControl) => {
        formControl.classList.remove("error", "success");
    });
}


form.addEventListener("submit", (e) => {
e.preventDefault();
resetForm();
checkRequired([username, email, password, cPassword]);
checkLenghth(username, 3, 15);
checkLenghth(password, 6, 25);
checkEmail(email);
checkPasswordMatch(password, cPassword);
});