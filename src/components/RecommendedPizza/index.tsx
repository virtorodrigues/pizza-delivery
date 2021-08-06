import React, { useState } from 'react';
import { Container, PizzaDetail, Title, Subtitle } from './styles';
import { useRecommendedPizza } from '../../hooks/useRecommendedPizza';
import ModalUserScore from '../ModalUserScore';
import { useUserScore } from '../../hooks/useUserScore';

type BenefitType = {
  enable: boolean;
  score: number;
}

type RecommendedPizzaType = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  benefit: BenefitType;
}

const RecommendedPizza: React.FC = () => {
  const { recommendedPizzas, handleBenefitScore } = useRecommendedPizza();
  const { updateScore } = useUserScore();

  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  async function closeModal(): Promise<void> {
    await setModalOpen(!modalOpen);
    setScore(0);
  }

  function handleGainUserScore(benefit: BenefitType): void {
    const hasBenefit = handleBenefitScore(benefit);

    if (hasBenefit) {
      updateScore(benefit.score);
      setScore(benefit.score);
      setModalOpen(true);
    }
  }

  return (
    recommendedPizzas.length ? (
      <>
        <ModalUserScore isOpen={modalOpen} closeModal={closeModal} score={score} />
        <Container>
          <Title>Recomendações do dia</Title>
          <Subtitle>Descontos especiais para as pizzas selecionadas abaixo</Subtitle>
          <ul>
            {recommendedPizzas.map((pizza: RecommendedPizzaType) => (
              <PizzaDetail key={pizza.id} onClick={() => handleGainUserScore(pizza.benefit)}>
                <img src={pizza.image_url} alt="" title="" />
                <div>
                  <h3>{pizza.title}</h3>
                  <strong>{pizza.description}</strong>
                </div>
              </PizzaDetail>
            ))}
          </ul>
        </Container>
      </>
    ) : (<></>)
  )
}

export default RecommendedPizza;
