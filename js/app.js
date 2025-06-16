

const SUPABASE_URL = 'https://kjjhbrcarwncozavvfcv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqamhicmNhcnduY296YXZ2ZmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzA0MjAsImV4cCI6MjA2NTUwNjQyMH0.fk_bjKpXFsTW6ZZqmMu1nL9kA2slQTHeoclQj-68lWg';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const tablaContenido = document.getElementById('tabla-contenido');