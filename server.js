const http = require('http');
const PORT = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    console.log('New connection');
    
    // Establece el tipo de contenido como HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Envío de contenido HTML
    res.end(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Perfiles</title>
          <style>
            body {
              margin: 0;
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              text-align: center;
            }
            header {
              background-color: #333;
              color: white;
              padding: 20px;
            }
            h1 {
              margin: 0;
            }
            .container {
              padding: 20px;
            }
            .profiles {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              max-width: 800px;
              margin: auto;
            }
            .profile {
              background-color: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .profile img {
              border-radius: 50%;
              width: 150px;
              height: 150px;
              object-fit: cover;
              margin-bottom: 15px;
            }
            .profile h3 {
              color: #333;
              margin: 10px 0;
            }
            .profile p {
              color: #666;
              font-size: 0.9rem;
            }
            .profile a {
              display: inline-block;
              margin-top: 10px;
              background-color: #007bff;
              color: white;
              padding: 10px 15px;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s;
            }
            .profile a:hover {
              background-color: #0056b3;
            }
            footer {
              background-color: #333;
              color: white;
              padding: 20px;
              position: relative;
              bottom: 0;
              width: 100%;
            }
            footer p {
              margin: 0;
            }
          </style>
        </head>
        <body>
          <!-- Encabezado -->
          <header>
            <h1>Perfiles Destacados</h1>
          </header>

          <!-- Contenido Principal -->
          <div class="container">
            <div class="profiles">
              <!-- Perfil 1 -->
              <div class="profile">
                <img src="https://via.placeholder.com/150" alt="Perfil 1">
                <h3>Nombre 1</h3>
                <p>Descripción breve del perfil 1. Especialista en desarrollo web y diseño UI/UX.</p>
                <a href="#">Ver Perfil</a>
              </div>

              <!-- Perfil 2 -->
              <div class="profile">
                <img src="https://via.placeholder.com/150" alt="Perfil 2">
                <h3>Nombre 2</h3>
                <p>Descripción breve del perfil 2. Experto en inteligencia artificial y machine learning.</p>
                <a href="#">Ver Perfil</a>
              </div>

              <!-- Perfil 3 -->
              <div class="profile">
                <img src="https://via.placeholder.com/150" alt="Perfil 3">
                <h3>Nombre 3</h3>
                <p>Descripción breve del perfil 3. Ingeniero de software con experiencia en sistemas distribuidos.</p>
                <a href="#">Ver Perfil</a>
              </div>

              <!-- Perfil 4 -->
              <div class="profile">
                <img src="https://via.placeholder.com/150" alt="Perfil 4">
                <h3>Nombre 4</h3>
                <p>Descripción breve del perfil 4. Especialista en ciberseguridad y criptografía.</p>
                <a href="#">Ver Perfil</a>
              </div>
            </div>
          </div>

          <!-- Pie de página -->
          <footer>
            <p>&copy; 2024 Página de Perfiles. Todos los derechos reservados.</p>
          </footer>
        </body>
      </html>
    `);
  })
  .listen(PORT, () => console.log('Listening on', PORT));
