import React, { useRef } from 'react'
import { FaChartLine } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { FaRegFile } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'
import { FaRegSun } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Sidebar = () => {
	const sidebarEl = useRef()

	const menuEl = useRef()

	const handleToggle = e => {
		sidebarEl.current.classList.toggle('active')
		menuEl.current.classList.toggle('active')
	}

  return (
		<>
			<nav className='sidebar' ref={sidebarEl}>
				<div className='logo'>
					<img src={logo} alt='logo' />
				</div>
				<ul className='side-links'>
					<li>
						<a className='active'>
							<FaChartLine />
							Overview
						</a>
					</li>
					<li>
						<a>
							<FaListUl />
							Transactions
						</a>
					</li>
					<li>
						<a>
							<FaCreditCard />
							Cards
						</a>
					</li>
					<li>
						<a>
							<FaRegFile />
							Invoices
						</a>
					</li>
					<li>
						<a>
							<FaAward />
							Goals
						</a>
					</li>
					<li>
						<a>
							<FaRegSun />
							Settings
						</a>
					</li>
				</ul>
				<button className='premium-button'>
					Upgrade to premium
					<FaArrowUp />
				</button>
			</nav>
			<div className='toggle' onClick={handleToggle} ref={menuEl}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

export default Sidebar
