import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { capitalize } from '../operations/capitalize'
import { UserButtons } from './UserButtons'
import { WeatherCard } from './WeatherCard'
import { useFetch } from '../hooks/useFetch'

function UserCard(props) {
	const {
		name,
		avatar,
		location,
		gender,
		email
	} = props
	const { coordinates: { latitude, longitude }, city } = location
	const { thumbnail } = avatar
	const { first, last } = name
	const fullName = `${first} ${last}`
	const infoForMapping = {
		gender,
		email,
		city
	}
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`
	const { data, loading, error } = useFetch(url)

	return (
		<Card
			headStyle={{ backgroundColor: 'lightblue' }}
			title={fullName}
			style={{ marginTop: '0.5rem' }}
		>

			<Meta avatar={<Avatar src={thumbnail} />} />
			{
				Object
					.entries(infoForMapping)
					.map(([key, value]) =>
						<Card
							type='inner'
							title={capitalize(key)}
							key={key}>{value}
						</Card>
					)
			}
			<WeatherCard data={data} loading={loading} error={error}/>
			<UserButtons user={props} weather={data}/>

		</Card>
	)

}

export { UserCard }
