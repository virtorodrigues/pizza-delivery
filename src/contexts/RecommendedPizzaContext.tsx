import {
  useState,
  createContext,
  useEffect,
  ReactNode,
} from 'react';

import api from '../services/api';

type BenefitType = {
  enable: boolean;
  score: number;
};

type RecommendedPizzaType = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  benefit: BenefitType;
  typeOfDough: string;
  size: string;
  edge: string;
};

type RecommendedPizzaContextType = {
  recommendedPizzas: RecommendedPizzaType[];
  handleBenefitScore: (benefit: BenefitType) => boolean;
};

type StepsContextProviderType = {
  children: ReactNode;
};

export const RecommendedPizzaContext = createContext({} as RecommendedPizzaContextType);

export function RecommendedPizzaProvider(props: StepsContextProviderType) {
  const [recommendedPizzas, setRecommendedPizzas] = useState<RecommendedPizzaType[]>([]);

  useEffect(() => {
    async function loadRecommendedPizza(): Promise<void> {
      const response = await api.get('/recommendedPizza');
      setRecommendedPizzas(response.data);
    }
    loadRecommendedPizza();
  }, []);

  function handleBenefitScore(benefit: BenefitType) {
    //implement rules
    return benefit.enable && benefit.score > 0;
  }

  return (
    <RecommendedPizzaContext.Provider value={{ recommendedPizzas, handleBenefitScore }}>
      {props.children}
    </RecommendedPizzaContext.Provider>
  )
}
