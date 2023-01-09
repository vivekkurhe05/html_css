let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let pwd = document.querySelector('#password');
let cpwd = document.querySelector('#con_pwd');
let div = document.querySelectorAll('.invalid-feedback');
div.forEach(el => {
    el.style.display = 'none';
});

fname.addEventListener('blur', validate_fname);
lname.addEventListener('blur', validate_lname);
email.addEventListener('blur', validate_email);
pwd.addEventListener('blur', validate_password);
cpwd.addEventListener('blur', validate_cpassword);

function validate_fname(e) {
    const re = /^[A-Za-z]{2,10}$/;

    if(!re.test(e.target.value)) {
        div[0].textContent = 'First Name must be between 2 and 10 characters';
        div[0].style.color = 'red';
        div[0].style.display = 'block';
    }else {
        div[0].style.display = 'none';
    }
}

function validate_lname(e) {
    const re = /^[A-Za-z]{2,10}$/;

    if(!re.test(e.target.value)) {
        div[1].textContent = 'Last Name must be between 2 and 10 characters';
        div[1].style.color = 'red';
        div[1].style.display = 'block';
    }else {
        div[1].style.display = 'none';
    }
}

function validate_email(e) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.(com|net|in|web|co)$/;

    if(!re.test(e.target.value)) {
        div[2].textContent = 'Enter a valid email';
        div[2].style.color = 'red';
        div[2].style.display = 'block';
    }else {
        div[2].style.display = 'none';
    }
}

function validate_password(e) {
    const re = /\w{8,}/;

    if(!re.test(e.target.value)) {
        div[3].textContent = 'Password must be atleast 8 characters long';
        div[3].style.color = 'red';
        div[3].style.display = 'block';
    }else {
        div[3].style.display = 'none';
    }
}

function validate_cpassword(e) {
    const re = /\w{8,}/;

    if(!re.test(e.target.value)) {
        div[4].textContent = 'Confirm password must be atleast 8 characters long';
        div[4].style.color = 'red';
        div[4].style.display = 'block';
    } else if(pwd.value !== e.target.value) {
        div[4].textContent = 'Password and Confirm password should match';
        div[4].style.color = 'red';
        div[4].style.display = 'block';
    } 
    else {
        div[4].style.display = 'none';
    }
}