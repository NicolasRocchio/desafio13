import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";

const DetalleUsuario = () => {
  const [usuario, setUsuario] = useState(null);

  // Obtén los parámetros pasados como parte de la URL usando el Hook useParams
  const { id } = useParams();

  useEffect(() => {
    getOneUsuario();
  }, []);

  const getOneUsuario = async () => {
    const url = import.meta.env.VITE_API_USUARIOS;

    try {
      const urlPeticion = url + id;

      const res = await fetch(urlPeticion);

      if (!res.ok) {
        throw new Error("No se pudo obtener el usuario");
      }

      const data = await res.json();

      setUsuario(data);
    } catch (error) {
      console.error("[getOneUsuario]", error);
    }
  };

  return <>{usuario ? <h1>{usuario.nombre}</h1> : <Spinner />}</>;
};

export default DetalleUsuario;
