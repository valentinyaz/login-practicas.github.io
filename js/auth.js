// Verifica autenticación antes de mostrar la página
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Cerrar sesión
const btnCerrar = document.getElementById("cerrar");
if (btnCerrar) {
  btnCerrar.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "index.html";
    });
  });
}