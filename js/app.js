const SUPABASE_URL = 'https://kjjhbrcarwncozavvfcv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqamhicmNhcnduY296YXZ2ZmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzA0MjAsImV4cCI6MjA2NTUwNjQyMH0.fk_bjKpXFsTW6ZZqmMu1nL9kA2slQTHeoclQj-68lWg';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const tablaContenido = document.getElementById('tabla-contenido');


// Mostrar Alumnos
async function mostrarAlumnos() {
    const { data, error } = await supabase.from('alumno').select('*');
    if (error) {
        tablaContenido.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        return;
    }

    if (!data || data.length === 0) {
        tablaContenido.innerHTML = '<p>No hay alumnos cargados.</p>';
        return;
    }

    let html = `<h3>Alumnos</h3><table class="table table-bordered">
      <thead><tr><th>DNI</th><th>Nombre</th><th>apellido</th><th>Email</th><th>Legajo</th></tr></thead><tbody>`;

    data.forEach(eq => {
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
    const { data, error } = await supabase.from('curso').select('*');
    if (error) {
        tablaContenido.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        return;
    }

    if (!data || data.length === 0) {
        tablaContenido.innerHTML = '<p>No hay Cursos cargados.</p>';
        return;
    }

    let html = `<h3>Cursos</h3><table class="table table-bordered">
      <thead><tr><th>IdCurso</th><th>NombreCurso</th><th>HS</th><th>ProfeDicta</th></thead><tbody>`;

    data.forEach(eq => {
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
    const { data, error } = await supabase.from('inscribe').select('*');
    if (error) {
        tablaContenido.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        return;
    }

    if (!data || data.length === 0) {
        tablaContenido.innerHTML = '<p>No hay Inscriptos cargados.</p>';
        return;
    }

    let html = `<h3>Inscriptos</h3><table class="table table-bordered">
      <thead><tr><th>Fecha Inscripción</th><th>DNI</th><th>idCurso</th></thead><tbody>`;

    data.forEach(eq => {
        html += `<tr>
          <td>${eq.fechaInsc}</td><td>${eq.dni}</td><td>${eq.idCurso}</td>       
        </tr>`;
    });

    html += `</tbody></table>`;
    tablaContenido.innerHTML = html;
}

window.mostrarAlumnos = mostrarAlumnos;;
window.mostrarCursos = mostrarCursos;
window.mostrarInscribe = mostrarInscribe;

// Inicialización
// window.onload = () => {
//   mostrarInscribe();
// };
