import Carrito from "../Carrito";

const estadoInicial = {
  productos: [
    { id: 1, nombre: "producto A" },
    { id: 2, nombre: "producto B" },
    { id: 3, nombre: "producto C" },
    { id: 4, nombre: "producto D" },
  ],

  Carrito: [1, 2, 3],
};

const reducer = (estado = estadoInicial, accion) => {
    return estado
};

export default reducer;
