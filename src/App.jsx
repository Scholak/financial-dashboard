import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Cards from './components/Cards'
import Goals from './components/Goals'
import NewTransaction from './components/NewTransaction'
import Outcomes from './components/Outcomes'
import TransactionHistory from './components/TransactionHistory'
import './styles/style.scss'

const App = () => {
  return (
		<div className='wrapper'>
			<Sidebar />
			<main>
				<Header />
				<div className='main-content'>
					<div className='left'>
						<Cards />
						<TransactionHistory />
					</div>
					<div className='right'>
						<Goals />
						<Outcomes />
						<NewTransaction />
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
