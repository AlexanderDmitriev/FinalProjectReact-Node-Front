import styled from 'styled-components';

export const MetaHeader = styled.div`
  width: 280px;
  margin-top: -32px;
  margin-left: -29px;
  padding: 18px 30px 18px 30px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 275px;
    margin: auto 0;
    padding: 18px 27px 18px 28px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    margin-top: -87px;
    margin-left: 0px;
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
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const MetaBody = styled.section`
  text-align: center;
  width: 280px;
  padding: 32px 24px 44px 29px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px 43px 8px 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    max-width: 288px;
    padding: 54px 0px 44px 0px;
    display: block;
    position: absolute;
    top: 40px;
    right: 16px;
    padding-right: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: center;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    column-gap: 40px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 20px;
    margin-top: 0;
  }
`;

export const MetaBlock = styled.div`
  margin-top: 32px;
  height: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 60px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 100px;
  }
`;

export const MetaBlockNumber = styled.div`
  height: 100px;
  width: 100px;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  background: #f5f7fa;
  padding: 31px 0px;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 11px 0px;
    margin: auto;
    height: 60px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    padding-bottom: 30px;
    height: 100px;
  }
`;

export const MetaNumber = styled.div`
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
  color: #091e3f;
  margin: auto;
`;

export const MetaBlockText = styled.div`
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 66px;

  @media screen and (min-width: 768px) {
    margin-top: 4px;
    width: 100px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 14px;
    width: 66px;
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
