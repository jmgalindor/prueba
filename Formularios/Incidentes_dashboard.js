// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });

  /* Funcion para el boton de filtrado */
  
  document.addEventListener("DOMContentLoaded", function () {
    const tablaTareas = document.getElementById("Tabla_incidentes");
    const dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("click", function (event) {
      if (event.target.classList.contains("dropdown-item")) {
        const selectedProject = event.target.textContent;
        filterTable(selectedProject);
      }
    });

    
    function filterTable(selectedProject) {
      const rows = tablaTareas.querySelectorAll("tbody tr");
      rows.forEach(function (row) {
        const proyecto = row.cells[0].textContent;
        if (
          selectedProject === "Todos los proyectos" ||
          proyecto === selectedProject
        ) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    }
  });
})();