import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as bootstrap from "bootstrap";

import "./index.css";
import Productos from "./Productos";
import NoEncontrado from "./pages/NoEncontrado";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Navbar from "./components/Navbar";
import DetalleProducto from "./pages/DetalleProducto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Navbar */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  </BrowserRouter>
);
