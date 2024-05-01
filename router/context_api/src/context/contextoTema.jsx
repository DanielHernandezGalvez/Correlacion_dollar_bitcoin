import React, { useState } from "react";

// creamo contexto = estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState({
    alineado: "left",
    fuente: 30,
  });
  return (
    <ContextoTema.Provider value={{ tema }}>{children}</ContextoTema.Provider>
  );
};

export { ContextoTema, ProveedorTema };
