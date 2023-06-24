import React from 'react';
import '../estilos/tarea.css';

function Tarea({ texto, id, eliminar }) {
  return (
    <div className="tarea">
      <p>{texto}</p>
      <div className="eliminar">
        <span onClick={() => eliminar(id)}>X</span>
      </div>
    </div>
  );
}

export default Tarea;
