export const fetchData = async (endPoint) => {
	try {
		const response = await fetch(
			`http://jsonplaceholder.typicode.com/${endPoint}`
		)
		const data = await response.json()
		console.log(data)
		return {
			data,
			isLoading: false,
		}
	} catch (error) {
		console.log(error)
	}
}
