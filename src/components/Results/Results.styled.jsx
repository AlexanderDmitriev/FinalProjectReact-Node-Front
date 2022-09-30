import styled from 'styled-components';

export const Section = styled.section`
  width: 280px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  text-align: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
`;

export const DateWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  text-align: left;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  line-height: 1.18;
  color: #898f9f;

  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  margin-top: 4px;
  width: 110px;
  height: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  background-color: #f6f7fb;
  border: 1px solid #a6abb9;
`;

export const Button = styled.button`
  padding: 10px 45px 10px 43px;
  min-width: 240px;
  background-color: #ff6b08;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #ffffff;
  border: 0;

  &:hover {
    background-color: #d15807;
  }
`;
