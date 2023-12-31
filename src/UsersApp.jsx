import { useState } from 'react'
import { UserList } from './components/userList'

export const UsersApp = () => {
	const [endPoint, setEndPoint] = useState('users')
	const handleFetch = () => {
		setEndPoint('comments')
	}

	return (
		<>
			<h1>Cmrs List: </h1>
			<UserList endPoint={endPoint}></UserList>
			<button onClick={handleFetch}>Here the API Cmrs cases are called</button>
		</>
	)
}
