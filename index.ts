<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Panel Administrador</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <div class="contenido">
    <header class="top-bar">
      <div class="logo">Logo</div>
      <nav class="nav-buttons">
        <button onclick="verPublicaciones()">📄 Publicaciones</button>
        <button onclick="irAPublicar()">✏️ Publicar</button>
      </nav>
    </header>

    <main class="container" id="publicar">
      <form class="formulario">
        <div class="campo">
          <label for="tema">Tema:</label>
          <input type="text" id="tema" name="tema" required />
          <div class="subir-archivo">
            <label for="archivo" class="btn-subir">📤</label>
            <input type="file" id="archivo" name="archivo" hidden onchange="mostrarNombreArchivo()" />
          </div>
        </div>
        <div id="nombre-archivo" class="nombre-archivo"></div>

        <div class="campo">
          <label for="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" rows="3" required></textarea>
        </div>

        <div class="campo">
          <label for="nota">Nota:</label>
          <input type="text" id="nota" name="nota" required />
        </div>

        <div class="boton-publicar">
          <button type="submit">✅ Publicar</button>
        </div>
      </form>
    </main>

    <section class="container" id="publicaciones" style="display: none;">
      <h2>📄 Publicaciones Subidas</h2>
      <p>Aquí se mostrarán las publicaciones subidas.</p>
    </section>
  </div>

  <footer>
    <hr />
    <p>Pie de página correctamente mueve</p>
  </footer>

  <script>
    function mostrarNombreArchivo() {
      const input = document.getElementById('archivo');
      const nombre = input.files.length > 0 ? input.files[0].name : '';
      document.getElementById('nombre-archivo').textContent = nombre;
    }

    function verPublicaciones() {
      document.getElementById('publicar').style.display = 'none';
      document.getElementById('publicaciones').style.display = 'block';
    }

    function irAPublicar() {
      document.getElementById('publicar').style.display = 'block';
      document.getElementById('publicaciones').style.display = 'none';
    }
  </script>
</body>
</html>
