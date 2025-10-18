// Wait until the full HTML page is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Access form and input fields
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Access error message containers
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stops default page reload

        let isValid = true; // To track validation status

        // Clear previous errors before validating again
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // ✅ Username Validation
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        } else if (usernameInput.value.trim().length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters.';
            isValid = false;
        }

        // ✅ Email Validation using Regular Expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // ✅ Password Validation
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            isValid = false;
        }

        // ✅ If all inputs are valid
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Clear form after successful submission
        }
    });
});
