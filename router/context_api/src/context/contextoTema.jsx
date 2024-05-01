import React from "react";

// creamo contexto = estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
  return (
    <ContextoTema.Provider value={{nombre: "Dani"}}>
 
      {children}
    </ContextoTema.Provider>
  );
};

export { ContextoTema, ProveedorTema };
