import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaBlockNumber,
  MetaNumber,
  MetaText,
  MetaBlockText,
  Flex,
  MetaBlock,
} from './MetaTwo.styled';

const MetaTwoPoints = () => {
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
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaTwoPoints;
