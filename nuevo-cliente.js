(function () {
  const modal = document.getElementById("modalReceta");
  const btnAbrir = document.getElementById("abrirModalReceta");
  const spanCerrar = document.querySelector(".cerrar");

  btnAbrir.onclick = function () {
    // Tomamos nombre paciente y fecha actual
    const nombrePaciente = document.getElementById("paciente").value;
    const fechaHoy = new Date().toLocaleDateString();

    // Rellenamos en modal
    document.getElementById("pacienteModal").textContent = nombrePaciente;
    document.getElementById("fechaModal").textContent = fechaHoy;

    // Mostramos modal
    modal.style.display = "block";
  };

  spanCerrar.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  // Imprimir receta
  document.getElementById("imprimirReceta").onclick = function () {
    const nombre = document.getElementById("pacienteModal").textContent;
    const fecha = document.getElementById("fechaModal").textContent;
    const receta = document.getElementById("textoReceta").value;

    const ventana = window.open("", "", "width=600,height=600");
    ventana.document.write(`
    <h2>Receta médica</h2>
    <p><strong>Paciente:</strong> ${nombre}</p>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <pre>${receta}</pre>
  `);
    ventana.document.close();
    ventana.print();
  };
})();
