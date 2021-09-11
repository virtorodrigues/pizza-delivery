import {
  useState,
  createContext,
  useEffect,
  ReactNode,
  FormEvent
} from 'react';

import api from '../services/api';

type StepsType = {
  id: number;
  description: string;
  title: string;
  image_src: string;
  items: ItemsType[];
};

type ItemsType = {
  id: number;
  name: string;
};

type itemSelectedType = {
  id: number;
  activeStep: number;
  name: string;
}

type StepsContextType = {
  steps: StepsType[];
  activeStep: number;
  itemsSelected: itemSelectedType[];
  openModalFinalize: boolean;
  handleSelectItem: ({ id, activeStep, name }: itemSelectedType) => void;
  handleStepContinue: (event: FormEvent<Element>) => void;
  handleStepBack: (event: FormEvent<Element>) => void;
  closeModalFinalize: () => void;
};

type StepsContextProviderType = {
  children: ReactNode;
};

export const StepsContext = createContext({} as StepsContextType);

export function StepsContextProvider(props: StepsContextProviderType) {
  const [steps, setSteps] = useState<StepsType[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const [itemsSelected, setItemsSelected] = useState([] as itemSelectedType[]);
  const [openModalFinalize, setOpenModalFinalize] = useState(false);

  useEffect(() => {
    async function loadSteps(): Promise<void> {
      const response = await api.get('/steps');

      setSteps(response.data);
    }

    loadSteps();
  }, []);

  useEffect(() => {
    //inicialize items selected of the steps
    setItemsSelected(getInitialStateItems());

  }, [steps]);

  function getInitialStateItems() {
    const varia = steps.map((data: StepsType, index: number) => ({
      activeStep: index, ...data.items[0]
    }));

    return varia;
  }

  function handleSelectItem({ activeStep, id, name }: itemSelectedType) {

    const newItemSelected = { activeStep, id, name };

    const itemSelectedMapping = itemsSelected.map(item =>
      activeStep === item.activeStep ? newItemSelected : item,
    );

    setItemsSelected(itemSelectedMapping);
  }

  function closeModalFinalize(): void {
    setOpenModalFinalize(false);
  }

  function handleStepContinue(event: FormEvent) {
    event.preventDefault();

    if (activeStep + 1 === steps.length) {
      setOpenModalFinalize(true);
      setItemsSelected(getInitialStateItems());
      setActiveStep(0);
      return;
    }

    if (activeStep + 1 > steps.length - 1) return;

    setActiveStep(activeStep + 1);
  }

  function handleStepBack(event: FormEvent) {
    event.preventDefault();

    if (activeStep <= 0) return;

    setActiveStep(activeStep - 1);
  }

  return (
    <StepsContext.Provider value={{
      steps,
      activeStep,
      itemsSelected,
      openModalFinalize,
      handleStepContinue,
      handleStepBack,
      handleSelectItem,
      closeModalFinalize,
    }}>
      {props.children}
    </StepsContext.Provider>
  )
}
