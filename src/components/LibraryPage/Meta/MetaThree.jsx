import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaBlock,
  MetaNumber,
  MetaBlockText,
  MetaText,
  MetaNumberColor,
  Flex,
} from './MetaThree.styled';

const MetaThreePoints = () => {
  return (
    <>
      <MetaBody>
        <MetaHeader>
          <HeaderText>Моя мета прочитати</HeaderText>
        </MetaHeader>
        <Flex>
          <div>
            <MetaBlock>
              <MetaNumber>00</MetaNumber>
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість книжок</MetaText>
            </MetaBlockText>
          </div>

          <div>
            <MetaBlock>
              <MetaNumber>00</MetaNumber>
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість днів</MetaText>
            </MetaBlockText>
          </div>

          <div>
            <MetaBlock>
              <MetaNumberColor>00</MetaNumberColor>
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Залишилось книжок</MetaText>
            </MetaBlockText>
          </div>
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaThreePoints;
