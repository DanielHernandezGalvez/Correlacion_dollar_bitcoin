import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import Contacto from "./Contacto";

const ListaContactos = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "usuarios"), (snapshot) => {
    //   console.log("Se ejecutó snapshot");
    //   console.log(snapshot);}
    // console.log(snapshot.docs[0].data())

    const arregloUsuarios = snapshot.docs.map((documento) => {
        return {...documento.data(), id: documento.id}
    })
    setContactos(arregloUsuarios)
    });
  }, []);

  return (
    contactos.length > 0 && (
      <ContenedorContactos>
        {contactos.map((contacto) => {
          return (
            <Contacto
              key={contacto.id}
              id={contacto.id}
              nombre={contacto.nombre}
              correo={contacto.correo}
            />
          );
        })}
      </ContenedorContactos>
    )
  );
};

const ContenedorContactos = styled.div`
  margin-top: 40px;
`;

export default ListaContactos;
