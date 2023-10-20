import { Row } from 'antd'
import React from 'react'
import { weather as weatherMapping } from '../operations/weather'

function ModalInfo({ weather }) {
	const [flatWeather] = weather
	const maxTemperature = flatWeather?.hourly?.temperature_2m?.reduce(
		(acc, el) => Math.max(acc, el)
	)
	const minTemperature = flatWeather?.hourly?.temperature_2m?.reduce(
		(acc, el) => Math.min(acc, el)
	)
	const currentWeather = weatherMapping[flatWeather?.current_weather?.weathercode]
	const currentTemperature = flatWeather?.current_weather?.temperature
	const elevation = flatWeather?.elevation
	const windspeed = flatWeather?.current_weather?.windspeed

	return (
		<>
			<Row justify='space-between'>
				<p>Weather right now</p>
				<span
					style={{ fontSize: 18 }}
					dangerouslySetInnerHTML={{ __html: currentWeather }}
				/>
			</Row>
			<Row justify='space-between'>
				<p>Temperature right now</p>
				<span>{currentTemperature}</span>
			</Row>
			<Row justify='space-between'>
				<p>Maximum day temperature</p>
				<p style={{ color: 'red' }}>{maxTemperature}</p>
			</Row>
			<Row justify='space-between'>
				<p>Maximum day temperature</p>
				<p style={{ color: 'blue' }}>{minTemperature}</p>
			</Row>
			<Row justify='space-between'>
				<p>Elevation</p>
				<p>{elevation}</p>
			</Row>
			<Row justify='space-between'>
				<p>Wind speed</p>
				<p>{windspeed}</p>
			</Row>
		</>
	)
}

export { ModalInfo }
