import React from 'react';

const ListaTareas = props => {
	const { tareas, setTareas } = props;
	//console.log(tareas);

	const clickEliminarTarea = (e,id) => {
		const tareasUpdated = [...tareas]; //Object.assign({},tareas);
		tareasUpdated[id].eliminada = true; //switch

		setTareas(tareasUpdated);
		console.log("tareasUpdated = ", tareasUpdated);
	}

	const clickCheck = (e,id) => {
		const tareasUpdated = [...tareas];
		tareasUpdated[id].completada = !tareasUpdated[id].completada;

		setTareas(tareasUpdated);
	}

	return (
		<ul>
			{
					tareas.filter( (item) => !item.eliminada)
						.map( (item) =>
							{ return (
									<li key={item.id}
											style={item.completada ?
															{textDecoration:"line-through"} :
															{}
														}>
										{item.descripcion}
										<input
											type="checkbox"
											checked={item.completado}
											onChange={e => clickCheck(e,item.id)}/>
										<button 
											onClick={e => clickEliminarTarea(e,item.id)}>
											Eliminar
										</button>
									</li>
							)})
				}
		</ul>
	);
}

export default ListaTareas;
