import styled from 'styled-components';
import mobile from '../images/login + register img/mobile/mobile.jpg';
import mobile2x from '../images/login + register img/mobile/mobile@2x.jpg';
import tablet from '../images/login + register img/tablet/tablet.jpg';
import tablet2x from '../images/login + register img/tablet/tablet@2x.jpg';
import desktop from '../images/login + register img/desktop/desktop.jpg';
import desktop2x from '../images/login + register img/desktop/desktop@2x.jpg';

import marks from '../images/marks.svg';
import google from '../images/googleicon.svg';

import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
/* import {theme} from '../helpers/theme'; */

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const FormBox = styled.div`
  /* width: 320px; */
  height: 458px;
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${mobile});

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${mobile2x});
  }

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    height: 619px;
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${tablet});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${tablet2x});
    }
  }

  @media screen and (min-width: 1280px) {
    /* width: 549px; */
    height: 850px;
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${desktop});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${desktop2x});
    }
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormInput = styled.div`
  height: 450px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 400px;
    background: #ffffff;
    margin-top: 64px;
    margin-bottom: 129px;
  }

  @media screen and (min-width: 1280px) {
    left: 75px;
    top: 150px;
    margin-top: 90px;
  }

  display: flex;
  flex-direction: column;
`;

export const GoogleButton = styled.button`
  margin-top: 32px;
  margin-bottom: 28px;
  border-radius: 2px;
  :hover {
    background-color: #ebf0f7;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  width: 150px;
  height: 40px;
  left: 310px;
  top: 164px;
  margin-left: auto;
  margin-right: auto;

  background: #f5f7fa;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
  border: none;
`;

export const TextGoogleButton = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 38px;

  text-align: center;

  color: #707375;

  ::before {
    content: '';
    margin-right: 16px;
    padding-left: 10px;
    padding-right: 10px;
    background-image: url(${google});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const Input = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const InputEmail = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 156px;
  left: 20px;
  top: 160px;
  margin-bottom: 8px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 154px;
    height: 17px;
    left: 115px;
    top: 353px;

    font-weight: 500;

    color: #898f9f;
  }
`;

export const Star = styled.span`
  color: #ff6b08;
  margin-left: 3px;
`;

export const FieldInput = styled(Field)`
  width: 280px;
  height: 42px;
  left: 20px;
  top: 185px;
  padding-left: 8px;

  @media screen and (min-width: 768px) {
    width: 320px;
    left: 115px;
    top: 378px;
    padding-left: 12px;
  }

  background: #f5f7fa;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

  border: none;
`;

export const Button = styled.button`
  width: 280px;
  height: 60px;
  left: 20px;
  top: 334px;
  margin-bottom: 16px;
  :hover {
    background-color: #fd781f;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    left: 115px;
    top: 539px;
    margin-bottom: 20px;
  }

  background: #ff6b08;
  margin-left: auto;
  margin-right: auto;
  border: none;
`;

export const TextButton = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

export const NavRegister = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  text-decoration-line: underline;
  text-align: center;

  color: #ff6b08;
`;

export const Error = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.12;
  color: red;
  text-align: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 71px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 167px;
    margin-top: 206px;
  }
`;

export const Mark = styled.div`
  width: 27px;
  height: 70px;

  @media screen and (min-width: 768px) {
    width: 31px;
    height: 93px;
  }

  background-image: url(${marks});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Text = styled.p`
  width: 229px;
  height: 80px;
  left: 46px;
  top: 507px;

  font-size: 13px;
  line-height: 16px;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 526px;
    height: 152px;
    line-height: 38px;
    font-size: 24px;
    line-height: 40px;

    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 397px;
    height: 200px;
  }

  font-style: normal;
  font-weight: 500;

  text-align: center;

  color: #242a37;
`;

export const Border = styled.div`
  width: 100px;
  height: 0px;
  left: 110px;
  top: 603px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 0px;
  }

  border-bottom: 1px solid rgba(36, 42, 55, 0.5);
`;

export const Author = styled.p`
  font-size: 14px;
  line-height: 17px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }

  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: #898f9f;
`;
