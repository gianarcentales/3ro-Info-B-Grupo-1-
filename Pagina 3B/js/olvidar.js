const firebaseConfig = {
    apiKey: "AIzaSyDAHAHr3qY8npU6QKMjXGKJsBMsDLL7cHU",
    authDomain: "proyecto-pagina-348b7.firebaseapp.com",
    projectId: "proyecto-pagina-348b7",
    storageBucket: "proyecto-pagina-348b7.firebasestorage.app",
    messagingSenderId: "578754323103",
    appId: "1:578754323103:web:02ff993c7328139f66b8aa",
    measurementId: "G-D6MW1WKVWT"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Evento al hacer clic en el botón
document.getElementById('resetPassword').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (!email) {
        mensaje.textContent = "Por favor ingresa tu correo.";
        mensaje.className = "error";
        return;
    }

    auth.sendPasswordResetEmail(email)
        .then(() => {
            mensaje.textContent = "✅ Correo de recuperación enviado. Revisa tu bandeja de entrada o spam.";
            mensaje.className = "success";
        })
        .catch(error => {
            mensaje.textContent = "❌ Error: " + error.message;
            mensaje.className = "error";
        });
});
