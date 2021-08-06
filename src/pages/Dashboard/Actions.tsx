import React from 'react';
import { useSteps } from '../../hooks/useSteps';
import { FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { ButtonFinalize, ButtonBack, ButtonContinue, ActionsStyled, ButtonContainer } from './styles';

const Actions: React.FC = () => {

  const { steps, activeStep, handleStepBack } = useSteps();
  const showButtonBack = activeStep > 0;
  const showButtonContinue = activeStep < steps.length - 1;
  const showButtonFinalize = !showButtonContinue;

  return (
    <ActionsStyled>
      {showButtonBack && <ButtonBack type="button" onClick={handleStepBack}>
        <ButtonContainer>
          <FiArrowLeft size={24} />
          <div>
            Voltar
          </div>
        </ButtonContainer>
      </ButtonBack>}
      {showButtonContinue && <ButtonContinue type="submit">
        <ButtonContainer>
          Avançar
          <div>
            <FiArrowRight size={24} />
          </div>
        </ButtonContainer>
      </ButtonContinue>}
      {showButtonFinalize && <ButtonFinalize type="submit">
        <ButtonContainer>
          Finalizar
          <div>
            <FiCheck size={24} />
          </div>
        </ButtonContainer>
      </ButtonFinalize>}
    </ActionsStyled>
  )
}

export default Actions;
