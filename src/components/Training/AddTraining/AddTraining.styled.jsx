import styled from 'styled-components';

export const Section = styled.div`
    background: #F6F7FB;
`

export const TrainingSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 20px 0 20px;

    @media screen and (min-width: 1280px) {
        max-width: 928px;
    }
`

export const TrainingBtn = styled.button`
    height: 60px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    background: #B1B5C2;
    width: 100%;
    margin-top: 32px;
    cursor: pointer;
    border: none;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
    };

    @media screen and (min-width: 1280px) {
        max-width: 928px;
    };
`

export const Input = styled.input`
    position: relative;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    padding: 12px;

    @media screen and (min-width: 768px) {
        margin-right: 40px;
    };

    @media screen and (min-width: 1280px) {
        width: 250px;
        margin-right: 44px;
    };
`

export const Select = styled.select`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    padding: 12px;

    @media screen and (min-width: 768px) {
        width: 483px;
    };

    @media screen and (min-width: 1280px) {
        width: 715px;
    };
`

export const Option = styled.option`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
`

export const AddBtn = styled.button`
    box-sizing: border-box;
    width: 171px;
    height: 42px;
    margin-top: 32px;
    margin-right: auto;
    margin-left: auto;
    background: #F6F7FB;
    cursor: pointer;
    border: 1px solid #242A37;
    
    @media screen and (min-width: 768px) {
        margin-top: auto;
        margin-right: 0;
    };
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    };

    @media screen and (min-width: 1280px) {
        justify-content: center;
    };
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    };
`

export const Svg = styled.svg`
    width: 24px;
    height: 12px;
    fill: tomato;
`

export const SvgContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    };
`