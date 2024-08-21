import TablaFila from "./TablaFila";

const Tabla = ({ users, eliminarUsuario, setUsuarioAEditar }) => {
  return (
    <>
      <h2>Tabla de usuarios</h2>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Color Favorito</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, idx) => (
              <TablaFila
                key={idx}
                user={user}
                eliminarUsuario={eliminarUsuario}
                setUsuarioAEditar={setUsuarioAEditar}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
