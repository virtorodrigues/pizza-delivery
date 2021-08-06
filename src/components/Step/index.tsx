import { ListItems, Item, Container, PizzaDetail } from './styles';
import { useSteps } from '../../hooks/useSteps';
import Radiobutton from '../Radiobutton';

type StepsType = {
  description: string;
  title: string;
  image_src: string;
  items: ItemsType[];
}

type ItemsType = {
  id: number;
  name: string;
}

const Step = ({ title, description, items, image_src }: StepsType) => {
  const { handleSelectItem, itemsSelected, activeStep } = useSteps();

  const itemSelectedStep = itemsSelected.find((itemSelected) => itemSelected.activeStep === activeStep);

  return (
    <Container>
      <PizzaDetail>
        <img src={image_src} alt="" title="" />
        <div>
          <h3>{title}</h3>
          <strong>{description}</strong>
        </div>
      </PizzaDetail>
      <ListItems>
        {items.map((it: ItemsType) => (
          <Item key={it.id}>

            <Radiobutton
              id={it.name}
              name={title}
              onChange={() => handleSelectItem({ activeStep, id: it.id, name: it.name })}
              value={it.id}
              checked={itemSelectedStep?.name === it.name}
            >
              {it.name}
            </Radiobutton>

          </Item>
        ))}
      </ListItems>
    </Container>
  )
}

export { Step };

//checked={itemsSelected[activeStep] === it.id}>
//