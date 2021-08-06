import React from 'react';

import { useSteps } from '../../hooks/useSteps';

import { Step } from '../../components/Step';
import Actions from './Actions';

import { Title, Form, Container, Subtitle } from './styles';
import RecommendedPizza from '../../components/RecommendedPizza';
import UserScore from '../../components/UserScore';
import ModalOrderFinalize from '../../components/ModalOrderFinalize';

const Dashboard: React.FC = () => {

  const {
    steps,
    activeStep,
    handleStepContinue,
    closeModalFinalize,
    openModalFinalize
  } = useSteps();

  return (
    <div>
      <UserScore />
      <Container>
        <ModalOrderFinalize closeModal={closeModalFinalize} isOpen={openModalFinalize} />
        <Title>Pizza-Delivery</Title>
        <Subtitle>Monte sua pizza como desejar:</Subtitle>
        <Form onSubmit={handleStepContinue}>

          {steps.length ? (
            <Step
              description={steps[activeStep].description}
              items={steps[activeStep].items}
              title={steps[activeStep].title}
              image_src={steps[activeStep].image_src}
            />
          ) : <></>}

          <Actions />

        </Form>
      </Container>

      <RecommendedPizza />
    </div>
  )
}

export default Dashboard;
