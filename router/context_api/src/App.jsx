import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import AcercaDe from "./pages/AcercaDe";
import Header from "./pages/Header";
import styled from "styled-components";
import Post from "./pages/Post";
import Error404 from "./pages/Error404";
import { ContextoTema } from "./context/contextoTema";

const App = () => {
  const {tema} = useContext(ContextoTema);
  console.log(tema.fuente)

  return (
    <ContenedorPrincipal>
      <Header />
      <Main tema={ tema }>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
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
  font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
  text-align: ${props => props.tema ? props.tema.alineado : 'right'};
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgb(100 100 100 / 0.1);
`;

export default App;
