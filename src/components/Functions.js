// login.js
document.addEventListener('DOMContentLoaded', function () {
   const loginForm = document.getElementById('loginForm');
   if (!loginForm) {
       console.error('Login form not found');
       return;
   }


   const usersDatabase = {
       'user1': 'password123',
       'user2': 'pass456'
       // Add more users here
   };


   loginForm.onsubmit = function(event) {
       event.preventDefault(); // Prevent form from submitting normally


       const userId = document.querySelector('input[name="userid"]').value;
       const password = document.querySelector('input[name="password"]').value;


       if (usersDatabase[userId] && usersDatabase[userId] === password) {
           window.location.href = './Components/loggedIn.js'; // Redirect to login.html
       } else {
           alert('Invalid User ID or Password');
       }
   };
});
