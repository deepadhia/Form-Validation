const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
var gender = document.getElementsByName('gender');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
form.addEventListener('reset', (event) => {
    Reset();
})

//validate email
const isEmail = (emailVal) => {
    var atsymbol = emailVal.indexOf('@');
    if (atsymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atsymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

//reset function to chnage class name
function Reset() {
    var formCont = document.getElementsByClassName('form-control success');
    var formCont1 = document.getElementsByClassName('form-control error');

    while (formCont.length > 0) {
        formCont[0].className = "form-control";

    }
    while (formCont1.length > 0) {
        formCont1[0].className = "form-control";

    }
}
// display successmsg
const setSuccessMsgg = (usernameVal) => {
    let formCont = document.getElementsByClassName('form-control');
    var count = 0;
    var i;
    for (i = 0; i < formCont.length; i++) {
        if (formCont[i].className === "form-control success") {
            ++count;
        }
    }
    if (i === count) {

        Swal.fire(
            'Good job  ' + usernameVal,
            'Registration Successful!!',
            'success'
        );
    }
    else {
        Swal.fire(
            'Opps!',
            'Registration UnSuccessful!!',
            'failed'
        );
    }
}
function validate() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username cannot be less than 3 characters');
    }
    else {
        setSuccessMsg(username);
    }
    // validate email
    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Invalid Email');
    }
    else {
        setSuccessMsg(email);
    }
    // validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'Phone Number cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Invalid Phone Number');
    }
    else {
        setSuccessMsg(phone);
    }
    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank');
    } else if (passwordVal.length < 6) {
        setErrorMsg(password, 'Invalid Password(Minimum 6 characters');
    }
    else {
        setSuccessMsg(password);
    }

    // validate cpassword
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');
    }
    else if (passwordVal.length < 6) {
        setErrorMsg(cpassword, 'Invalid Password(Minimum 6 characters');
    }

    else if (cpasswordVal != passwordVal) {
        setErrorMsg(cpassword, 'Passwords does not match');
    }
    else {
        setSuccessMsg(cpassword);
    }
    setSuccessMsgg(usernameVal);

}
function setErrorMsg(input, errormsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsg;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

