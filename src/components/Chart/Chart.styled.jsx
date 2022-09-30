import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    background: #FFFFFF;
    aline-items: center;
    padding: 110px 37px 81px 37px;

    @media screen and (min-width: 768px) {
    padding: 75px 80px 50px 80px;
  }

  @media screen and (min-width: 1280px) {
    padding: 74px 77px 51px 40px;
    margin-left: 16px;
  }
`

export const TitleWrapper = styled.div`
    position: absolute;
    top: 25px;
    left: 37px;
    display: flex;
    align-items: center;

    @media screen and (min-width: 768px) {
    top: 35px;
    left: 80px;
  }

  @media screen and (min-width: 1280px) {
    left: 40px;
  }
`
export const CounterTitle = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #242A37;
    margin-right: 8px;
`
export const Counter = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    color: #242A37;
    background: #F5F7FA
`