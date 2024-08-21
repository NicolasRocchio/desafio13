import Swal from "sweetalert2";

export const notificacionSweet = (nombre, cb) => {

    Swal.fire({
        title: `¿Estás seguro de que queres eliminar el producto: ${nombre}`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, adelante!",
        cancelButtonText: "Noooooo!",
      }).then((result) => {
        if (result.isConfirmed) {
          cb()
          Swal.fire({
            title: "Lo borré!!!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}

