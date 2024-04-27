import { NavLink, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <header>
        <h1>Blog personal</h1>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/acerca-de">Acerca de</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Página de inicio</h2>
                <p>Esta es la página principal de nuestro sitio.</p>
              </div>
            }
          />

          <Route
            path="/blog"
            element={
              <div>
                <h2>Blog</h2>
                <ul>
                  <li>Articulo #1</li>
                  <li>Articulo #2</li>
                  <li>Articulo #3</li>
                </ul>
              </div>
            }
          />

          <Route
            path="/acerca-de"
            element={
              <div>
                <h2>Acerca de</h2>
                <p>Hola soy daniel galvez.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
