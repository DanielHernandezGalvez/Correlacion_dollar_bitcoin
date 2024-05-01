import React, { useState } from "react";

// creamo contexto = estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState({
    alineado: "center",
    fuente: 30,
  });

  const aumentarFuente = () => setTema({ ...tema, fuente: tema.fuente + 1 });
  const disminuirFuente = () => setTema({ ...tema, fuente: tema.fuente - 1 });
  const izquierda = () => setTema({ ...tema, alineado: "left" });
  const center = () => setTema({ ...tema, alineado: "center" });
  const derecha = () => setTema({ ...tema, alineado: "right" });

  return (
    <ContextoTema.Provider
      value={{
        tema,
        aumentarFuente,
        disminuirFuente,
        izquierda,
        center,
        derecha,
      }}
    >
      {children}
    </ContextoTema.Provider>
  );
};

export { ContextoTema, ProveedorTema };
