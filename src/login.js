// login.js
document.addEventListener('DOMContentLoaded', function () {
    const usersDatabase = {
        'user1': 'password123',
        'user2': 'pass456'
        // Add more users here
    };

    document.getElementById('loginForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        const userId = document.querySelector('input[name="userid"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (usersDatabase[userId] && usersDatabase[userId] === password) {
            alert('Login successful');
            // Additional actions upon successful login
            window.location.href = '../../project-draft-1/login.html';

        } else {
            alert('Invalid User ID or Password');
        }
    };
});