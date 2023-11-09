import { useState } from 'react'
import { AgregaTarea } from './components/AgregaTarea'

const Item = ({ nombre, visto }) => {
	return (
		<li>
			{nombre}
			{visto && ' Ok'}
		</li>
	)
}

export const ListadoApp = () => {
	// const addTask = () => {
	// 	setArreglo([...arreglo, { nombre: 'nuevo', visto: false }])
	// }
	let listadoSecciones = [
		{ id: 0, nombre: 'Instalaciones necesarias', visto: true },
		{ id: 1, nombre: 'Uso de Vite', visto: true },
		{ id: 2, nombre: 'Componentes', visto: true },
		{ id: 3, nombre: 'Variables de JSX', visto: true },
		{ id: 4, nombre: 'Props', visto: true },
		{ id: 5, nombre: 'Eventos', visto: true },
		{ id: 6, nombre: 'useState', visto: true },
		{ id: 7, nombre: 'Redux', visto: false },
		{ id: 8, nombre: 'customHooks', visto: false },
	]
	const [arreglo, setArreglo] = useState(listadoSecciones)

	const onAgregarTarea = (val) => {
		let valor = val.trim()
		if (valor < 1) return
		const envio = {
			id: arreglo.length,
			nombre: val,
			visto: false,
		}
		setArreglo([...arreglo, envio])
	}

	return (
		<>
			<h1>Listado de Temas del curso</h1>
			<AgregaTarea agregarTarea={onAgregarTarea}></AgregaTarea>
			<ol>
				{arreglo.map((item) => (
					<Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
				))}
			</ol>
			{/* <button onClick={() => addTask()}>Agregar Tarea</button> */}
		</>
	)
}
