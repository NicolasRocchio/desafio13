import { Link } from "react-router-dom";
import { notificacionSweet } from "./TablaFila.service";

const TablaFila = ({ user, eliminarUsuario, setUsuarioAEditar }) => {
  const handleEliminar = () => {
    notificacionSweet(user.nombre, () => {
      eliminarUsuario(user.id);
    });
  };

  const handleEditar = (usuario) => {
    setUsuarioAEditar(usuario);
  };

  return (
    <tr>
      <th scope="row">{user.nombre}</th>
      <td>{user.apellido}</td>
      <td>{user.edad}</td>
      <td>{user.color}</td>
      <td>
        <Link
          className="btn btn-info me-2"
          to={`/detalle-usuario/${user.id}`}
          onClick={() => console.log(user)}
        >
          Ver
        </Link>
        <button
          className="btn btn-warning me-2"
          onClick={() => handleEditar(user)}
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleEliminar}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
