import React from 'react'
import { AppRouter } from './components/AppRouter'
import { HashRouter } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<HashRouter>
			<AppRouter />
		</HashRouter>
	)
}

export { App }
