// Importar funciones necesarias desde Firebase
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
const auth = getAuth(app);

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault()
  alert("Iniciando sesión...");
  
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso
      const user = userCredential.user;
      alert("Inicio de sesión exitoso");
      console.log("Usuario:", user);
      window.location.href = "menu.html"; // Redirigir a la página de menú
    })
    .catch((error) => {
      // Manejo de errores
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error al iniciar sesión: " + errorMessage);
      console.error("Error:", errorCode, errorMessage);
    });

})