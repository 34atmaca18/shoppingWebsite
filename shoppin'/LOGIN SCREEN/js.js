let container = document.getElementById('container');
let button_up = document.getElementById('up');
let button_down = document.getElementById('down');

button_up.addEventListener('click', () => {
    let width = window.innerWidth;
    if (width < 800) {
        container.classList.add('active1');
    } else {
        container.classList.add('active');
    }
});

button_down.addEventListener('click', () => {
    if (container.classList.contains('active1')) {
        container.classList.remove('active1');
    } else {
        container.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input');
        const emailInput = form.querySelector('.email');
        const passwordInput = form.querySelector('.password');
        const nameInput = form.querySelector('.name');
    
        const emailError = form.querySelector('.email + .error');
        const passwordError = form.querySelector('.password + .error');
        const nameError = form.querySelector('.name + .error');
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const nameRegex = /^[a-zA-Z]+$/;
    
        function validateEmail(email) {
            return emailRegex.test(email);
        }
    
        function validatePassword(password) {
            return passwordRegex.test(password);
        }
    
        function validateName(name) {
            return nameRegex.test(name);
        }
    
        function validateForm() {
            let isValid = true;
            inputs.forEach(input => {
                input.style.borderWidth = '2px';
            });
    
            if (!validateEmail(emailInput.value)) {
                emailError.textContent = "Please enter a valid email address!";
                emailInput.classList.add('error');
                emailInput.style.borderColor = 'rgb(255, 0, 0)';
                isValid = false;
            } else {
                emailError.textContent = "";
                emailInput.classList.remove('error');
                emailInput.classList.add('success');
                emailInput.style.borderColor = 'rgb(60, 255, 60)';
            }
        
            if (!validatePassword(passwordInput.value)) {
                passwordError.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character!";
                passwordInput.classList.add('error');
                passwordInput.style.borderColor = 'rgb(255, 0, 0)';
                isValid = false;
            } else {
                passwordError.textContent = "";
                passwordInput.classList.remove('error');
                passwordInput.classList.add('success');
                passwordInput.style.borderColor = 'rgb(60, 255, 60)'; 
            }
        
            if (!validateName(nameInput.value)) {
                nameError.textContent = "Name must contain only letters!";
                nameInput.classList.add('error');
                nameInput.style.borderColor = 'rgb(255, 0, 0)';
                isValid = false;
            } else {
                nameError.textContent = "";
                nameInput.classList.remove('error');
                nameInput.classList.add('success');
                nameInput.style.borderColor = 'rgb(60, 255, 60)'; 
            }
        
            return isValid;
        }
        
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                console.log('Form is valid. Submitting...');
            } else {
                console.log('Form is invalid. Please correct errors.');
            }
        });
    });
});
