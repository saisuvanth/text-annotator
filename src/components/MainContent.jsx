import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import './components.css'


const MainContent = ({ record, annotList = [] }) => {
	const [activeType, setActiveType] = useState('person')
	const [annotType, setAnnotType] = useState([]);
	const [annotText, setAnnotText] = useState([]);

	useEffect(() => {
		console.log(annotList);
		const annot = annotList?.filter(ann => ann.type === activeType)
		setAnnotType(annot.map(ann => ann.type));
		setAnnotText(annot.map(ann => ann.text));
	}, [annotList, record, activeType]);

	return (
		<div className='parent' id='main-parent'>
			<h2 className='parent-head pl-3'>
				<span className={`badge my-badge ${activeType === 'person' ? 'active' : ''}`} onClick={() => setActiveType('person')}>People
					<span id='people-num'>{annotList.filter(ann => ann.type === 'person').length}</span>
				</span>
				<span className={`badge my-badge ${activeType === 'org' ? 'active' : ''}`} onClick={() => setActiveType('org')}>Org
					<span id='org-num'>{annotList.filter(ann => ann.type === 'org').length}</span>
				</span>
			</h2>
			<div className='main-content'>
				{record?.split(' ').map((word, index) => {
					if (annotText?.includes(word)) {
						return <span key={index} className='annot-word'>{word[0].toUpperCase() + word.substring(1, word.length) + ' '}
							<span className='annot-type'>{activeType + ' '}</span>
						</span>
					} else return word + ' ';
				})}
			</div>
		</div>
	)
}

export default MainContent