function validate() {
    const companyField = document.getElementById('companyInfo');
    const companyCheck = document.getElementById('company');
    const form = document.getElementById('registerForm');

    // Дефиниране на validField преди да бъде използван
    const validField = document.getElementById('valid');

    companyCheck.addEventListener('change', () => {
        if(companyCheck.checked){
            companyField.style.display = 'block';
        }else{
            companyField.style.display = 'none';
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userNameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const rePasswordInput = document.getElementById('confirm-password');
        const companyNumberInput = document.getElementById('companyNumber');

        const userNamePattern = /^[a-zA-Z0-9]{3,20}$/;  // Променена регулярен израз
        const passwordPattern = /^\w{5,15}$/;
        const emailPattern = /.*@.*\..*/;  // Променен регулярен израз

        let isUserNameValid = false;
        let isEmailValid = false;
        let isPasswordValid = false;
        let isRePasswordValid = false;
        let isCompanyNumberValid = false;

        if(userNamePattern.test(userNameInput.value)){
            isUserNameValid = true;
        }

        if(emailPattern.test(emailInput.value)){
            isEmailValid = true;
        }

        if(passwordPattern.test(passwordInput.value) && rePasswordInput.value === passwordInput.value){
            isPasswordValid = true;
            isRePasswordValid = true;
        }

        if(companyCheck.checked){
            if(companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999){
                isCompanyNumberValid = true;
            } else {
                isCompanyNumberValid = false;
            }
        }

        // Проверки за валидация на всички полета
        if (!isUserNameValid) {
            userNameInput.style.borderColor = 'red';
        } else {
            userNameInput.style.border = 'none';
        }

        if (!isEmailValid) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.border = 'none';
        }

        if (!isPasswordValid) {
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.style.border = 'none';
        }

        if (!isRePasswordValid) {
            rePasswordInput.style.borderColor = 'red';
        } else {
            rePasswordInput.style.border = 'none';
        }

        if (companyCheck.checked && !isCompanyNumberValid) {
            companyNumberInput.style.borderColor = 'red';
        } else {
            companyNumberInput.style.border = 'none';
        }

        // Показване/скриване на div с id="valid"
        if (isUserNameValid && isEmailValid && isPasswordValid && isRePasswordValid && (companyCheck.checked ? isCompanyNumberValid : true)) {
            validField.style.display = 'block';
        } else {
            validField.style.display = 'none';
        }
    });
}
