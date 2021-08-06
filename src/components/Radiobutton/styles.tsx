import styled from 'styled-components';

export const Styled = styled.div`
 
  cursor: pointer;
  display: flex;
  align-items: center;

  label {
    color: #737380;
    font-size: 24px;
    margin-left: 8px;
    cursor: pointer;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background: #ebebf0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:after {
      content: '';
      display: none;
      width: 12px;
      height: 12px;
      background: #fff;
      border-radius: 50%;
    }

    &:checked {
      background: #F24F00;
      transition: 0.2s;
      border-radius: 50%;

      &:after {
        display: block;
      }
    }
  }
`;
