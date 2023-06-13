import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const Cards = () => {
	const handleActivateCard = e => {
		e.target.classList.toggle('active')
	}

  return (
		<div className='cards-section'>
			<h3 className='section-title'>Cards</h3>
			<div className='content'>
				<div className='left'>
					<div className='card'>
						<FaChevronLeft />
						<FaChevronRight />
						<div className='account-info'>
							<p className='name'>cloudcash</p>
							<p className='type'>PREMIUM ACCOUNT</p>
						</div>
						<div className='card-number'>
							<span>5789</span>
							<span>****</span>
							<span>****</span>
							<span>2847</span>
						</div>
						<div className='lower-section'>
							<div className='user-info'>
								<p>Card holder</p>
								<p>Mike Smith</p>
							</div>
							<div className='expire-date'>
								<p>Expire date</p>
								<p>06/21</p>
							</div>
						</div>
					</div>
					<div className='payment-limit'>
						<div className='bar'></div>
						<div className='text'>
							<span>Weekly payment limit</span>
							<span>$350.60 / $4000</span>
						</div>
					</div>
				</div>
				<div className='right'>
					<div className='balance'>
						<p className='amount'>
							<span>$</span> 2850.75
						</p>
						<p className='text'>Current balance</p>
					</div>
					<div className='income'>
						<p className='amount'>$ 1500.50</p>
						<p className='text'>Income</p>
					</div>
					<div className='outcome'>
						<p className='amount'>$ 350.60</p>
						<p className='text'>Outcome</p>
					</div>
					<div className='activate'>
						<button className='button' onClick={handleActivateCard}></button>
						<p className='text'>Deacivate card</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
