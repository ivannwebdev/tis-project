import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { routes } from '../router'

function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				{
					routes
						.map(route => <Route {...route} key={route.path}/>)
				}
			</Route>
		</Routes>
	)
}

export { AppRouter }
