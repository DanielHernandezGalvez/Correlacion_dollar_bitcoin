import React, { useContext } from "react";
import styled from "styled-components";
import { ContextoTema } from "../context/contextoTema";

const Controles = () => {
  const { aumentarFuente, disminuirFuente, izquierda, center, derecha } =
    useContext(ContextoTema);
  console.log(aumentarFuente);
  return (
    <ContenedorControles>
      <div>
        <Boton onClick={aumentarFuente}>aumentar fuente</Boton>
        <Boton onClick={disminuirFuente}>disminuir fuente</Boton>
      </div>
      <div>
        <Boton onClick={izquierda}>izquierda</Boton>
        <Boton onClick={center}>centro</Boton>
        <Boton onClick={derecha}>derecha</Boton>
      </div>
    </ContenedorControles>
  );
};

const ContenedorControles = styled.div`
  margin-top: 20px;
`;

const Boton = styled.button`
  background: #165168;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;

  &:hover {
    background: #191668;
  }
`;

export default Controles;
