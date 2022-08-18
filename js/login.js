console.log('Login.html');
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (email === 'tanmoy@gmail.com' && password === '0000') {
        window.location.href = 'index.html';
    }
    else {
        alert('please enter valid email and password')
    }
})