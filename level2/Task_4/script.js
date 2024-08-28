// script.js

function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (username && password) {
        if (localStorage.getItem(username)) {
            document.getElementById('register-error').innerText = 'User already exists.';
        } else {
            localStorage.setItem(username, password);
            alert('Registration successful!');
            showLogin();
        }
    } else {
        document.getElementById('register-error').innerText = 'Please fill in all fields.';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert('Login successful!');
        showSecuredPage(username);
    } else {
        document.getElementById('login-error').innerText = 'Invalid username or password.';
    }
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showSecuredPage(username) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('secured-container').style.display = 'block';
    document.getElementById('user').innerText = username;
}

function logout() {
    document.getElementById('secured-container').style.display = 'none';
    showLogin();
}
