const SUPABASE_URL = "https://kjjhbrcarwncozavvfcv.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqamhicmNhcnduY296YXZ2ZmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzA0MjAsImV4cCI6MjA2NTUwNjQyMH0.fk_bjKpXFsTW6ZZqmMu1nL9kA2slQTHeoclQj-68lWg";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const tablaContenido = document.getElementById("tabla-contenido");

// Mostrar Alumnos
async function mostrarAlumnos() {
  const { data, error } = await supabase.from("alumno").select("*");
  if (error) {
    tablaContenido.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    return;
  }

  if (!data || data.length === 0) {
    tablaContenido.innerHTML = "<p>No hay alumnos cargados.</p>";
    return;
  }

  let html = `<h3>Alumnos</h3><table class="table table-bordered transparente">
      <thead><tr><th>DNI</th><th>Nombre</th><th>apellido</th><th>Email</th><th>Legajo</th></tr></thead><tbody>`;

  data.forEach((eq) => {
    html += `<tr>
          <td>${eq.dni}</td><td>${eq.nombre}</td><td>${eq.apellido}</td>
          <td>${eq.email}</td><td>${eq.legajo}</td>
       
        </tr>`;
  });

  html += `</tbody></table>`;
  tablaContenido.innerHTML = html;
}

// Mostrar Cursos
async function mostrarCursos() {
  const { data, error } = await supabase.from("curso").select("*");
  if (error) {
    tablaContenido.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    return;
  }

  if (!data || data.length === 0) {
    tablaContenido.innerHTML = "<p>No hay Cursos cargados.</p>";
    return;
  }

  let html = `<h3>Cursos</h3><table class="table table-bordered">
      <thead><tr><th>IdCurso</th><th>NombreCurso</th><th>HS</th><th>ProfeDicta</th></thead><tbody>`;

  data.forEach((eq) => {
    html += `<tr>
          <td>${eq.idCurso}</td><td>${eq.nombreCurso}</td><td>${eq.hsCatedra}</td>
          <td>${eq.profeDicta}</td>
       
        </tr>`;
  });

  html += `</tbody></table>`;
  tablaContenido.innerHTML = html;
}

// MostrarInscribe
async function mostrarInscribe() {
  const { data, error } = await supabase.from("inscribe").select("*");
  if (error) {
    tablaContenido.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    return;
  }

  if (!data || data.length === 0) {
    tablaContenido.innerHTML = "<p>No hay Inscriptos cargados.</p>";
    return;
  }

  let html = `<h3>Inscriptos</h3><table class="table table-bordered">
      <thead><tr><th>Fecha Inscripción</th><th>DNI</th><th>idCurso</th></thead><tbody>`;

  data.forEach((eq) => {
    html += `<tr>
          <td>${eq.fechaInsc}</td><td>${eq.dni}</td><td>${eq.idCurso}</td>       
        </tr>`;
  });

  html += `</tbody></table>`;
  tablaContenido.innerHTML = html;
}

//Alumnos y Cursos

async function mostrarFuncion() {
  const { data, error } = await supabase.rpc("get_naturaljoin_todo");
  const tablaContenido = document.getElementById("tabla-contenido"); // usa siempre este contenedor
  if (error) {
    tablaContenido.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    return;
  }
  console.log(data);

  if (data && data.length > 0) {
    let html = `<h3>Alumnos y Cursos donde se inscribieron</h3><table class="table table-bordered">
      <thead><tr><th>DNI</th><th>Nombre</th><th>Apellido</th><th>Email</th><th>Legajo</th><th>Nombre Curso</th><th>Hs Catedra</th><th>Profesor</th></tr></thead><tbody>`;
    data.forEach((eq) => {
      html += `<tr>
        <td>${eq.dni}</td><td>${eq.nombre}</td><td>${eq.apellido}</td>
        <td>${eq.email}</td><td>${eq.legajo}</td><td>${eq.nombrecurso}</td><td>${eq.hscatedra} Hs</td><td>${eq.profedicta}</td>

      </tr>`;
    });
    html += `</tbody></table>`;
    tablaContenido.innerHTML = html;
  } else {
    tablaContenido.innerHTML = `<div class="alert alert-info">No hay resultados.</div>`;
  }
}

//Ver Inscriptos por Curso
async function mostrarInscriptosCurso() {
  const { data, error } = await supabase.rpc("get_cant_insc_por_curso");
  const tablaContenido = document.getElementById("tabla-contenido"); // usa siempre este contenedor
  if (error) {
    tablaContenido.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    return;
  }
  console.log(data);

  if (data && data.length > 0) {
    let html = `<h3>Cursos y cantidad de inscriptos</h3><table class="table table-bordered">
      <thead><tr><th>Curso</th><th>Cantidad</th></thead><tbody>`;
    data.forEach((eq) => {
      html += `<tr>
        <td>${eq.nombrecurso}</td><td>${eq.total_inscriptos}</td>

      </tr>`;
    });
    html += `</tbody></table>`;
    tablaContenido.innerHTML = html;
  } else {
    tablaContenido.innerHTML = `<div class="alert alert-info">No hay resultados.</div>`;
  }
}

// Alumnos en mas de un curso
async function mostrarEnMasDeUnCurso() {
  const { data, error } = await supabase.rpc("get_alumnos_en_mas_de_un_curso");
  const tablaContenido = document.getElementById("tabla-contenido"); // usa siempre este contenedor
  if (error) {
    tablaContenido.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    return;
  }
  console.log(data);

  if (data && data.length > 0) {
    let html = `<h3>Alumnos Inscriptos en mas de un curso</h3><table class="table table-bordered">
      <thead><tr><th>DNI</th><th>Nombre</th><th>Apellido</th></thead><tbody>`;
    data.forEach((eq) => {
      html += `<tr>
        <td>${eq.dni}</td><td>${eq.nombre}</td><td>${eq.apellido}</td>

      </tr>`;
    });
    html += `</tbody></table>`;
    tablaContenido.innerHTML = html;
  } else {
    tablaContenido.innerHTML = `<div class="alert alert-info">No hay resultados.</div>`;
  }
}

window.mostrarAlumnos = mostrarAlumnos;
window.mostrarCursos = mostrarCursos;
window.mostrarInscribe = mostrarInscribe;
window.mostrarFuncion = mostrarFuncion;
window.mostrarInscriptosCurso = mostrarInscriptosCurso;
