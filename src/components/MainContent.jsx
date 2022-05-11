import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import './components.css'


const MainContent = ({ record, annotList = [], setAnnotList }) => {
	const [activeType, setActiveType] = useState('person')
	const [annotType, setAnnotType] = useState([]);
	const [annotText, setAnnotText] = useState([]);
	let flag = 0;

	useEffect(() => {
		flag = 0;
		const annot = annotList?.filter(ann => ann.type === activeType)
		setAnnotType(annot.map(ann => ann.type));
		setAnnotText(annot.map(ann => ann.text));
	}, [annotList, record, activeType]);

	const handleSelect = (event) => {
		const selectWord = getSelectedText();
		if (selectWord) {
			setAnnotList(prev => [...prev, { type: activeType, text: selectWord }]);
			localStorage.setItem('annotations', JSON.stringify([...annotList, { type: activeType, text: selectWord }]));
		}
	}

	function getSelectedText() {
		if (window.getSelection) {
			return window.getSelection().toString();
		} else if (document.selection) {
			return document.selection.createRange().text;
		}
		return '';
	}
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
			<div className='main-content' onMouseUp={(event) => handleSelect(event)}>
				{record?.map((word, index) => {
					if (annotText?.includes(word)) {
						return <span key={index} className='annot-word'>{word[0].toUpperCase() + word.substring(1, word.length) + ' '}
							<span className='annot-type'>{activeType + ' '}</span>
						</span>
					} else if (annotText?.find(ann => ann.split(' ').includes(word))) {
						if (flag) {
							const temp = record.slice(flag, index + 1).join(' ')
							if (annotText.includes(temp)) {
								return <span key={index} className='annot-word'>{temp}
									<span className='annot-type'>{activeType + ' '}</span>
								</span>
							} else if (annotText?.find(ann => ann.includes(temp))) {
								return '';
							}
							else if (index !== flag + 1) {
								flag = index;
								return '';
							}
						} else {
							flag = index;
							return word + ' ';
						}
						return word + ' ';
					}
					else return word + ' ';
				})}
			</div>
		</div>
	)
}

export default MainContent