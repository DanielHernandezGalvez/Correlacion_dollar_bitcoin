import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import AcercaDe from "./pages/AcercaDe";
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
              <Inicio />
            }
          />

          <Route
            path="/blog"
            element={
              <Blog />
            }
          />

          <Route
            path="/acerca-de"
            element={
              <AcercaDe />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
