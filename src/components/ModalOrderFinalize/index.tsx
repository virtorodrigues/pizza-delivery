import React from 'react';

import Modal from '../Modal';

import { Container } from './styles';

type IModalProps = {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalOrderFinalize: React.FC<IModalProps> = ({
  isOpen,
  closeModal,
}) => {

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Container>
        <img src={'../../assets/clipboard.png'} alt="" title="" />
        <div>
          <h1>Já mandamos seu pedido pra cozinha!!!</h1>
          <h3>Sua pizza chegará quentinha até você!</h3>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalOrderFinalize;
