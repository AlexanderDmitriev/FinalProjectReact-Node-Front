import styled from 'styled-components';

export const MetaHeader = styled.div`
  width: 280px;
  height: 60px;
  margin-top: -32px;
  margin-left: -29px;
  padding: 18px 30px 18px 30px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 275px;
    margin: 20px 0 45px 0;
    padding: 18px 27px 18px 28px;
  }
  @media screen and (min-width: 1280px) {
    width: 280px;
    margin-top: -80px;
    margin-left: -18px;
    margin-bottom: 60px;
    padding: 18px 28px 18px 29px;
  }
`;

export const HeaderText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  color: #ffffff;

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const MetaBody = styled.section`
  text-align: center;
  width: 280px;
  padding: 32px 24px 0 29px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 0px 43px 0 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    padding: 80px 25px 0 18px;
    display: block;
    position: absolute;
    top: 40px;
    right: 16px;
    padding-right: 0;
    max-width: 280px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MetaBlock = styled.div`
  margin-top: 32px;
  &:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 20;
    }
  }
`;

export const MetaBlockNumber = styled.div`
  height: 63px;
  width: 63px;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  background: #f5f7fa;
  padding-top: 13px;
  padding-bottom: 12px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 100px;
    padding-top: 11px;
    padding-bottom: 11px;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    height: 66px;
    width: 66px;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-top: 80px;
  }
`;

export const MetaNumber = styled.div`
  font-weight: 700;
  font-size: 35px;
  line-height: 38px;
  color: #091e3f;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const MetaNumberColor = styled.div`
  font-weight: 700;
  font-size: 35px;
  line-height: 38px;
  color: #ff6b08;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const MetaBlockText = styled.div`
  margin-top: 8px;
  width: 73px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  width: 63px;
  @media screen and (min-width: 768px) {
    margin-top: 4px;
    width: 100px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 14px;
    width: 66px;
    margin-bottom: 79px;
  }
`;

export const MetaText = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #898f9f;
  @media screen and (min-width: 768px) {
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
