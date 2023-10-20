import React, { useEffect, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'
import { UserCard } from '../components/UserCard'
import { Button, Row } from 'antd'
import { Error } from '../components/Error'
import { Spinner } from '../components/Spinner'


function UsersList() {
	const url = 'https://randomuser.me/api/?results=4'
	const { data, loading, error, fetchData } = useFetch(url)
	const viewEndRef = useRef(null)

	useEffect(() => {
		viewEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [data])

	if (loading) return	<Spinner/>

	if (error) return <Error message={error.message}/>

	return (
		<>

			<Row justify='center' style={{ rowGap: '3%', columnGap: '3%' }}>
				{
					data
						.flatMap(({ results }) => results)
						.map(({ name, location, gender, email, picture }, i) =>
							<UserCard
								name={name}
								gender={gender}
								email={email}
								avatar={picture}
								location={location}
								key={i}
							/>
						)
				}
			</Row>

			<Row justify='center'>
				<Button style={{ backgroundColor: 'teal', color: 'white', marginTop: '5px' }} onClick={fetchData}>Load more</Button>
			</Row>

			<div ref={viewEndRef}/>
		</>
	)
}

export { UsersList }
