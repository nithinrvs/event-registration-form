function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const zipCode = document.getElementById("zip-code").value;
    const password = document.getElementById("password").value;

    // Reset error messages
    document.getElementById("first-name-error").textContent = "";
    document.getElementById("last-name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("mobile-error").textContent = "";
    document.getElementById("zip-code-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    let isValid = true;

    // Mandatory fields
    if (!firstName) {
        document.getElementById("first-name-error").textContent = "First Name is required.";
        isValid = false;
    }

    if (!lastName) {
        document.getElementById("last-name-error").textContent = "Last Name is required.";
        isValid = false;
    }

    if (!email) {
        document.getElementById("email-error").textContent = "Email Address is required.";
        isValid = false;
    }

    if (!mobile) {
        document.getElementById("mobile-error").textContent = "Mobile Number is required.";
        isValid = false;
    }

    if (!zipCode) {
        document.getElementById("zip-code-error").textContent = "Zip Code is required.";
        isValid = false;
    }

    if (!password) {
        document.getElementById("password-error").textContent = "Password is required.";
        isValid = false;
    }

    // Zip Code validation (exactly 5 digits)
    if (zipCode && !/^\d{5}$/.test(zipCode)) {
        document.getElementById("zip-code-error").textContent = "Zip Code should contain exactly five digits.";
        isValid = false;
    }

    // Email validation (VIT email addresses)
    if (email && !email.endsWith("@vit.ac.in")) {
        document.getElementById("email-error").textContent = "Please use a VIT email address.";
        isValid = false;
    }

    // Password validation
    if (password) {
        if (password.length < 10 || password.length > 100) {
            document.getElementById("password-error").textContent = "Password must be between 10 and 100 characters.";
            isValid = false;
        }

        const uniqueChars = new Set(password.split('')).size;
        if (uniqueChars < 5) {
            document.getElementById("password-error").textContent = "Password must contain at least 5 unique characters.";
            isValid = false;
        }

        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[\~\!\@\#\$\%\^\*\-\_\=\+\[\{\]\}\/\;\:\,\.\?]/.test(password) || /\s/.test(password)) {
            document.getElementById("password-error").textContent = "Password does not meet the required criteria.";
            isValid = false;
        }
    }

    // Mobile Number validation (exactly 10 digits)
    if (mobile && !/^\d{10}$/.test(mobile)) {
        document.getElementById("mobile-error").textContent = "Mobile Number should contain exactly 10 digits.";
        isValid = false;
    }

    return isValid;
}
