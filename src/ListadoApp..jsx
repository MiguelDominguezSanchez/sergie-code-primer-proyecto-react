import { useState } from 'react'

const Item = ({ nombre, visto }) => {
	return (
		<li>
			{nombre}
			{visto && ' Ok'}
		</li>
	)
}
export const ListadoApp = () => {
	let listadoSecciones = [
		{ nombre: 'Instalaciones necesarias', visto: true },
		{ nombre: 'Uso de Vite', visto: true },
		{ nombre: 'Componentes', visto: true },
		{ nombre: 'Variables de JSX', visto: true },
		{ nombre: 'Props', visto: true },
		{ nombre: 'Eventos', visto: true },
		{ nombre: 'useState', visto: true },
		{ nombre: 'Redux', visto: false },
		{ nombre: 'customHooks', visto: false },
	]
	const [arreglo, setArreglo] = useState(listadoSecciones)

	console.log(arreglo)
	return (
		<>
			<h1>Listado de Temas del curso</h1>
			<ol>
				{arreglo.map((item) => (
					<Item
						key={item.nombre}
						nombre={item.nombre}
						visto={item.visto}
					></Item>
				))}
			</ol>
		</>
	)
}
