import React from 'react'
import ReactDOM from 'react-dom/client'
// import { PrimerComponente } from './PrimerComponente'
// import { ContadorApp } from './ContadorApp'
import './styles.css'
import { ListadoApp } from './ListadoApp.'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <PrimerComponente
			titulo='Esta sección es de Props de Studio'
			subtitulo={123}
		/> */}
		{/* <ContadorApp value={0} /> */}

		<ListadoApp />
	</React.StrictMode>
)
