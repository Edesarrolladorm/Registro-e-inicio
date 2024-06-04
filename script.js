document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Guardar los datos del usuario en localStorage
    localStorage.setItem('user', JSON.stringify({ username: username, password: password }));

    // Mostrar mensaje de registro exitoso
    document.getElementById('registerMessage').textContent = 'Usuario registrado exitosamente.';

    // Ocultar el formulario de registro y mostrar el formulario de inicio de sesión
    setTimeout(() => {
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }, 1000); // Espera 1 segundo antes de cambiar de formulario
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Obtener los datos del usuario almacenados en localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verificar si los datos coinciden
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        document.getElementById('loginMessage').textContent = 'Autenticación satisfactoria.';
    } else {
        document.getElementById('loginMessage').textContent = 'Error en la autenticación.';
    }
});
