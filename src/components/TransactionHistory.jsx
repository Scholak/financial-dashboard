import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa'
import { FaPenNib } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'

const tableData = [
	{
		id: 1,
		Icon: FaShoppingCart,
		text: 'Tesco Market',
		type: 'Shopping',
		date: '13 Dec 2020',
		amount: '$75.67',
	},
	{
		id: 2,
		Icon: FaTruck,
		text: 'ElectroMen Market',
		type: 'Shopping',
		date: '14 Dec 2020',
		amount: '$250.00',
	},
	{
		id: 3,
		Icon: FaPenNib,
		text: 'Fiorgio Restaurant',
		type: 'Food',
		date: '07 Dec 2020',
		amount: '$19.50',
	},
	{
		id: 4,
		Icon: FaUserAlt,
		text: 'John Mathew Kayne',
		type: 'Sport',
		date: '06 Dec 2020',
		amount: '$350',
	},
	{
		id: 5,
		Icon: FaUserAlt,
		text: 'Ann Marlin',
		type: 'Shopping',
		date: '31 Nov 2020',
		amount: '$430',
	},
]

const TransactionHistory = () => {
  return (
		<div className='transaction-history-section'>
			<h3 className='section-title'>Transaction History</h3>
			<table className='table'>
				<thead>
					<tr>
						<th>Reciever</th>
						<th>Type</th>
						<th>Date</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map(({ id, Icon, text, type, date, amount }) => (
						<tr key={id} className='row'>
							<td>
								<Icon />
								{text}
							</td>
							<td>{type}</td>
							<td>{date}</td>
							<td>{amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TransactionHistory
