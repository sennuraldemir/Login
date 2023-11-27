document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun normal submit işlemini engelle

    // Burada AJAX veya başka bir yöntemle sunucuya kayıt işlemini yapabilirsiniz.

    // Örnek olarak, kayıt işlemi başarılı olduğunu varsayalım
    var signupMessage = document.getElementById('signup-message');
    signupMessage.textContent = 'Registration successful. Redirecting to login page...';

    // 2 saniye sonra login sayfasına yönlendir
    setTimeout(function () {
        window.location.href = 'login.html';
    }, 2000);
});