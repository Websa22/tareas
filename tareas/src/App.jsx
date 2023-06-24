import React, { useState } from 'react';
import './App.css';
import Formulario from './componentes/formulario';
import Tarea from './componentes/tarea';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    const tareasActualizadas = [tarea, ...tareas];
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div className="App">
      <Formulario onSubmit={agregarTarea} />
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          eliminar={eliminarTarea}
        />
      ))}
    </div>
  );
}

export default App;
