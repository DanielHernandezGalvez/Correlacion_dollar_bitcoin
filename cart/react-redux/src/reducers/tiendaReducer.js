const estadoInicial = {
  productos: [
    { id: 1, nombre: "producto A" },
    { id: 2, nombre: "producto B" },
    { id: 3, nombre: "producto C" },
    { id: 4, nombre: "producto D" },
  ],

  carrito: [],
};

//  es una funcion que se encarga de administrar el estado global
const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      console.log(accion.nombre)
      return estado;
      break;
    default:
      return estado;
  }
};

{
  type: "AGREGAR_PRODUCTO_AL_CARRITO";
}

export default reducer;
