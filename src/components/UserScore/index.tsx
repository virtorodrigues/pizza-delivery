import { Container, Score, Title, Subtitle } from './styles';
import { useUserScore } from '../../hooks/useUserScore';

const UserScore = () => {
  const { userScore } = useUserScore();

  return (
    <>
      <Container>
        <Title>Sua pontuação até agora</Title>
        <Subtitle>Você pode trocar seus pontos por pizzas!</Subtitle>
        <Score>Pontuação: <b>{userScore.score}</b></Score>
      </Container>
    </>
  )
}

export default UserScore;
