// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCGmwgDOfR55v-Wu31Luj94Qg0uBkCFlZw",
  authDomain: "login3b-4a31f.firebaseapp.com",
  projectId: "login3b-4a31f",
  storageBucket: "login3b-4a31f.firebasestorage.app",
  messagingSenderId: "435945687899",
  appId: "1:435945687899:web:ef40564a9cebf709f8a87e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtener instancia de autenticación

// Escuchar evento submit del formulario
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar el envío por defecto

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validaciones básicas
  if (!email.includes("@") || !email.includes(".")) {
    Swal.fire({
      icon: "warning",
      title: "Correo inválido",
      text: "Por favor, ingresa un correo electrónico válido.",
      confirmButtonText: "Aceptar"
    });
    return;
  }

  if (password.length < 6) {
    Swal.fire({
      icon: "warning",
      title: "Contraseña corta",
      text: "La contraseña debe tener al menos 6 caracteres.",
      confirmButtonText: "Aceptar"
    });
    return;
  }

  // Mostrar alerta de carga
  Swal.fire({
    title: "Iniciando sesión...",
    text: "Espere un momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  // Intentar iniciar sesión
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Inicio exitoso",
        text: "Bienvenido",
        confirmButtonText: "Continuar"
      }).then(() => {
        window.location.href = "http://127.0.0.1:5502/html/Pagina/menu.html";
      });
    })
    .catch((error) => {
      Swal.close();
      let errorMessage = "Ocurrió un error desconocido.";

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = "El correo electrónico no es válido.";
          break;
        case 'auth/user-disabled':
          errorMessage = "Este usuario ha sido deshabilitado.";
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = "Correo o contraseña incorrectos.";
          break;
        default:
          errorMessage = error.message;
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        confirmButtonText: "Cerrar"
      });
      console.error("Error:", error.code, error.message);
    });
});