import PropTypes from 'prop-types'

export const PrimerComponente = ({
	titulo,
	subtitulo = 'Props Universitas Section',
}) => {
	// console.log(titulo)
	// console.log(subtitulo)
	return (
		<>
			<h1>{titulo}</h1>
			<h2>{subtitulo}</h2>
		</>
	)
}

PrimerComponente.PropTypes = {
	titulo: PropTypes.string.isRequired,
	subtitulo: PropTypes.number.isRequired,
}

PrimerComponente.defaultProps = {
	titulo: 'Design Studio',
	subtitulo: 'Sección Props Universitas',
}
