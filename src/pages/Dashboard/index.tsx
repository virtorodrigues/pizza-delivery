import React, { FormEvent, useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';
import './styles';


type StepsType = {
  id: number;
  description: string;
  title: string;
  image_src: string;
  items: ItemsType[];
}

type ItemsType = {
  id: number;
  name: string;
}

const Dashboard: React.FC = () => {

  const [steps, setSteps] = useState<StepsType[]>([]);
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('/steps');

      setSteps(response.data);
    }

    loadFoods();
  }, []);

  function handleStepContinue(event: FormEvent) {
    event.preventDefault();
    setActiveStep(activeStep + 1);
  }

  return (
    <>
      <h1>Pizza-Delivery</h1>
      {steps.map(step => (
        step.id === activeStep && (
          <h1>{step.description}</h1>
        )
      ))}
      <main>
        <div>
          Pizza recomendada
        </div>

        <form onSubmit={handleStepContinue}>
          <img src="" alt="" title="" />
          <strong>descricao</strong>
          <ul>
            <li>
              opções
            </li>
          </ul>
          <div>
            <button type="button">Voltar</button>
            <button type="submit">Continuar</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Dashboard;