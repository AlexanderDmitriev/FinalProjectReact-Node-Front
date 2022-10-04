import styled from 'styled-components';

export const MetaHeader = styled.div`
  /* max-width: 320px; */
  width: 280px;
  height: 60px;
  margin-top: -44px;
  margin-left: -30px;
  padding: 18px 30px 18px 30px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 275px;
    margin: 0;
    padding: 18px 27px 18px 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    margin-top: -48px;
    margin-left: -34px;
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
`;

export const MetaBody = styled.section`
  /* max-width: 320px; */
  text-align: center;
  width: 280px;
  padding: 32px 24px 0 29px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px 43px 0 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    /* padding: 48px 34px 0 34px; */
    padding: 80px 25px 0 18px;
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MetaBlock = styled.div`
  /* max-width: 320px; */
  height: 63px;
  width: 63px;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  background: #f5f7fa;
  padding-top: 13px;
  padding-bottom: 12px;
  /* margin-top: 44px; */
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 100px;
    padding-top: 11px;
    padding-bottom: 11px;
    /* margin-top: 20px; */
    /* margin-bottom: 0; */
  }

  @media screen and (min-width: 1280px) {
    height: 66px;
    width: 66px;
    padding-top: 14px;
    padding-bottom: 14px;
    /* margin-top: 48px; */
  }
`;

export const MetaNumber = styled.div`
  /* max-width: 320px; */
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
  /* max-width: 320px; */
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
  /* max-width: 320px; */
  margin-top: 8px;
  width: 73px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 4px;
    width: 100px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 14px;
    width: 66px;
    margin-bottom: 79px;
  }
`;

export const MetaText = styled.p`
  /* max-width: 320px; */
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #898f9f;
  @media screen and (min-width: 768px) {
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-height: 15px;
  }
`;