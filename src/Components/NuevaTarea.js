import React from 'react';

const NuevaTarea = props => {
	const { tareas, setTareas } = props;

	const submitTarea = e => {
		e.preventDefault();
		const nuevatarea = e.target.children.nuevatarea.value;
		const nuevoitem = {
			id: tareas.length,
			descripcion: nuevatarea,
			completada: false,
			eliminada: false};
		const tareasUpdated = [
			...tareas,
			nuevoitem
		];
		setTareas(tareasUpdated);
	}

	return (
		<form onSubmit={submitTarea}>
			<input type="text" name="nuevatarea"/>
			<input type="submit" value="Agregar tarea"/>
		</form>
	);
}

export default NuevaTarea;

