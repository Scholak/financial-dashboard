import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import profile from '../assets/profile.png'

const Header = () => {
  return (
		<div className='header'>
			<div className='left'>
				<h2 className='title'>Weekly sumup</h2>
				<h3 className='sub-title'>
					Get summary of your weekly online transactions here.
				</h3>
			</div>
			<div className='right'>
				<FaRegEnvelope />
				<FaBell />
				<div className='profile'>
					<img src={profile} alt='profile' />
					<div className='account'>
						<span>Andrew</span>
						<span>Admin account</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
