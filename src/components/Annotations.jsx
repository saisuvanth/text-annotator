import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './components.css'


const Annotations = ({ annots, setAnnots }) => {
	const [show, setShow] = useState(false);
	const [type, setType] = useState('');
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleClick = (index) => {
		setAnnots(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
		localStorage.setItem('annotations', JSON.stringify([...annots.slice(0, index), ...annots.slice(index + 1)]));
	}

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		const newAnnot = {
			type: type,
			text: data.get('text')
		}
		console.log(newAnnot);
		setAnnots(prev => [...prev, newAnnot]);
		localStorage.setItem('annotations', JSON.stringify([...annots, newAnnot]));
	}
	return (
		<div className='parent' id='annot-parent'>
			<h2 className='parent-head p-4'>
				Annotations
				<div className='add-annot' onClick={handleShow}>
					+
				</div>
			</h2>
			<div style={{ height: '100%', borderRight: '2px solid gray' }}>
				{
					annots?.map((record, index) =>
						<Row style={{ '--bs-gutter-x': '0px' }} key={index} className='annot-row'>
							<Col className='annot-text'>{record.text}</Col>
							<Col className='annot-type'>{record.type}</Col>
							<Col className='remove' onClick={() => handleClick(index)}>X</Col>
						</Row>
					)
				}
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Annotation</Modal.Title>
				</Modal.Header>
				<Form onSubmit={(event) => handleSubmit(event)}>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Annotation</Form.Label>
							<Form.Control type="text" name='text' placeholder="Enter Annot" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Type</Form.Label>
							<Form.Check type='radio' name='type' label='Person' onClick={() => setType('person')} />
							<Form.Check type='radio' name='type' label='Org' onClick={() => setType('org')} />
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	)
}

export default Annotations