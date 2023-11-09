// import './styles/PrimerComponente.css'

const string = 'Esto es un Estudio de Diseño'
const number = 123456
const array = ['Studio', 'Design', 4, 2]
const boolean = true
const funcion = () => 'Studio'
const objeto = { nombre: 'Design Studio', income: 2 }
const fecha = new Date()

export const PrimerComponente = () => {
	// return <p>{JSON.stringify(objeto)}</p>
	return (
		<>
			<h1>Variables en JSX</h1>
			<h4>Variable tipo String:</h4> <p>{string}</p>
			<h4>Variable tipo number:</h4> <p>{number}</p>
			<h4>Variable tipo array:</h4> <p>{array}</p>
			<h4>Variable tipo boolean:</h4> <p>{boolean}</p>
			<h4>Variable tipo función:</h4> <p>{funcion()}</p>
		</>
	)
}
