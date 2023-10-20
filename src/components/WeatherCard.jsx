import { Card, Row } from 'antd'
import React from 'react'
import { Error } from './Error'
import { weather } from '../operations/weather'

function WeatherCard({ data, error, loading }) {
  const [flatWeather] = data
  const maxTemperature = flatWeather?.hourly?.temperature_2m?.reduce(
    (acc, el) => Math.max(acc, el)
  )
  const minTemperature = flatWeather?.hourly?.temperature_2m?.reduce(
    (acc, el) => Math.min(acc, el)
  )
  const currentWeather = weather[flatWeather?.current_weather?.weathercode]
  const currentTemperature = flatWeather?.current_weather?.temperature

  if (error) return <Error message={error.message} />

  return (
    <Card loading={loading} type='inner' title='Weather'>
      <Row justify='center'>
        <span dangerouslySetInnerHTML={{ __html: currentWeather }}/>
      </Row>
      <Row justify='space-between'>
        <div>
          &#8451;
        </div>
        <span>{currentTemperature}(<strong>now</strong>)</span>
        <span style={{ color: 'red' }}>{maxTemperature}&#8593;</span>
        <span style={{ color: 'blue' }}>{minTemperature}&#8595;</span>
      </Row>
    </Card>
  )

}

export { WeatherCard }
