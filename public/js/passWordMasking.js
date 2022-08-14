const visibilityBtn = document.getElementById('visibilityBtn');
const visibilityBtn2 = document.getElementById('visibilityBtn2');
const visibilityBtn3 = document.getElementById('visibilityBtn3');
console.log(visibilityBtn);
console.log(visibilityBtn2);
console.log(visibilityBtn3);


toggleVisibility = () => {
    const passwordInput = document.getElementById('passwords');   
    const eye1 = document.getElementById('eye1'); 
    if (passwordInput.type  === 'password') {
        passwordInput.type = 'text';       
        eye1.innerText = 'visibility_off';
    } else {
        passwordInput.type = 'password';    
        eye1.innerText = 'visibility';       
    }
}

toggleVisibility2 = () => {
    const password2Input = document.getElementById('password2');   
    const eye2 = document.getElementById('eye2'); 
    if (password2Input.type  === 'password') {
        password2Input.type = 'text';       
        eye2.innerText = 'visibility_off';
    } else {
        password2Input.type = 'password';    
        eye2.innerText = 'visibility';       
    }
}

toggleVisibility3 = () => {
    const password1Input = document.getElementById('password-login');   
    const eye3 = document.getElementById('eye3'); 
    if (password1Input.type  === 'password') {
        password1Input.type = 'text';       
        eye3.innerText = 'visibility_off';
    } else {
        password1Input.type = 'password';    
        eye3.innerText = 'visibility';       
    }
}

visibilityBtn.addEventListener('click', toggleVisibility);
visibilityBtn2.addEventListener('click', toggleVisibility2);
visibilityBtn3.addEventListener('click', toggleVisibility3);