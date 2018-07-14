import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';

class MyModal extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen}>
                    <ModalHeader>
                        {this.props.modalHeader}
                    </ModalHeader>
                    <ModalBody>
                        {this.props.modalBody}
                    </ModalBody>
                    <ModalFooter>
                        <Button className='center-input' type='button' color='info' onClick={this.props.toggleModal}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default MyModal;

