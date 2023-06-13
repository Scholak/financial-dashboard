import React from 'react'
import { FaPlus } from 'react-icons/fa'
import mountain from '../assets/mountain.png'
import color from '../assets/color.png'
import console from '../assets/console.png'

const Goals = () => {
  return (
		<div className='goals-section'>
			<h3 className='section-title goals-section-title'>
				Goals
				<div className='icon'>
					<FaPlus />
				</div>
			</h3>
			<div className='content'>
				<div className='card'>
					<div className='upper'>
						<p className='price'>$550</p>
						<p className='date'>12/20/20</p>
					</div>
					<div className='lower'>
						<img src={mountain} alt='mountain' />
						<p>Holidays</p>
					</div>
				</div>
				<div className='card'>
					<div className='upper'>
						<p className='price'>$200</p>
						<p className='date'>12/20/20</p>
					</div>
					<div className='lower'>
						<img src={color} alt='color' />
						<p>Renovation</p>
					</div>
				</div>
				<div className='card'>
					<div className='upper'>
						<p className='price'>$820</p>
						<p className='date'>12/20/20</p>
					</div>
					<div className='lower'>
						<img src={console} alt='console' />
						<p>Xbox</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Goals
