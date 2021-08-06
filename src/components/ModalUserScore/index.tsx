import React from 'react';

import Modal from '../Modal';

import { Container } from './styles';

type IModalProps = {
  isOpen: boolean;
  score: number;
  closeModal: () => void;
}

const ModalUserScore: React.FC<IModalProps> = ({
  isOpen,
  closeModal,
  score
}) => {

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Container>
        <img src={'../../assets/pizza-modal.jpg'} alt="" title="" />
        <div>
          <h1>Parabénssss você acaba de receber {score} pontos!!!</h1>
          <h3>Aproveite seus pontos para trocar por pizzas, quando desejar.</h3>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalUserScore;
