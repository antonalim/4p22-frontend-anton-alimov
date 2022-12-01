const signUp = () => {
    document.getElementById("sign-in-form").hidden = true;
    document.getElementById("sign-up-form").hidden = false;
    document.getElementById("sign-in-button").className = "header__button";
    document.getElementById("sign-up-button").className = "header__button header__button-active";
    document.getElementById("sign-up-email").addEventListener("input", () => {
        document.getElementById("email-error").hidden = true;
        document.getElementById("sign-up-email").className = "form__text-input";
    });
    document.getElementById("sign-up-password").addEventListener("input", () => {
        document.getElementById("password-error").hidden = true;
        document.getElementById("sign-up-password").className = "form__text-input";
    });
    document.getElementById("repeat-password").addEventListener("input", () => {
        document.getElementById("repeat-password-error").hidden = true;
        document.getElementById("repeat-password").className = "form__text-input";
    });
}

const signIn = () => {
    document.getElementById("sign-up-form").hidden = true;
    document.getElementById("sign-in-form").hidden = false;
    document.getElementById("sign-up-button").className = "header__button";
    document.getElementById("sign-in-button").className = "header__button header__button-active";
}

const register = () => {
    let isValid = true;
    const email = document.getElementById("sign-up-email").value;
    if (!email) {
        document.getElementById("email-error").hidden = false;
        document.getElementById("email-error").innerText = "Поле обязательно для заполнения";
        document.getElementById("sign-up-email").className = "form__text-input error";
        isValid = false;
    }
    if (!validateEmail(email)) {
        document.getElementById("email-error").hidden = false;
        document.getElementById("email-error").innerText = "Email введён некорректно";
        document.getElementById("sign-up-email").className = "form__text-input error";
        isValid = false;
    }
    const password = document.getElementById("sign-up-password").value;
    if (password === "") {
        document.getElementById("password-error").hidden = false;
        document.getElementById("password-error").innerText = "Поле обязательно для заполнения";
        document.getElementById("sign-up-password").className = "form__text-input error";
        isValid = false;
    }
    if (!validatePassword(password)) {
        document.getElementById("password-error").hidden = false;
        document.getElementById("password-error").innerText = "Пароль должен быть не менее 8 символов";
        document.getElementById("sign-up-password").className = "form__text-input error";
        isValid = false;
    }
    const repeatPassword = document.getElementById("repeat-password").value;
    if (repeatPassword === "" || repeatPassword !== password) {
        document.getElementById("repeat-password-error").hidden = false;
        document.getElementById("repeat-password-error").innerText = "Пароли не совпадают";
        document.getElementById("repeat-password").className = "form__text-input error";
        isValid = false;
    }
    if (isValid) {
        const isMan = document.getElementById("man").value;
        const isWoman = document.getElementById("woman").value;
        const about = document.getElementById("about").value;
        const enteredData = {
            email: email,
            password: password,
            gender: isMan ? "Man" : (isWoman ? "Woman" : ""),
            about: about,
        }
        console.log(JSON.stringify(enteredData));
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}
