document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Replace 'yourUsername' and 'yourPassword' with the actual username and password
    if (username === 'Harshita107' && password === 'Harshita@107') {
        window.location.href = 'home.html'; // Redirect to home.html
    } else {
        showErrorMessage('Invalid username or password');
    }
});

function showErrorMessage(message) {
    // Create and display the error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'message error';
    errorMessage.textContent = message;

    const formContainer = document.querySelector('.form-container');
    formContainer.insertBefore(errorMessage, formContainer.firstChild);

    // Remove the error message after 3 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}
