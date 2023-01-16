import './App.css';
import React, {useState} from 'react';
import NuevaTarea from './Components/NuevaTarea';
import ListaTareas from './Components/ListaTareas';

function App() {
	const [tareas,setTareas] = useState([]);

	/*
	const [tareas,setTareas] = useState({

		descripcion: "",
		completada: false,
		eliminada: false});
	*/

  return (
    <div className="App">
			<NuevaTarea tareas={tareas} setTareas={setTareas} />
			<ListaTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
}

export default App;
