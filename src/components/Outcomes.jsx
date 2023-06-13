import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa'
import { FaPlane } from 'react-icons/fa'

const Outcomes = () => {
  return (
		<div className='outcomes-section'>
			<h3 className='section-title'>Outcome Statistics</h3>
			<div className='statistics'>
				<div className='statistic'>
					<div className='icon'>
						<FaShoppingCart />
					</div>
					<div className='bar-section'>
						<div className='bar'></div>
						<div className='text'>Shoppping</div>
					</div>
					<div className='percentage'>52%</div>
				</div>
				<div className='statistic'>
					<div className='icon'>
						<FaTruck />
					</div>
					<div className='bar-section'>
						<div className='bar'></div>
						<div className='text'>Electronics</div>
					</div>
					<div className='percentage'>21%</div>
				</div>
				<div className='statistic'>
					<div className='icon'>
						<FaPlane />
					</div>
					<div className='bar-section'>
						<div className='bar'></div>
						<div className='text'>Travels</div>
					</div>
					<div className='percentage'>74%</div>
				</div>
			</div>
		</div>
	)
}

export default Outcomes
