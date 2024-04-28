import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Tienda from "./components/Tienda";
import Error404 from "./components/Error404";
import Carrito from "./Carrito";
import { useState } from "react";

const App = () => {
  const productos = [
    { id: 1, nombre: "producto 1" },
    { id: 2, nombre: "producto 2" },
    { id: 3, nombre: "producto 3" },
    { id: 4, nombre: "producto 4" },
  ];
  const [carrito, setCarrito] = useState([]);

  const agregarProductoAlCarrito = (id, nombre) => {
    // si el carrito no tiene elementos agregamos uno
    if (carrito.length === 0) {
      setCarrito([{ id: id, nombre: nombre, cantidad: 1 }]);
    } else {
      //de otra manera tenemos que revisar que el carrito no tenga el producto
      // si ya tiene entonces queremos actualizar su valor
      // Si no tiene el producto entonces lo agregamos
      // para editar el arreglo tenemos que clonarlo
      const nuevoCarrito = [...carrito];

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

      // por ultimo actualizamos el carrito
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <>
      <Contenedor>
        <Menu>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="/" exact={true} element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/tienda"
              element={
                <Tienda
                  productos={productos}
                  agregarProductoAlCarrito={agregarProductoAlCarrito}
                />
              }
            />
            <Route path="/" element={<Error404 />} />
          </Routes>
        </main>
        <aside>
          <Carrito carrito={carrito} />
        </aside>
      </Contenedor>
    </>
  );
};

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
