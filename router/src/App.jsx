import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import AcercaDe from "./pages/AcercaDe";
import Header from "./Header";
const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
