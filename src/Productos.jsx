import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";

const Usuarios = () => {
  const url = import.meta.env.VITE_API_USUARIOS;

  const [users, setUsers] = useState(null);
  const [usuarioAEditar, setUsuarioAEditar] = useState(null);

  useEffect(() => {
    document.title = "Educación IT - Usuarios";
    console.log("Se monta el componente en la pantalla");
    obtenerTodosLosUsuarios();
  }, []);

  const obtenerTodosLosUsuarios = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`No se pudo obtener los usuarios ${res.status}`);
      }

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("[obtenerTodosLosUsuarios]", error);
    }
  };

  const agregarUsuario = async (usuario) => {
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(usuario),
      };

      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`No se pudo crear el usuario ${res.status}`);
      }

      const dataNuevoUsuario = await res.json();
      const nuevoEstadoUsuarios = [...users, dataNuevoUsuario];
      setUsers(nuevoEstadoUsuarios);
    } catch (error) {
      console.error("[agregarUsuario]", error);
    }
  };

  const editarUsuario = async (usuarioEditado) => {
    try {
      const urlEdicion = `${url}/${usuarioEditado.id}`;
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(usuarioEditado),
      };
      const res = await fetch(urlEdicion, options);

      if (!res.ok) {
        throw new Error(`No se pudo editar el usuario ${res.status}`);
      }

      const dataEditado = await res.json();
      const nuevoEstadoUsuarios = users.map((user) =>
        user.id === usuarioEditado.id ? usuarioEditado : user
      );
      setUsers(nuevoEstadoUsuarios);
    } catch (error) {
      console.error("[editarUsuario]", error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      const urlEliminacion = `${url}/${id}`;
      const options = {
        method: "DELETE",
      };

      const res = await fetch(urlEliminacion, options);

      if (!res.ok) {
        throw new Error(`No se pudo borrar el usuario ${res.status}`);
      }

      const nuevoEstadoUsuarios = users.filter((user) => user.id !== id);
      setUsers(nuevoEstadoUsuarios);
    } catch (error) {
      console.error("[eliminarUsuario]", error);
    }
  };

  return (
    <div className="container">
      <Formulario
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <Tabla
        users={users}
        eliminarUsuario={eliminarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
  );
};

export default Usuarios;
