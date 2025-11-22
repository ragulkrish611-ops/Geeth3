// Predefined usernames and passwords for testing
const users = [
    { username: 'sivakumar', password: 'siva@7078' },
    { username: 'ragul', password: 'Ragul@2005' },
    { username: 'admin', password: '1234' }
];

// Get the login form and input fields
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate input
    if (username === '' || password === '') {
        alert('Please fill in both fields');
        return;
    }

    // Check if username and password match
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {

        // store user data (your original code)
        localStorage.setItem('user', JSON.stringify(user));

        // ADD THIS → session flag
        localStorage.setItem('loggedin', 'true');

        alert('Login successful!');
        window.location.href = 'Home.html';

    } else {
        alert('Incorrect username or password');
    }

    usernameInput.value = '';
    passwordInput.value = '';
});
