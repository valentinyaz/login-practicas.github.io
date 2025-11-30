// Firebase v9 compat (para usar con HTML normal)

// Configuración que te dio Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALJquvuS67n5270jhXcYRNX5yqpx2Cs0o",
  authDomain: "login-practicas-5b5e6.firebaseapp.com",
  projectId: "login-practicas-5b5e6",
  storageBucket: "login-practicas-5b5e6.appspot.com",
  messagingSenderId: "856971737684",
  appId: "1:856971737684:web:74c8f1bbb5710429848bc1"
};

// Inicializa Firebase (v9 compat usa esta sintaxis)
firebase.initializeApp(firebaseConfig);

// Obtén Auth
const auth = firebase.auth();

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "home.html";
      })
      .catch(error => {
        document.getElementById("mensaje").innerHTML = error.message;
      });
  });
}