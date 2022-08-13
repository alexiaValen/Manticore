const visibitityBtn = document.getElementById('visibilityBtn');
const visbitityBtn2 = document.getElementById('visibilityBtn2');

visibitityBtn.addEventListener('click', toggleOn)
visbitityBtn2.addEventListener('click', toggleOn)

toggleOn = () => {
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('passwordConfirm');
    const eye1 = document.getElementById('eye1');
    const eye2 = document.getElementById('eye2');

    if (passwordInput.type || passwordConfirmInput === 'password') {
        passwordInput.type = 'text';
        eye1.innerText = 'visibility_off';
    } else {
        passwordInput.type = 'password';
        passwordConfirmInput = 'password';
        eye1.innerText = 'visibility';
        eye2.innerText = 'visibility';
    }
} 