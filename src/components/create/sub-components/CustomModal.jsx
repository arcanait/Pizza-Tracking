import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

export const CustomModal = ({modalIsOpen, toggle, submit}) => {

    const [nameBuyer, setNameBuyer] = useState('')
    const [phoneBuyer, setPhoneBuyer] = useState('')

    const handleInputChange = (e) => {
        if (e.target.id === 'nameBuyer') {
            setNameBuyer(e.target.value)
        } else if (e.target.id === 'phoneBuyer') {
            setPhoneBuyer(e.target.value)
        }
    }

    return (
        <Modal isOpen={modalIsOpen} toggle={toggle} size={'lg'}>
            <ModalHeader>Información del comprador</ModalHeader>
            <ModalBody>
                <form>
                    <Row>
                        <Col md={12}>
                            <label htmlFor="nameBuyer">Nombre:</label>
                            <input 
                                type="text" 
                                id="nameBuyer"
                                placeholder="Nombre del comprador"
                                className="form-control input-name-modal"
                                name="nameBuyer"
                                autoComplete="off"
                                value={nameBuyer}
                                onChange={ handleInputChange }
                            />
                        </Col>
                        <Col md={12}>
                            <label htmlFor="phoneBuyer">Teléfono:</label>
                            <input 
                                type="text" 
                                id="phoneBuyer"
                                placeholder="000-0000-00-00"
                                className="form-control input-name-modal"
                                name="phoneBuyer"
                                autoComplete="off"
                                value={phoneBuyer}
                                onChange={ handleInputChange }
                            />
                        </Col>
                    </Row>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button className="btn-cancel-modal" onClick={toggle}>Cancelar</Button>
                <Button className="btn-submit-modal" onClick={() => { submit(nameBuyer, phoneBuyer) }}>Enviar</Button>
            </ModalFooter>
        </Modal>
    )
}
