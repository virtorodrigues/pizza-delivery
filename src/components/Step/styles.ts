import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-bottom: 32px;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PizzaDetail = styled.div`
  display: flex;
  flex-direction: row;

  img {
    border-radius: 50%;
    width: 104px;
    height: 104px;
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
`;

export const ListItems = styled.ul`
  width: 100%;
  margin: 40px 0 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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