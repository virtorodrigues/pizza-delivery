import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;

  margin-bottom: 8px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  color: #3A3A3A;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const Container = styled.main`
  max-width: 960px;
  width: 100vh;
  
  margin-bottom: 64px;

  color: #3A3A3A;
`;

export const Form = styled.form`

  background: white;
  padding: 48px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  button {
    & + button {
      margin-left: 16px;
    }

    height: 50px;
    width: 150px;
    
    font-weight: bold;

    border-radius: 40px;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

export const ActionsStyled = styled.div`
  position: relative;
  height: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-left: 8px;
  }
`;

export const ButtonBack = styled.button`
  background: #FFF;
  border: 1px solid #FFF;
  transition: border 0.2s; 
  color: #3A3A3A;
  
  bottom: 0;
  left: 0;
  position: absolute;

  &:hover {
    border: 1px solid #3A3A3A;
  }
`;

export const ButtonContinue = styled.button`
  background: #04D361;
  color: #fff;
  border: 0;
  transition: background-color 0.2s; 

  bottom: 0;
  right: 0;
  position: absolute;

  &:hover {
    background: ${shade(0.2, '#04D361')}
  }
`;

export const ButtonFinalize = styled.button`
  background: #F24F00;
  color: #fff;
  border: 0;
  transition: background-color 0.2s; 

  bottom: 0;
  right: 0;
  position: absolute;

  &:hover {
    background: ${shade(0.2, '#F24F00')}
  }
`