import { useEffect, useState } from 'react'

function useFetch(url) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchData()
	}, [url])

	function fetchData() {
		setLoading(true)

		fetch(url)
			.then(res => res.json())
			.then(res => {
				setData(prev => [...prev, res])
				setLoading(false)
			})
			.catch(err => setError(err))
	}

	return {
		data,
		loading,
		error,
		fetchData
	}
}

export { useFetch }
