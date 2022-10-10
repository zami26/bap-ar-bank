document.getElementById('log-in').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passowrdField = document.getElementById('passowrd-field');
    const passowrd = passowrdField.value;
    if (email === 'arafatulislamzami@gmail.com' && passowrd === 'zami261139') {
        window.location.href = 'bank.html'
    }
    else {
        alert('unable to find an account')
    }
})