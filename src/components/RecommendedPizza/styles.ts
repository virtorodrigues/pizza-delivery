import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vh;
  color: #3A3A3A;
`;

export const PizzaDetail = styled.li`

  + li {
    margin-top: 8px;
  }

  cursor: pointer;

  display: flex;
  flex-direction: row;
  width: 100vh;

  padding: 32px;
  border-radius: 20px;
  background-color: white;

  img {
    border-radius: 50%;
    width: 72px;
    height: 72px;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 8px;
    }

    strong {
      font-size: 16px;
      font-weight: 500;
    }
  }

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }
`;

export const Items = styled.ul`
  width: 100%;
  margin: 40px 0 64px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  & + li {
    margin-left: 24px;
  }
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;