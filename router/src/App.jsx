import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import AcercaDe from "./pages/AcercaDe";
import Header from "./pages/Header";
import styled from "styled-components";

const App = () => {
  return (
    <ContenedorPrincipal>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
      </Main>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgb(100 100 100 / 0.1);
`

export default App;
