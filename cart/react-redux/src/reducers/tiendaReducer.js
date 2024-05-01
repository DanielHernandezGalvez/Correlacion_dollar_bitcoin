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
      const { nombre, id } = accion;
      // si el carrito no tiene elementos agregamos uno
      if (estado.carrito.length === 0) {
        return {
          ...estado,
          carrito: [{ id: id, nombre: nombre, cantidad: 1 }],
        };
      } else {
        //de otra manera tenemos que revisar que el carrito no tenga el producto
        // si ya tiene entonces queremos actualizar su valor
        // Si no tiene el producto entonces lo agregamos
        // para editar el arreglo tenemos que clonarlo
        const nuevoCarrito = [...estado.carrito];

        // Comprobar si el carrito ya tiene el id del producto a agregar
        const agregado =
          nuevoCarrito.filter((productoCarrito) => {
            return productoCarrito.id === id;
          }).length > 0;

        // si ya tiene el producto en tonces lo tenemos que actualizar
        if (agregado) {
          // para ello tenemos que buscartlo, obtener su posicion en el arreglo
          // y con base en su posicion lo actualizamos
          nuevoCarrito.forEach((productoCarrito, index) => {
            if (productoCarrito.id === id) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: id,
                nombre: nombre,
                cantidad: cantidad + 1,
              };
            }
          });

        // De otra forma entonces agregamos el producto al arreglo
        } else {
          nuevoCarrito.push({
            id: id,
            nombre: nombre,
            cantidad: 1,
          });
        }

        return {
          ...estado, carrito: nuevoCarrito
        }
      }

      return estado;
    default:
      return estado;
  }
};

{
  type: "AGREGAR_PRODUCTO_AL_CARRITO";
}

export default reducer;
