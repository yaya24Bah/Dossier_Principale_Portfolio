document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (username === 'yayabah' && password === 'yayabah22') {
        alert('Connexion réussie!');
        window.location.href = 'page_principales.html';  // Redirect to the main page after successful login
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});
