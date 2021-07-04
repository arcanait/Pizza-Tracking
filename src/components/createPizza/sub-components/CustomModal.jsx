import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { InputForm } from './InputForm';
import PropTypes from 'prop-types';
/** Componentes */

/**
 *  
 * @param {boolean} modalIsOpen bandera para mostrar u ocultar el modal
 * @param {function} toggle función para controlar la bandera modalIsOpen
 * @param {function} submit callback que envía los datos y los guarda en el local storage
 * @returns Modal con inputs y botón para guardar una venta de pizza
 */
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
                            <InputForm
                                keyInput={'nameBuyer'} 
                                value={nameBuyer} 
                                id={'nameBuyer'}
                                label={'Nombre:'}
                                placeHolder={'Nombre del comprador'}
                                className={'form-control input-name-modal'}
                                callback={handleInputChange}
                            />
                        </Col>
                        <Col md={12}>
                            <InputForm
                                id={'phoneBuyer'}
                                label={'Teléfono:'}
                                placeHolder={'000-0000-00-00'}
                                className={'form-control input-name-modal'}
                                value={phoneBuyer} 
                                callback={handleInputChange}
                            />
                        </Col>
                    </Row>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button className="btn-cancel-modal" onClick={toggle}>Cancelar</Button>
                <Button 
                    className="btn-submit-modal" 
                    disabled={nameBuyer.trim() === '' || phoneBuyer.trim() === ''} 
                    onClick={() => { submit(nameBuyer, phoneBuyer) }}>
                        Enviar
                </Button>
            </ModalFooter>
        </Modal>
    )
}

CustomModal.prototype = {
    modalIsOpen: PropTypes.bool,
    toggle: PropTypes.func,
    submit: PropTypes.func
}

