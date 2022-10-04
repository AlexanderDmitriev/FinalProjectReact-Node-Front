import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaBlockNumber,
  MetaNumber,
  MetaBlockText,
  MetaText,
  MetaNumberColor,
  Flex,
  MetaBlock,
} from './MetaThree.styled';

const MetaThreePoints = () => {
  return (
    <>
      <MetaBody>
        <MetaHeader>
          <HeaderText>Моя мета прочитати</HeaderText>
        </MetaHeader>
        <Flex>
          <MetaBlock>
            <MetaBlockNumber>
              <MetaNumber>00</MetaNumber>
            </MetaBlockNumber>
            <MetaBlockText>
              <MetaText>Кількість книжок</MetaText>
            </MetaBlockText>
          </MetaBlock>

          <MetaBlock>
            <MetaBlockNumber>
              <MetaNumber>00</MetaNumber>
            </MetaBlockNumber>
            <MetaBlockText>
              <MetaText>Кількість днів</MetaText>
            </MetaBlockText>
          </MetaBlock>

          <MetaBlock>
            <MetaBlockNumber>
              <MetaNumberColor>00</MetaNumberColor>
            </MetaBlockNumber>
            <MetaBlockText>
              <MetaText>Залишилось книжок</MetaText>
            </MetaBlockText>
          </MetaBlock>
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaThreePoints;
