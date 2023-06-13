import React from 'react'
import { FaPlus } from 'react-icons/fa'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.png'

const NewTransaction = () => {
  return (
		<div className='new-transaction-section'>
			<h3 className='section-title'>New Transaction</h3>
			<div className='users'>
				<div className='user'>
					<img src={profile1} alt='user porfile' />
					<p className='name'>Ann</p>
				</div>
				<div className='user'>
					<img src={profile2} alt='user porfile' />
					<p className='name'>Monica</p>
				</div>
				<div className='user'>
					<img src={profile3} alt='user porfile' />
					<p className='name'>John</p>
				</div>
				<div className='user'>
					<img src={profile4} alt='user porfile' />
					<p className='name'>Mike</p>
				</div>
				<div className='user'>
					<img src={profile5} alt='user porfile' />
					<p className='name'>Mia</p>
				</div>
				<div className='add-new-btn'>
					<div className='icon'>
						<FaPlus />
					</div>
					<p className='name'>Add New</p>
				</div>
			</div>
		</div>
	)
}

export default NewTransaction
