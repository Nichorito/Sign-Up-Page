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


////////////// THEME SWITCHER //////////////////

//Switch Function
const switchTheme = () => {
    //Get root element and data-theme value
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme');
    let newTheme;

    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    //Set new HTML attribute
    rootElem.setAttribute('data-theme', newTheme);

    //Set the new local storage item
    localStorage.setItem('theme', newTheme)

}

//Add event Listener for the theme switcher 
document.querySelector('#theme-switcher').addEventListener('click', switchTheme);