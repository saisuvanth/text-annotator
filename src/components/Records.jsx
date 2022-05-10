import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import './components.css'

const Records = ({ array, handleClick }) => {
	const [active, setActive] = useState(0);

	return (
		<div className='parent' id='records-parent'>
			<Container style={{ height: '100%' }}>
				<Row>
					<div className='parent-head'>
						<div className='text-center'>Records</div>
					</div>
				</Row>
				<div style={{ height: '100%', borderRight: '2px solid gray' }}>
					{
						array?.map((record, index) =>
							<Row style={{ '--bs-gutter-x': '0px' }} key={index} className={`record-row ${active === index ? 'active' : ''}`} onClick={() => { setActive(index); handleClick(index) }}>
								<div>{record?.substring(0, 28) + ' ...'}</div>
							</Row>
						)
					}
				</div>
			</Container>
		</div>
	)
}

export default Records