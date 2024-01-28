let phoneNumber = document.querySelector("#phone-number");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password")

phoneNumber.addEventListener("input", function () { 
    if (phoneNumber.value.length === 3 || phoneNumber.value.length === 7) {
        console.log (phoneNumber.value.length)
        phoneNumber.value += "-"
    }
});

confirmPassword.addEventListener("input", function () {
    if (confirmPassword.value == password.value) {
        confirmPassword.setCustomValidity('');
        password.setCustomValidity('');
        console.log('the passwords match!')
    }
    else {
        confirmPassword.setCustomValidity('These passwords do not match');
        console.log('the passwords dont match')
    }
})